import Head from 'next/head';
import { useRouter } from 'next/router';
import { SITE_URL, SITE_NAME } from '../lib/site';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  // URL canónica de la página actual (sin query ni hash), con la misma
  // convención que los canonicals de cada página: "/" lleva barra final.
  const path = router.asPath.split(/[?#]/)[0];
  const pageUrl = `${SITE_URL}${path === '/' ? '/' : path}`;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* ── Robots global (las páginas con noindex propio prevalecen) ── */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        {/* ── hreflang autorreferenciado por URL: el sitio solo publica en español ── */}
        <link rel="alternate" hrefLang="es" href={pageUrl} />
        <link rel="alternate" hrefLang="x-default" href={pageUrl} />
        {/* ── Nombre del sitio para Open Graph (las páginas pueden sobrescribirlo) ── */}
        <meta property="og:site_name" content={SITE_NAME} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
