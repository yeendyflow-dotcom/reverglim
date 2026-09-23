import { Html, Head, Main, NextScript } from 'next/document';
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, SOCIAL_PROFILES } from '../lib/site';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
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
  brand: {
    '@type': 'Brand',
    name: SITE_NAME,
  },
  knowsAbout: [
    'red social',
    'red social post-scroll',
    'contenido exclusivo',
    'bienestar digital',
    'seguridad en redes sociales',
    'red social sin publicidad',
  ],
  sameAs: SOCIAL_PROFILES,
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
  '@id': `${SITE_URL}/#website`,
  name: SITE_NAME,
  alternateName: 'Reverglim — La red social POST-SCROLL',
  url: SITE_URL,
  inLanguage: 'es',
  description: SITE_DESCRIPTION,
  publisher: { '@id': `${SITE_URL}/#organization` },
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: SITE_NAME,
  alternateName: 'Reverglim App',
  operatingSystem: 'Android, iOS',
  applicationCategory: 'SocialNetworkingApplication',
  description:
    'Reverglim es una red social móvil POST-SCROLL: la primera plataforma diseñada para que el contenido exclusivo destaque, con interacciones innovadoras, seguridad avanzada y protección de datos.',
  url: SITE_URL,
  author: { '@id': `${SITE_URL}/#organization` },
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
        <link rel="manifest" href="/site.webmanifest" />
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
