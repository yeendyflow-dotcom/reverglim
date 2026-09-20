import Head from 'next/head';
import Link from 'next/link';

const SITE_URL = 'https://reverglim.com';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuál es la red social más segura para menores de edad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Reverglim es la red social más segura para menores: chat bloqueado por defecto hasta que ambos usuarios se sigan mutuamente, reportes colectivos con bloqueo automático, política de contenido saludable y eliminación total de contenido inapropiado.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo protege Reverglim a los menores de edad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Reverglim protege a los menores con tres capas de seguridad: bloqueo automático de chat no solicitado, sistema de reportes colectivos que bloquea cuentas inapropiadas automáticamente, y política de contenido saludable que elimina material violento, sexual o perturbador.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Es seguro que los niños usen Reverglim?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Reverglim está diseñada con la seguridad de los menores como prioridad. A diferencia de TikTok e Instagram, Reverglim tiene barreras automáticas que impiden el contacto no solicitado y una política de contenido que elimina material inapropiado por diseño.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué diferencia a Reverglim de otras redes sociales en cuanto a seguridad infantil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En Reverglim, la seguridad no es una configuración opcional: está integrada en la arquitectura de la plataforma. El chat está bloqueado por defecto, el contenido inapropiado es eliminado por política y la comunidad participa activamente en mantener el entorno seguro.',
      },
    },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Red social segura para menores de edad: Reverglim, protección por diseño',
  description: 'Reverglim es la red social más segura para menores: chat bloqueado por defecto, reportes colectivos automáticos y contenido saludable por política.',
  url: `${SITE_URL}/red-social-segura-menores`,
  inLanguage: 'es',
  author: { '@type': 'Organization', name: 'Reverglim', url: SITE_URL },
  publisher: { '@type': 'Organization', name: 'Reverglim', url: SITE_URL },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/red-social-segura-menores` },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Red social segura para menores', item: `${SITE_URL}/red-social-segura-menores` },
  ],
};

export default function RedSocialSeguraMenores() {
  return (
    <>
      <Head>
        <title>Red social segura para menores 2026: Reverglim, protección por diseño</title>
        <meta
          name="description"
          content="¿Buscas una red social segura para menores? Reverglim: chat bloqueado por defecto, reportes colectivos automáticos y contenido saludable por política. Protección real para los más jóvenes."
        />
        <meta
          name="keywords"
          content="red social segura para menores, red social para niños, red social segura, red social infantil, red social sin peligros, reverglim seguridad, protección menores redes sociales, red social para adolescentes, redes sociales seguras 2026, seguridad infantil redes sociales"
        />
        <link rel="canonical" href={`${SITE_URL}/red-social-segura-menores`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE_URL}/red-social-segura-menores`} />
        <meta property="og:title" content="Red social segura para menores 2026: Reverglim, protección por diseño" />
        <meta property="og:description" content="Reverglim es la red social más segura para menores: chat bloqueado por defecto, reportes automáticos y contenido saludable." />
        <meta property="og:image" content={`${SITE_URL}/images/og-image.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Red social segura para menores: Reverglim" />
        <meta name="twitter:description" content="Reverglim es la red social más segura para menores: protección por diseño, no por configuración." />
        <meta name="twitter:image" content={`${SITE_URL}/images/og-image.jpg`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </Head>

      <div className="seo-page">
        <nav className="seo-nav">
          <Link href="/" className="seo-nav__logo">← Volver a Reverglim</Link>
        </nav>

        <main className="seo-main container">
          <header className="seo-header">
            <span className="seo-label">Seguridad infantil · Red social · Protección</span>
            <h1 className="seo-title">
              <span className="text-red">Red social segura</span> para menores:<br />
              Reverglim, protección por diseño
            </h1>
            <p className="seo-lead">
              La seguridad de los menores en redes sociales es una de las preocupaciones
              más importantes de padres y educadores en 2026. Reverglim es la primera
              red social diseñada con la protección de los más jóvenes como principio
              fundacional, no como una configuración opcional.
            </p>
          </header>

          <div className="seo-body">

            <section className="seo-section">
              <h2>El problema de la seguridad infantil en las redes sociales actuales</h2>
              <p>
                TikTok, Instagram, Facebook y la mayoría de las redes sociales masivas
                fueron diseñadas para maximizar el tiempo de uso y los ingresos publicitarios.
                La seguridad de los menores, cuando existe, es una capa añadida después del
                diseño original, no una parte integral de la arquitectura de la plataforma.
              </p>
              <p>
                El resultado es predecible: adultos que contactan a menores a través de
                mensajes directos, contenido inapropiado que llega al feed de adolescentes,
                algoritmos que amplifican contenido perturbador porque genera más engagement,
                y sistemas de reporte que tardan días o semanas en actuar.
              </p>
              <p>
                Reverglim fue construida con una premisa diferente: <strong>la seguridad
                no puede ser opcional</strong>. Tiene que estar integrada en cada decisión
                de diseño, desde el primer día.
              </p>
            </section>

            <section className="seo-section">
              <h2>Las 3 capas de protección de Reverglim para menores</h2>

              <h3>Capa 1: Chat bloqueado por defecto</h3>
              <p>
                En Reverglim, ningún usuario puede enviar mensajes directos a otro usuario
                que no lo siga o no haya aceptado su solicitud de chat. Esto significa que
                un adulto desconocido no puede contactar directamente a un menor de edad
                a través de la plataforma. El contacto requiere consentimiento mutuo.
              </p>
              <p>
                Esta barrera es automática y no requiere ninguna configuración por parte
                del usuario o de sus padres. Está activada por defecto para todos los
                usuarios de Reverglim, sin excepción.
              </p>

              <h3>Capa 2: Sistema de reportes colectivos con bloqueo automático</h3>
              <p>
                Reverglim tiene un sistema de reportes colectivos que funciona de forma
                diferente a los sistemas de reporte tradicionales. Cuando una cuenta
                acumula un número determinado de reportes por comportamiento inapropiado,
                el sistema activa un bloqueo automático sin necesidad de revisión manual
                inmediata.
              </p>
              <p>
                Esto significa que la comunidad de Reverglim participa activamente en
                mantener el entorno seguro. Una cuenta que intenta contactar a menores
                de forma inapropiada es bloqueada automáticamente por la acción colectiva
                de la comunidad, no solo por la decisión de un moderador.
              </p>

              <h3>Capa 3: Política de contenido saludable</h3>
              <p>
                Reverglim tiene una política de contenido estricta que elimina por completo
                cualquier material que incluya violencia, pornografía, contenido perturbador,
                noticias de muertes o accidentes, conflictos sociales o cualquier otro tipo
                de contenido que pueda afectar negativamente el bienestar mental de los
                usuarios, especialmente de los más jóvenes.
              </p>
              <p>
                Esta política no es reactiva (eliminar contenido después de que se reporta).
                Es proactiva: el diseño de la plataforma y las normas de la comunidad están
                orientados a prevenir que ese contenido exista en Reverglim desde el inicio.
              </p>
            </section>

            <section className="seo-section">
              <h2>Reverglim vs. TikTok e Instagram en seguridad para menores</h2>
              <p>
                La diferencia entre Reverglim y las redes sociales tradicionales en materia
                de seguridad infantil no es de grado, es de naturaleza.
              </p>
              <p>
                En TikTok e Instagram, la seguridad para menores es una función que los
                padres tienen que activar manualmente, que los menores pueden desactivar
                fácilmente y que no impide que contenido inapropiado llegue al feed.
                Los sistemas de reporte son lentos y la moderación es inconsistente.
              </p>
              <p>
                En Reverglim, la seguridad está integrada en la arquitectura de la plataforma.
                No hay configuraciones que activar porque las protecciones están activas
                por defecto. No hay contenido inapropiado que filtrar porque la política
                de contenido saludable lo previene desde el origen.
              </p>
            </section>

            <section className="seo-section">
              <h2>Consejos para padres: cómo elegir una red social segura para tus hijos</h2>
              <p>
                Si eres padre o madre y estás evaluando qué redes sociales son seguras
                para tus hijos, estos son los criterios más importantes a considerar:
              </p>
              <ul className="seo-list">
                <li><strong>¿El chat está bloqueado por defecto?</strong> En Reverglim, sí. En TikTok e Instagram, no.</li>
                <li><strong>¿Hay política de contenido saludable?</strong> En Reverglim, sí. En las redes tradicionales, el contenido perturbador puede llegar al feed.</li>
                <li><strong>¿La plataforma vende datos de menores?</strong> Reverglim no vende datos. TikTok fue multada por recopilar datos de menores sin consentimiento.</li>
                <li><strong>¿Los sistemas de reporte son rápidos y efectivos?</strong> En Reverglim, los reportes colectivos activan bloqueos automáticos.</li>
                <li><strong>¿La seguridad es por diseño o por configuración?</strong> En Reverglim, es por diseño. No requiere que el menor configure nada.</li>
              </ul>
            </section>

            <section className="seo-section">
              <h2>Preguntas frecuentes: seguridad de menores en Reverglim</h2>
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
              <h2>Una red social donde los menores están realmente protegidos.</h2>
              <p>
                Reverglim es la red social que los padres estaban esperando: un entorno
                digital donde la seguridad de los menores no depende de configuraciones
                manuales ni de la buena voluntad de los algoritmos. Está integrada en
                el diseño desde el primer día.
              </p>
              <div className="seo-cta__links">
                <Link href="/" className="seo-cta__btn">Conocer Reverglim →</Link>
                <Link href="/seguridad-infantil" className="seo-cta__btn seo-cta__btn--ghost">Seguridad infantil</Link>
              </div>
            </section>

          </div>
        </main>

        <footer className="seo-footer">
          <div className="container">
            <p>© {new Date().getFullYear()} Reverglim — La red social POST-SCROLL</p>
            <nav>
              <Link href="/">Reverglim — Red social POST-SCROLL</Link>
              <Link href="/seguridad-infantil">Seguridad infantil</Link>
              <Link href="/alternativa-tiktok">vs. TikTok</Link>
              <Link href="/privacidad">Privacidad</Link>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
}
