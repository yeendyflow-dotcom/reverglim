import { Html, Head, Main, NextScript } from 'next/document';

const SITE_URL = 'https://reverglim.com';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Reverglim',
  alternateName: ['Reverglim App', 'Rglim', 'Reverglim Red Social', 'Red Social Post-Scroll'],
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/images/og-image.jpg`,
    width: 1200,
    height: 630,
  },
  slogan: 'La red social POST-SCROLL donde el contenido exclusivo destaca',
  description:
    'Reverglim es una red social móvil diferente: una plataforma POST-SCROLL donde el contenido exclusivo se destaca, el scroll infinito termina y la interacción entre usuarios es más humana, segura e innovadora.',
  sameAs: [
    'https://www.instagram.com/reverglim/',
    'https://www.instagram.com/rglimoficial/',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'soporte@reverglim.com',
    contactType: 'customer support',
    availableLanguage: 'Spanish',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Reverglim',
  alternateName: 'Reverglim — La red social POST-SCROLL',
  url: SITE_URL,
  inLanguage: 'es',
  description:
    'Reverglim es la red social POST-SCROLL: contenido exclusivo destacado, sin scroll infinito, con seguridad por diseño y bienestar digital.',
  publisher: {
    '@type': 'Organization',
    name: 'Reverglim',
    url: SITE_URL,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Reverglim',
  operatingSystem: 'Android, iOS',
  applicationCategory: 'SocialNetworkingApplication',
  description:
    'Reverglim es una red social móvil POST-SCROLL: la primera plataforma diseñada para que el contenido exclusivo destaque, con interacciones innovadoras, seguridad avanzada y protección de datos.',
  url: SITE_URL,
  author: {
    '@type': 'Organization',
    name: 'Reverglim',
    url: SITE_URL,
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'Contenido exclusivo destacado',
    'Sin scroll infinito',
    'Interacciones innovadoras',
    'Seguridad por diseño',
    'Protección de datos',
    'Comunidad capacitada',
    'Monetización de videos',
    'Comunicación innovadora',
  ],
};

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta charSet="UTF-8" />

        {/* ── Google Search Console verification ── */}
        {/* Cuenta actual (método meta tag) */}
        <meta name="google-site-verification" content="bssiv53xQrbjedpyiRYz3PzTAArHsraNfkg3b0gepGQ" />
        {/* Las cuentas anteriores siguen verificadas vía /googlee6758bfc9ff45603.html en public/ */}

        {/* ── Favicon / PWA icons ── */}
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#E8112C" />

        {/* ── Fonts ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        {/* ── Structured Data JSON-LD ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
