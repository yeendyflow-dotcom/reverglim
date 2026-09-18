const SITE_URL = 'https://reverglim.com';

const pages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/que-es-reverglim', priority: '0.9', changefreq: 'monthly' },
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
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
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
