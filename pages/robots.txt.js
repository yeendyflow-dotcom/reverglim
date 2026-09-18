export default function Robots() {}

export async function getServerSideProps({ res }) {
  const SITE_URL = 'https://reverglim.com';
  const content = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml`;

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Cache-Control', 'public, s-maxage=86400');
  res.write(content);
  res.end();
  return { props: {} };
}
