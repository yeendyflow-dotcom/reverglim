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
        <meta name="google-site-verification" content="e6758bfc9ff45603" />

        {/* ── SEO principal ── */}
        <meta
          name="description"
          content="Reverglim es la red social POST-SCROLL: el contenido exclusivo se destaca, el scroll infinito termina y la interacción es más humana. Descubre la nueva era de las redes sociales."
        />
        <meta
          name="keywords"
          content="reverglim, reverglim app, red social, redes sociales, red social post-scroll, nueva red social, red social diferente, red social sin scroll infinito, red social exclusiva, red social segura, red social innovadora, contenido exclusivo, bienestar digital, alternativa instagram, alternativa tiktok, rglim, reverglim red social"
        />
        <meta name="author" content="Reverglim" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href={SITE_URL} />

        {/* ── Open Graph ── */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta
          property="og:title"
          content="Reverglim — La red social POST-SCROLL donde el contenido exclusivo destaca"
        />
        <meta
          property="og:description"
          content="Reverglim es la red social POST-SCROLL: el contenido exclusivo se destaca, el scroll infinito termina y la interacción es más humana. Únete a la nueva era social."
        />
        <meta property="og:image" content={`${SITE_URL}/images/og-image.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Reverglim — La red social POST-SCROLL" />
        <meta property="og:site_name" content="Reverglim" />
        <meta property="og:locale" content="es_ES" />

        {/* ── Twitter Card ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@reverglim" />
        <meta
          name="twitter:title"
          content="Reverglim — La red social POST-SCROLL donde el contenido exclusivo destaca"
        />
        <meta
          name="twitter:description"
          content="Reverglim es la red social POST-SCROLL: el contenido exclusivo se destaca y el scroll infinito termina."
        />
        <meta name="twitter:image" content={`${SITE_URL}/images/og-image.jpg`} />

        {/* ── Favicon ── */}
        <link
          rel="icon"
          href="https://ik.imagekit.io/yfitk2mna/Orange_and_Black_Illustrative_Engineering_Services_Logo_Design___5_-removebg-preview.png?updatedAt=1778986456032"
        />
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
