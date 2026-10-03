import Head from 'next/head';
import { SITE_NAME, SITE_URL, SOCIAL_IMAGE_URL } from '../lib/site';

export default function SEO({
  title,
  description,
  path = '/',
  image = SOCIAL_IMAGE_URL,
  type = 'website',
  structuredData = [],
  noIndex = false,
}) {
  const canonicalUrl = new URL(path, SITE_URL).toString();
  const imageUrl = new URL(image, SITE_URL).toString();
  const schemas = Array.isArray(structuredData) ? structuredData : [structuredData];
  const robotsContent = noIndex
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={`${SITE_NAME} — ${title}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@reverglim" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      {schemas.filter(Boolean).map((schema, index) => (
        <script
          key={`${schema['@type'] || 'schema'}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
          }}
        />
      ))}
    </Head>
  );
}
