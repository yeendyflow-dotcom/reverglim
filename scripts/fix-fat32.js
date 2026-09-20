// Workaround para compilar en volúmenes FAT32 (p. ej. si este proyecto vive en
// un disco D:\ formateado en FAT32). En FAT32 no existen los symlinks y Node
// (libuv) devuelve EISDIR en fs.readlink/fs.realpath, lo que rompe a webpack
// y a Next.js.
//
// Seguridad multiplataforma: este script NO HACE NADA a menos que detecte el
// bug de FAT32 en tiempo de carga (probe con readlink). En sistemas sanos
// (NTFS, Linux, macOS, Vercel) es un no-op total: no modifica nada.
//
// La corrección aplicada: convertir EISDIR en EINVAL, que es exactamente el
// error que un sistema de archivos normal devuelve para "esta ruta no es un
// enlace simbólico". Webpack/enhanced-resolve manejan EINVAL con normalidad.
// NOTA: fs.realpathSync debe conservar intacta su propiedad .native, porque
// Next.js la usa directamente en Linux (next/dist/lib/realpath.js).

const fs = require('fs');
const path = require('path');

// ── Probe: ¿está presente el bug de FAT32? ─────────────────────────────────
let needsPatch = false;
try {
  fs.readlinkSync(__dirname);
} catch (e) {
  if (e && e.code === 'EISDIR') needsPatch = true;
}
if (!needsPatch) {
  return; // Sistema sano: salir sin tocar nada.
}

function asNotALink(err, p) {
  const e = new Error(`EINVAL: invalid argument, readlink '${p}'`);
  e.code = 'EINVAL';
  e.errno = -4071;
  e.syscall = 'readlink';
  e.path = p;
  e.originalError = err;
  return e;
}

function isFat32Bug(err) {
  return !!err && (err.code === 'EISDIR' || err.code === 'EINVAL');
}

// ── Capturar originales ANTES de modificar nada ────────────────────────────
const origReadlink = fs.readlink;
const origReadlinkSync = fs.readlinkSync;
const origReadlinkPromise = fs.promises.readlink;

const origRealpath = fs.realpath;
const origRealpathSync = fs.realpathSync;
const origRealpathSyncNative = fs.realpathSync.native;
const origRealpathPromise = fs.promises.realpath;

function fallbackResolved(p) {
  return path.resolve(String(p));
}

// ── readlink: EISDIR -> EINVAL ─────────────────────────────────────────────
function patchedReadlink(p, ...rest) {
  const cb = rest.pop();
  origReadlink.call(fs, p, ...rest, (err, link) => {
    if (err && err.code === 'EISDIR') return cb(asNotALink(err, p));
    cb(err, link);
  });
}
function patchedReadlinkSync(p, ...rest) {
  try {
    return origReadlinkSync.call(fs, p, ...rest);
  } catch (err) {
    if (err && err.code === 'EISDIR') throw asNotALink(err, p);
    throw err;
  }
}
async function patchedReadlinkPromise(p, ...rest) {
  try {
    return await origReadlinkPromise.call(fs.promises, p, ...rest);
  } catch (err) {
    if (err && err.code === 'EISDIR') throw asNotALink(err, p);
    throw err;
  }
}

// ── realpath: ante el bug FAT32, devolver la ruta absoluta ─────────────────
// (realpath debe tener éxito para rutas existentes; en FAT32 no hay nada que
// resolver, así que la ruta absoluta normalizada es la respuesta correcta)
function patchedRealpath(p, ...rest) {
  const cb = rest.pop();
  origRealpath.call(fs, p, ...rest, (err, resolved) => {
    if (isFat32Bug(err)) return cb(null, fallbackResolved(p));
    cb(err, resolved);
  });
}
function patchedRealpathSync(p, ...rest) {
  try {
    return origRealpathSync.call(fs, p, ...rest);
  } catch (err) {
    if (isFat32Bug(err)) return fallbackResolved(p);
    throw err;
  }
}
function patchedRealpathSyncNative(p, ...rest) {
  try {
    return origRealpathSyncNative.call(fs, p, ...rest);
  } catch (err) {
    if (isFat32Bug(err)) return fallbackResolved(p);
    throw err;
  }
}
async function patchedRealpathPromise(p, ...rest) {
  try {
    return await origRealpathPromise.call(fs.promises, p, ...rest);
  } catch (err) {
    if (isFat32Bug(err)) return fallbackResolved(p);
    throw err;
  }
}

// ── Aplicar parches conservando .native ─────────────────────────────────────
if (typeof origRealpathSyncNative === 'function') {
  patchedRealpathSync.native = patchedRealpathSyncNative;
}
fs.readlink = patchedReadlink;
fs.readlinkSync = patchedReadlinkSync;
fs.promises.readlink = patchedReadlinkPromise;
fs.realpath = patchedRealpath;
fs.realpathSync = patchedRealpathSync;
fs.promises.realpath = patchedRealpathPromise;
