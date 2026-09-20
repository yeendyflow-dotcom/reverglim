// Workaround para builds en volúmenes FAT32 (p. ej. este proyecto vive en D:\):
// en FAT32 no existen los symlinks y Node (libuv) devuelve por error EISDIR en
// fs.readlink, lo que rompe a webpack y a Next.js.
//
// La corrección adecuada NO es "hacer como si funcionara": devolver la propia
// ruta equivale a decir "este archivo es un symlink hacia sí mismo", lo que
// provoca recursión infinita en enhanced-resolve.
//
// Lo correcto es convertir EISDIR en EINVAL, que es exactamente el error que
// un sistema de archivos con soporte de symlinks devuelve para "esta ruta no
// es un enlace simbólico". Webpack/enhanced-resolve manejan EINVAL con
// normalidad y siguen adelante.

const fs = require('fs');
const path = require('path');

function asNotALink(err, p) {
  const e = new Error(`EINVAL: invalid argument, readlink '${p}'`);
  e.code = 'EINVAL';
  e.errno = -4071;
  e.syscall = 'readlink';
  e.path = p;
  e.originalError = err;
  return e;
}

// ── readlink: EISDIR -> EINVAL ─────────────────────────────────────────────
const origReadlink = fs.readlink;
fs.readlink = function patchedReadlink(p, ...rest) {
  const cb = rest.pop();
  origReadlink.call(fs, p, ...rest, (err, link) => {
    if (err && err.code === 'EISDIR') return cb(asNotALink(err, p));
    cb(err, link);
  });
};

const origReadlinkSync = fs.readlinkSync;
fs.readlinkSync = function patchedReadlinkSync(p, ...rest) {
  try {
    return origReadlinkSync.call(fs, p, ...rest);
  } catch (err) {
    if (err && err.code === 'EISDIR') throw asNotALink(err, p);
    throw err;
  }
};

const origReadlinkPromise = fs.promises.readlink;
fs.promises.readlink = async function patchedReadlinkPromise(p, ...rest) {
  try {
    return await origReadlinkPromise.call(fs.promises, p, ...rest);
  } catch (err) {
    if (err && err.code === 'EISDIR') throw asNotALink(err, p);
    throw err;
  }
};

// ── realpath: si falla por el bug de FAT32, devolver la ruta resuelta ──────
// (realpath debe tener éxito para rutas existentes; en FAT32 no hay nada que
// resolver, así que la ruta absoluta es el valor correcto)
function fallback(p) {
  return path.resolve(String(p));
}

function wrapRealpathAsync(container, key) {
  const orig = container[key];
  if (typeof orig !== 'function') return;
  container[key] = function patched(p, ...rest) {
    const cb = rest.pop();
    orig.call(container, p, ...rest, (err, resolved) => {
      if (err && (err.code === 'EISDIR' || err.code === 'EINVAL')) return cb(null, fallback(p));
      cb(err, resolved);
    });
  };
}

function wrapRealpathSync(container, key) {
  const orig = container[key];
  if (typeof orig !== 'function') return;
  container[key] = function patched(p, ...rest) {
    try {
      return orig.call(container, p, ...rest);
    } catch (err) {
      if (err && (err.code === 'EISDIR' || err.code === 'EINVAL')) return fallback(p);
      throw err;
    }
  };
}

wrapRealpathAsync(fs, 'realpath');
wrapRealpathSync(fs, 'realpathSync');
wrapRealpathSync(fs.realpathSync, 'native');

const origRealpathPromise = fs.promises.realpath;
fs.promises.realpath = async function patchedRealpathPromise(p, ...rest) {
  try {
    return await origRealpathPromise.call(fs.promises, p, ...rest);
  } catch (err) {
    if (err && (err.code === 'EISDIR' || err.code === 'EINVAL')) return fallback(p);
    throw err;
  }
};
