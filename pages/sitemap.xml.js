// pages/sitemap.xml.js
// Genera el sitemap dinámicamente para SEO

const SITE_URL = 'https://reverglim.com';

function generateSiteMap() {
  const pages = [
    { url: '/',                          priority: '1.0', changefreq: 'weekly' },
    { url: '/politicas-de-privacidad',   priority: '0.6', changefreq: 'monthly' },
    { url: '/terminos',                  priority: '0.5', changefreq: 'monthly' },
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${pages
  .map(
    ({ url, priority, changefreq }) => `  <url>
    <loc>${SITE_URL}${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;
}

export default function SiteMap() {
  // Esta página no renderiza HTML, solo XML
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();
  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(sitemap);
  res.end();
  return { props: {} };
}
