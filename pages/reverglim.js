import SEO from '../components/SEO';
import SiteNav from '../components/SiteNav';
import { SITE_URL } from '../lib/site';

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '¿Qué es Reverglim? Una red social para compartir y conversar',
  description:
    'Conoce Reverglim: una red social móvil para compartir contenido y conversar con comentarios de texto y notas de voz en el feed de Reels.',
  url: `${SITE_URL}/reverglim`,
  inLanguage: 'es',
  author: { '@type': 'Organization', name: 'Reverglim', url: SITE_URL },
  publisher: { '@type': 'Organization', name: 'Reverglim', url: SITE_URL },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/reverglim` },
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
        text: 'Reverglim es una red social móvil para compartir contenido y conversar mediante comentarios escritos y notas de voz en el feed de Reels.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo se conversa en el feed de Reels de Reverglim?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las personas pueden participar en la conversación sobre el contenido con comentarios escritos y notas de voz.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué significa POST-SCROLL?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'POST-SCROLL expresa la idea de que la experiencia social puede ir más allá de desplazarse por publicaciones e incluir conversaciones con texto y voz.',
      },
    },
  ],
};

export default function Reverglim() {
  return (
    <>
      <SEO
        title="Reverglim | Qué es y quiénes somos"
        description="Conoce Reverglim, una red social móvil para compartir contenido y conversar con comentarios de texto y notas de voz en el feed de Reels."
        path="/reverglim"
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
              Reverglim es una red social móvil creada para quienes quieren
              conectar, compartir y destacar de una manera diferente. Reúne
              contenido exclusivo y conversaciones en el feed de Reels, donde las
              personas pueden participar con comentarios escritos y notas de voz.
            </p>
          </header>

          <div className="seo-body">
            <section className="reverglim-about">
              <img
                className="reverglim-about__image"
                src="https://ik.imagekit.io/q9tlsrum4/Image-Photoroom.png?updatedAt=1790990685121"
                alt="Experiencia social de Reverglim"
              />
              <div>
                <h2>RED SOCIAL ALTAMENTE INTERACTIVA</h2>
                <p>
                  Reverglim se orienta a una interacción social HIPER - INNOVADORA, donde la seguridad, la comodidad y el contenido que visualizas se alinean a una interacción social FUTURISTA dejando a un lado lo obsoleto y fijando como objetivo principal la interacción colaborativa sin necesidad de internet.
                </p>
                <p> 
                  Imagina un espacio donde la interacción social no dependa de una conexión a internet constante, sino que se base en la colaboración y la participación de todos.
                </p>
                <p>
                  Nuestra misión es crear un entorno donde una conexión evolutiva forme parte de nosotros con el intercambio de señales virtuales entre dispositivos. En Reverglim nos centramos en la interacción y la participación de todos, ofreciendo una APP para expresarnos y conectar con otras personas que formen parte de nuestra comunidad.
                </p>
               
              </div>
            </section>

            <section className="seo-section">
              <h2>Una red social para compartir y conversar</h2>
              <p>
                Reverglim combina contenido exclusivo con herramientas de
                interacción integradas en la experiencia social. Así, las personas
                pueden descubrir publicaciones y responder a ellas sin separar el
                contenido de la conversación que genera.
              </p>
            </section>

            <section className="seo-section">
              <h2>Comentarios de texto y notas de voz en el feed de Reels</h2>
              <p>
                En el feed de Reels, las personas pueden reaccionar al contenido
                mediante comentarios escritos y notas de voz. Estas formas de
                participación permiten expresar una idea por escrito o compartirla
                con la propia voz, dentro de la conversación que acompaña a los
                videos.
              </p>
              <p>
                La propuesta de Reverglim pone el énfasis en esa combinación de
                video, texto y voz: no solo ver contenido, sino también tener un
                espacio para conversar sobre él.
              </p>
            </section>

            <section className="seo-section">
              <h2>¿Qué significa POST-SCROLL?</h2>
              <p>
                POST-SCROLL es la expresión que resume esta visión: la experiencia
                social puede ir más allá de desplazarse entre publicaciones. En
                Reverglim, los comentarios escritos y las notas de voz en el feed
                de Reels invitan a continuar la interacción alrededor del
                contenido.
              </p>
            </section>

            <section className="seo-section">
              <h2>Preguntas frecuentes sobre Reverglim</h2>
              <div className="seo-faq">
                <div className="seo-faq__item">
                  <h3>¿Qué es Reverglim?</h3>
                  <p>
                    Reverglim es una red social móvil para compartir contenido y
                    conversar mediante comentarios escritos y notas de voz en el
                    feed de Reels.
                  </p>
                </div>
                <div className="seo-faq__item">
                  <h3>¿Cómo se conversa en el feed de Reels?</h3>
                  <p>
                    Puedes participar en la conversación sobre el contenido con
                    comentarios escritos y notas de voz.
                  </p>
                </div>
                <div className="seo-faq__item">
                  <h3>¿Qué significa POST-SCROLL?</h3>
                  <p>
                    Es una forma de describir una experiencia social que va más
                    allá de desplazarse por publicaciones e incluye conversaciones
                    con texto y voz.
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
                <a
                  href="mailto:soporte@reverglim.com"
                  className="seo-cta__btn seo-cta__btn--ghost"
                >
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
