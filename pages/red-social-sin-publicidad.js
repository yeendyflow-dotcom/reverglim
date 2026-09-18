import Head from 'next/head';
import Link from 'next/link';

const SITE_URL = 'https://reverglim.com';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Existe una red social sin publicidad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Reverglim es una red social que no usa tus datos para publicidad dirigida. A diferencia de Instagram, TikTok y Facebook, Reverglim no construye perfiles publicitarios ni vende tu información a anunciantes.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué red social no vende mis datos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Reverglim no vende datos de usuarios. Su modelo de negocio no depende de construir perfiles publicitarios ni de monetizar la información personal de sus usuarios.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la red social más privada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Reverglim es la red social más privada entre las plataformas de uso general: no vende datos, no construye perfiles publicitarios y no usa tu información para mostrarte anuncios dirigidos. La privacidad es un principio de diseño, no una opción de pago.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Por qué las redes sociales gratuitas venden mis datos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las redes sociales gratuitas como Instagram, TikTok y Facebook financian su operación vendiendo acceso a los perfiles de comportamiento de sus usuarios a anunciantes. Reverglim tiene un modelo de negocio diferente que no depende de la venta de datos.',
      },
    },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Red social sin publicidad y sin venta de datos: Reverglim, privacidad por diseño',
  description: 'Reverglim es la red social que no vende tus datos ni usa tu información para publicidad dirigida. Privacidad real, no como opción de pago.',
  url: `${SITE_URL}/red-social-sin-publicidad`,
  inLanguage: 'es',
  author: { '@type': 'Organization', name: 'Reverglim', url: SITE_URL },
  publisher: { '@type': 'Organization', name: 'Reverglim', url: SITE_URL },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/red-social-sin-publicidad` },
};

export default function RedSocialSinPublicidad() {
  return (
    <>
      <Head>
        <title>Red social sin publicidad 2025: Reverglim, privacidad por diseño</title>
        <meta
          name="description"
          content="¿Buscas una red social sin publicidad que no venda tus datos? Reverglim: privacidad por diseño, sin perfiles publicitarios, sin venta de información personal. La red social privada."
        />
        <meta
          name="keywords"
          content="red social sin publicidad, red social privada, red social que no vende datos, red social sin anuncios, red social privacidad, reverglim privacidad, alternativa privada instagram, alternativa privada tiktok, red social segura privacidad, red social sin rastreo"
        />
        <link rel="canonical" href={`${SITE_URL}/red-social-sin-publicidad`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE_URL}/red-social-sin-publicidad`} />
        <meta property="og:title" content="Red social sin publicidad 2025: Reverglim, privacidad por diseño" />
        <meta property="og:description" content="Reverglim no vende tus datos ni usa tu información para publicidad. Privacidad real en redes sociales." />
        <meta property="og:image" content={`${SITE_URL}/images/og-image.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Red social sin publicidad: Reverglim" />
        <meta name="twitter:description" content="Reverglim es la red social que no vende tus datos ni construye perfiles publicitarios." />
        <meta name="twitter:image" content={`${SITE_URL}/images/og-image.jpg`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      <div className="seo-page">
        <nav className="seo-nav">
          <Link href="/" className="seo-nav__logo">← Volver a Reverglim</Link>
        </nav>

        <main className="seo-main container">
          <header className="seo-header">
            <span className="seo-label">Privacidad · Red social · Sin publicidad</span>
            <h1 className="seo-title">
              <span className="text-red">Red social sin publicidad</span>:<br />
              Reverglim, privacidad por diseño
            </h1>
            <p className="seo-lead">
              Cada vez que usas Instagram, TikTok o Facebook, estás pagando con algo más
              valioso que dinero: tus datos. Reverglim es la red social que rompe ese
              modelo. Tu información es tuya. Punto.
            </p>
          </header>

          <div className="seo-body">

            <section className="seo-section">
              <h2>¿Por qué las redes sociales "gratuitas" no son realmente gratuitas?</h2>
              <p>
                Existe una frase que resume perfectamente el modelo de negocio de las
                redes sociales tradicionales: "Si el producto es gratuito, el producto
                eres tú." Instagram, TikTok, Facebook y la mayoría de las redes sociales
                masivas son gratuitas porque su verdadero producto no es la app: son
                los perfiles de comportamiento de sus usuarios.
              </p>
              <p>
                Cada like que das, cada video que ves, cada búsqueda que haces, cada
                lugar desde donde te conectas: todo eso se recopila, se analiza y se
                convierte en un perfil publicitario que se vende a anunciantes. Cuanto
                más detallado es el perfil, más caro se vende. Por eso estas plataformas
                quieren que pases el mayor tiempo posible en la app: más tiempo significa
                más datos, más datos significa perfiles más valiosos.
              </p>
              <p>
                Reverglim tiene un modelo diferente desde la raíz. <strong>No construimos
                perfiles publicitarios. No vendemos datos de usuarios. No usamos tu
                información para mostrarte anuncios dirigidos.</strong>
              </p>
            </section>

            <section className="seo-section">
              <h2>Cómo Instagram y Meta usan tus datos</h2>
              <p>
                Meta, la empresa propietaria de Instagram, Facebook y WhatsApp, es una
                de las empresas de publicidad digital más grandes del mundo. En 2023,
                Meta generó más de 116,000 millones de dólares en ingresos, de los cuales
                más del 97% provino de publicidad. Esa publicidad se financia con los
                datos de sus usuarios.
              </p>
              <p>
                Los datos que Meta recopila incluyen: historial de navegación dentro y
                fuera de la app, ubicación geográfica, información del dispositivo,
                patrones de comportamiento, intereses inferidos, información de contactos,
                y mucho más. Con esos datos, Meta construye perfiles publicitarios que
                permiten a los anunciantes dirigir sus mensajes a segmentos de usuarios
                extremadamente específicos.
              </p>
              <p>
                Reverglim no hace nada de eso. La información que compartes en Reverglim
                se usa para hacer funcionar la plataforma, no para construir perfiles
                publicitarios ni para venderla a terceros.
              </p>
            </section>

            <section className="seo-section">
              <h2>Cómo TikTok recopila tus datos</h2>
              <p>
                TikTok ha sido objeto de múltiples investigaciones gubernamentales en
                Estados Unidos, Europa y otros países por sus prácticas de recopilación
                de datos. La app recopila una cantidad extraordinaria de información:
                historial de búsqueda, contenido del portapapeles, información biométrica
                del rostro y la voz, datos de ubicación precisos y mucho más.
              </p>
              <p>
                En 2023, TikTok fue multado con 345 millones de euros por la Comisión
                de Protección de Datos de Irlanda por violar el GDPR en el tratamiento
                de datos de menores de edad. En Estados Unidos, varios estados han
                prohibido TikTok en dispositivos gubernamentales por preocupaciones
                de seguridad relacionadas con el acceso a datos de usuarios.
              </p>
              <p>
                Reverglim no recopila datos biométricos, no accede al portapapeles,
                no construye perfiles de comportamiento y no vende información a terceros.
              </p>
            </section>

            <section className="seo-section">
              <h2>La privacidad en Reverglim: qué significa en la práctica</h2>
              <p>
                Cuando decimos que Reverglim respeta tu privacidad, no es un eslogan
                de marketing. Significa cosas concretas y verificables:
              </p>
              <ul className="seo-list">
                <li><strong>No se construyen perfiles publicitarios</strong> con tu comportamiento en la app.</li>
                <li><strong>No se vende información</strong> a anunciantes, brokers de datos ni terceros.</li>
                <li><strong>No se usa publicidad dirigida</strong> basada en tu comportamiento o tus datos personales.</li>
                <li><strong>El chat está bloqueado por defecto</strong>, lo que protege tu información de contacto de desconocidos.</li>
                <li><strong>La política de contenido saludable</strong> reduce la cantidad de datos de comportamiento que se generan al eliminar el scroll infinito.</li>
              </ul>
            </section>

            <section className="seo-section">
              <h2>Preguntas frecuentes: privacidad y publicidad en Reverglim</h2>
              <div className="seo-faq">
                {faqSchema.mainEntity.map((item) => (
                  <div key={item.name} className="seo-faq__item">
                    <h3>{item.name}</h3>
                    <p>{item.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="seo-cta">
              <h2>Tus datos son tuyos. Únete a Reverglim.</h2>
              <p>
                Si estás cansado de ser el producto de las redes sociales, Reverglim
                es tu alternativa. Una red social donde tu privacidad es un principio
                de diseño, no una opción de pago ni un eslogan vacío.
              </p>
              <div className="seo-cta__links">
                <Link href="/" className="seo-cta__btn">Conocer Reverglim →</Link>
                <Link href="/privacidad" className="seo-cta__btn seo-cta__btn--ghost">Política de privacidad</Link>
              </div>
            </section>

          </div>
        </main>

        <footer className="seo-footer">
          <div className="container">
            <p>© {new Date().getFullYear()} Reverglim — La red social POST-SCROLL</p>
            <nav>
              <Link href="/">Inicio</Link>
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
