import Head from 'next/head';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Página no encontrada (404) | Reverglim</title>
        <meta
          name="description"
          content="La página que buscas no existe o fue movida. Vuelve a Reverglim, la red social POST-SCROLL: sin scroll infinito, con privacidad real y seguridad por diseño."
        />
        <meta name="robots" content="noindex" />
      </Head>

      <div className="seo-page">
        <nav className="seo-nav">
          <Link href="/" className="seo-nav__logo">
            ← Volver a Reverglim
          </Link>
        </nav>

        <main className="seo-main container">
          <header className="seo-header">
            <span className="seo-label">Error 404</span>
            <h1 className="seo-title">
              Esta página <span className="text-red">no existe</span>
            </h1>
            <p className="seo-lead">
              El enlace que seguiste está roto o el contenido fue movido.
              Puedes volver al inicio o explorar lo que Reverglim tiene para ti.
            </p>
          </header>

          <div className="seo-body">
            <section className="seo-cta">
              <h2>Explora Reverglim</h2>
              <p>
                Reverglim es la red social POST-SCROLL: sin scroll infinito,
                con contenido exclusivo, privacidad real y seguridad por diseño.
              </p>
              <div className="seo-cta__links">
                <Link href="/" className="seo-cta__btn">
                  Ir al inicio →
                </Link>
                <Link href="/que-es-reverglim" className="seo-cta__btn seo-cta__btn--ghost">
                  ¿Qué es Reverglim?
                </Link>
              </div>
            </section>
          </div>
        </main>

        <footer className="seo-footer">
          <div className="container">
            <p>© {new Date().getFullYear()} Reverglim — La red social POST-SCROLL</p>
            <nav>
              <Link href="/">Reverglim — Red social POST-SCROLL</Link>
              <Link href="/alternativa-tiktok">vs. TikTok</Link>
              <Link href="/alternativa-instagram">vs. Instagram</Link>
              <Link href="/privacidad">Privacidad</Link>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
}
