import { SITE_URL } from '../lib/site';

const PAGES = [
  '/',
  '/reverglim',
  '/mision',
  '/invertir',
  '/term',
  '/privacidad',
  '/seguridad-infantil',
];

function generateSitemap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.map((path) => `  <url><loc>${SITE_URL}${path}</loc></url>`).join('\n')}
</urlset>`;
}

export default function Sitemap() {
  return null;
}

export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'text/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
  res.write(generateSitemap());
  res.end();
  return { props: {} };
}
