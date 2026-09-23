/**
 * IndexNow ping — notificación de indexación instantánea para
 * Bing, Yandex, Seznam y Naver (protocolo https://www.indexnow.org).
 *
 * Uso (después de cada deploy a producción):
 *   npm run indexnow
 *
 * La clave debe existir en public/<KEY>.txt y estar servida en
 * https://reverglim.com/<KEY>.txt — valida que responda 200 antes
 * de ejecutar el ping por primera vez.
 *
 * Si agregas nuevas páginas al sitio, actualiza ROUTES aquí y en
 * pages/sitemap.xml.js.
 */

const HOST = 'reverglim.com';
const SITE_URL = `https://${HOST}`;
const KEY = 'f4e1ec7394a24b68aba719919527b09d';
const KEY_LOCATION = `${SITE_URL}/${KEY}.txt`;

// Deben coincidir EXACTAMENTE con las URLs canónicas de cada página
// (la home con barra final; el resto sin barra final).
const ROUTES = [
  '/',
  '/que-es-reverglim',
  '/alternativa-tiktok',
  '/alternativa-instagram',
  '/red-social-segura-menores',
  '/red-social-sin-publicidad',
  '/mejor-red-social-2026',
  '/seguridad-infantil',
  '/privacidad',
  '/term',
];

async function main() {
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: ROUTES.map((route) => (route === '/' ? `${SITE_URL}/` : `${SITE_URL}${route}`)),
  };

  console.log(`IndexNow → enviando ${payload.urlList.length} URLs de ${HOST}...`);

  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    console.log(`OK (${response.status}). Bing y Yandex rastrearán las URLs en minutos.`);
  } else {
    console.error(`Error ${response.status}: ${await response.text()}`);
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error('No se pudo contactar la API de IndexNow:', error.message);
  process.exitCode = 1;
});
