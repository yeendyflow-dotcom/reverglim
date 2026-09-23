import { SITE_URL } from '../lib/site';

// Fecha de la última modificación real del contenido del sitio.
// IMPORTANTE: actualízala solo cuando cambie contenido real de las páginas.
// Un lastmod que miente (p. ej. "hoy" en cada request) hace que Google
// aprenda a ignorarlo. Al modificarlo, ejecuta también `npm run indexnow`.
const LAST_MOD = '2026-09-23';

const pages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/que-es-reverglim', priority: '0.9', changefreq: 'monthly' },
  { path: '/alternativa-tiktok', priority: '0.9', changefreq: 'monthly' },
  { path: '/alternativa-instagram', priority: '0.9', changefreq: 'monthly' },
  { path: '/red-social-segura-menores', priority: '0.8', changefreq: 'monthly' },
  { path: '/red-social-sin-publicidad', priority: '0.8', changefreq: 'monthly' },
  { path: '/mejor-red-social-2026', priority: '0.8', changefreq: 'monthly' },
  { path: '/seguridad-infantil', priority: '0.7', changefreq: 'monthly' },
  { path: '/privacidad', priority: '0.5', changefreq: 'yearly' },
  { path: '/term', priority: '0.5', changefreq: 'yearly' },
];

function generateSitemap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    ({ path, priority, changefreq }) => `  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${LAST_MOD}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;
}

export default function Sitemap() {}

export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(generateSitemap());
  res.end();
  return { props: {} };
}
