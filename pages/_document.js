import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Reverglim',
    url: 'https://reverglim.com',
    description:
      'Reverglim es la red social POST-SCROLL donde los usuarios interactúan de forma diferente y divertida. Descubre una nueva forma de conectar.',
    publisher: {
      '@type': 'Organization',
      name: 'Reverglim',
      logo: {
        '@type': 'ImageObject',
        url: 'https://reverglim.com/images/logo.jpg',
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://reverglim.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <Html lang="es">
      <Head>
        {/* ─── Charset & Viewport ─────────────────────── */}
        <meta charSet="UTF-8" />

        {/* ─── SEO Primary ────────────────────────────── */}
        <meta
          name="description"
          content="Reverglim es la red social POST-SCROLL donde los usuarios interactúan de forma diferente y divertida. Descubre una nueva forma de conectar sin límites."
        />
        <meta
          name="keywords"
          content="reverglim, red social, post-scroll, red social diferente, nueva red social, interacción social, redes sociales alternativas, social network"
        />
        <meta name="author" content="Reverglim" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://reverglim.com" />

        {/* ─── Google Search Console Verification ───── */}
        <meta name="google-site-verification" content="p8H6581oS9OPAdDW2TxvmLxPZjRGlwKER46j2eATgQc" />

        {/* ─── Open Graph / Facebook ──────────────────── */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://reverglim.com" />
        <meta property="og:title" content="Reverglim — La Red Social POST-SCROLL" />
        <meta
          property="og:description"
          content="Reverglim es la red social POST-SCROLL donde los usuarios interactúan de forma diferente y divertida. Descubre una nueva forma de conectar sin límites."
        />
        <meta property="og:image" content="https://reverglim.com/images/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Reverglim" />
        <meta property="og:locale" content="es_ES" />

        {/* ─── Twitter Card ───────────────────────────── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@reverglim" />
        <meta name="twitter:title" content="Reverglim — La Red Social POST-SCROLL" />
        <meta
          name="twitter:description"
          content="Reverglim es la red social POST-SCROLL donde los usuarios interactúan de forma diferente y divertida."
        />
        <meta name="twitter:image" content="https://reverglim.com/images/og-image.jpg" />

        {/* ─── Favicon ────────────────────────────────── */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#E8001C" />

        {/* ─── Google Fonts ───────────────────────────── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Rajdhani:wght@300;400;500;600;700&family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />

        {/* ─── Structured Data (JSON-LD) ───────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
