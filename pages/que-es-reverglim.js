import SEO from '../components/SEO';
import SiteNav from '../components/SiteNav';
import { SITE_URL } from '../lib/site';

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '¿Qué es Reverglim? Una red social altamente interactiva',
  description:
    'Conoce cómo Reverglim combina contenido exclusivo, comentarios de texto y notas de voz en el feed de Reels.',
  url: `${SITE_URL}/que-es-reverglim`,
  inLanguage: 'es',
  author: { '@type': 'Organization', name: 'Reverglim', url: SITE_URL },
  publisher: { '@type': 'Organization', name: 'Reverglim', url: SITE_URL },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/que-es-reverglim` },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es Reverglim?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Reverglim es una red social altamente interactiva con contenido exclusivo y conversaciones mediante comentarios de texto y notas de voz en el feed de Reels.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo se interactúa en los Reels de Reverglim?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Además de ver el contenido, las personas pueden participar en la conversación con comentarios escritos y notas de voz dentro del feed de Reels.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué significa POST-SCROLL en Reverglim?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'POST-SCROLL describe la propuesta de ampliar la interacción más allá de desplazarse por el contenido, dando espacio a conversaciones con texto y voz.',
      },
    },
  ],
};

export default function QueEsReverglim() {
  return (
    <>
      <SEO
        title="¿Qué es Reverglim? | Red social interactiva"
        description="Descubre Reverglim: una red social altamente interactiva con contenido exclusivo, comentarios de texto y notas de voz en el feed de Reels."
        path="/que-es-reverglim"
        type="article"
        structuredData={[articleSchema, faqSchema]}
      />

      <div className="seo-page">
        <SiteNav appearance="dark" />
        <main className="seo-main container">
          <header className="seo-header">
            <span className="seo-label">Reverglim · Red social interactiva</span>
            <h1 className="seo-title">¿Qué es Reverglim?</h1>
            <p className="seo-lead">
              Reverglim es una red social altamente interactiva donde las personas
              comparten contenido exclusivo y conversan en el feed de Reels con
              comentarios de texto y notas de voz.
            </p>
          </header>

          <div className="seo-body">
            <section className="seo-section">
              <h2>Una red social para compartir y conversar</h2>
              <p>
                Reverglim reúne publicaciones y conversaciones en una experiencia
                social pensada para que cada persona pueda expresarse y conectar
                con otras. Su propuesta combina contenido exclusivo con distintas
                maneras de participar.
              </p>
            </section>

            <section className="seo-section">
              <h2>Comentarios de texto y notas de voz en el feed de Reels</h2>
              <p>
                En Reverglim, la interacción no se limita a mirar un video y seguir
                desplazándose. Las personas pueden responder con comentarios escritos
                o notas de voz que aparecen en el feed de Reels, extendiendo la
                conversación alrededor del contenido.
              </p>
              <p>
                Esta combinación de video, texto y voz es parte de lo que hace que
                Reverglim sea una red social altamente interactiva y diferente en
                la forma de conectar a su comunidad.
              </p>
            </section>

            <section className="seo-section">
              <h2>¿Qué significa POST-SCROLL?</h2>
              <p>
                POST-SCROLL es la idea de que la experiencia social puede continuar
                después de ver una publicación: con conversaciones, respuestas y
                participación. En Reverglim, los comentarios de texto y las notas
                de voz en Reels forman parte de esa propuesta.
              </p>
            </section>

            <section className="seo-section">
              <h2>Preguntas frecuentes sobre Reverglim</h2>
              <div className="seo-faq">
                <div className="seo-faq__item">
                  <h3>¿Qué es Reverglim?</h3>
                  <p>
                    Es una red social altamente interactiva para compartir
                    contenido exclusivo y conversar con comentarios de texto y
                    notas de voz en el feed de Reels.
                  </p>
                </div>
                <div className="seo-faq__item">
                  <h3>¿Cómo se interactúa en los Reels?</h3>
                  <p>
                    Puedes participar en la conversación con comentarios escritos
                    y notas de voz que aparecen en el feed de Reels.
                  </p>
                </div>
                <div className="seo-faq__item">
                  <h3>¿Qué significa POST-SCROLL?</h3>
                  <p>
                    Describe una experiencia que va más allá de desplazarse por
                    publicaciones y da espacio a conversaciones con texto y voz.
                  </p>
                </div>
              </div>
            </section>

            <section className="seo-cta">
              <h2>Descubre Reverglim</h2>
              <p>
                Conoce la propuesta de Reverglim y síguenos para recibir novedades
                sobre la red social y su comunidad.
              </p>
              <div className="seo-cta__links">
                <a
                  href="https://www.instagram.com/reverglim/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="seo-cta__btn"
                >
                  Seguir @reverglim
                </a>
                <a href="mailto:soporte@reverglim.com" className="seo-cta__btn seo-cta__btn--ghost">
                  Contactar a Reverglim
                </a>
              </div>
            </section>
          </div>
        </main>

        <footer className="seo-footer">
          <div className="container">
            <p>© {new Date().getFullYear()} Reverglim</p>
            <nav aria-label="Enlaces legales">
              <a href="/term">Términos</a>
              <a href="/privacidad">Privacidad</a>
              <a href="/seguridad-infantil">Seguridad infantil</a>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
}
