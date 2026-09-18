import Head from 'next/head';
import Link from 'next/link';

const SITE_URL = 'https://reverglim.com';

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '¿Qué es Reverglim? La red social POST-SCROLL que está cambiando las redes sociales',
  description:
    'Reverglim es una red social móvil diferente: una plataforma POST-SCROLL donde el contenido exclusivo se destaca, el scroll infinito termina y la interacción es más humana, segura e innovadora.',
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
        text: 'Reverglim es una red social móvil POST-SCROLL: la primera plataforma diseñada para que el contenido exclusivo destaque sobre el ruido digital. En lugar de un scroll infinito que te atrapa, cada publicación tiene espacio propio y propósito real.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué significa POST-SCROLL en Reverglim?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'POST-SCROLL es la era después del scroll infinito. En Reverglim no compites contra un algoritmo que entierra tu contenido: las publicaciones exclusivas se destacan y la interacción ocurre de forma más humana, directa y con intención.',
      },
    },
    {
      '@type': 'Question',
      name: '¿En qué se diferencia Reverglim de Instagram o TikTok?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A diferencia de Instagram y TikTok, Reverglim elimina el scroll infinito, no vende tus datos para publicidad dirigida, protege a los menores con barreras automáticas y destaca el contenido exclusivo en lugar de enterrarlo bajo un algoritmo opresivo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Reverglim es gratuita?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Unirse a Reverglim y publicar es completamente gratuito. El modelo de Reverglim prioriza la privacidad del usuario: no vendemos datos ni usamos tu información para publicidad dirigida.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuándo estará disponible Reverglim?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Reverglim está en desarrollo activo. Puedes seguir las novedades en Instagram @reverglim y @rglimoficial para ser de los primeros en acceder cuando la app esté disponible en Google Play y App Store.',
      },
    },
  ],
};

export default function QueEsReverglim() {
  return (
    <>
      <Head>
        <title>¿Qué es Reverglim? La red social POST-SCROLL | Reverglim</title>
        <meta
          name="description"
          content="Reverglim es la nueva red social POST-SCROLL: sin scroll infinito, con contenido exclusivo destacado, seguridad avanzada e interacciones innovadoras. Descubre por qué Reverglim es diferente a Instagram, TikTok y otras redes sociales."
        />
        <meta
          name="keywords"
          content="qué es reverglim, reverglim, red social post-scroll, nueva red social, red social diferente, red social sin scroll infinito, alternativa instagram, alternativa tiktok, red social exclusiva, red social segura, redes sociales innovadoras, reverglim app, rglim, contenido exclusivo redes sociales, bienestar digital redes sociales"
        />
        <link rel="canonical" href={`${SITE_URL}/que-es-reverglim`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE_URL}/que-es-reverglim`} />
        <meta
          property="og:title"
          content="¿Qué es Reverglim? La red social POST-SCROLL que está cambiando las redes sociales"
        />
        <meta
          property="og:description"
          content="Reverglim es la nueva red social POST-SCROLL: sin scroll infinito, con contenido exclusivo destacado y seguridad avanzada. Descubre por qué es diferente."
        />
        <meta property="og:image" content={`${SITE_URL}/images/og-image.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="¿Qué es Reverglim? La red social POST-SCROLL"
        />
        <meta
          name="twitter:description"
          content="Reverglim es la nueva red social POST-SCROLL: sin scroll infinito, con contenido exclusivo y seguridad avanzada."
        />
        <meta name="twitter:image" content={`${SITE_URL}/images/og-image.jpg`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <div className="seo-page">
        <nav className="seo-nav">
          <Link href="/" className="seo-nav__logo">
            ← Volver a Reverglim
          </Link>
        </nav>

        <main className="seo-main container">

          {/* ── HERO DEL ARTÍCULO ── */}
          <header className="seo-header">
            <span className="seo-label">Red social · POST-SCROLL · Innovación</span>
            <h1 className="seo-title">
              ¿Qué es Reverglim?<br />
              <span className="text-red">La red social POST-SCROLL</span> que está cambiando las redes sociales
            </h1>
            <p className="seo-lead">
              Reverglim es una red social móvil de nueva generación. Una plataforma donde el
              contenido exclusivo destaca, el scroll infinito termina y cada interacción tiene
              propósito real. Si buscas una red social diferente, segura e innovadora,
              Reverglim fue creada para ti.
            </p>
          </header>

          <div className="seo-body">

            {/* ── SECCIÓN 1 ── */}
            <section className="seo-section">
              <h2>Reverglim: una nueva era en las redes sociales</h2>
              <p>
                Las redes sociales actuales fueron diseñadas para mantenerte enganchado el mayor
                tiempo posible. El scroll infinito, los algoritmos opacos y la sobreexposición a
                contenido irrelevante son el modelo estándar de plataformas como Instagram,
                TikTok, Facebook y X (antes Twitter). Reverglim rompe con ese modelo.
              </p>
              <p>
                <strong>Reverglim</strong> es una red social móvil POST-SCROLL: la primera
                plataforma diseñada desde cero para que el contenido exclusivo tenga un espacio
                propio, para que el usuario controle su experiencia y para que las interacciones
                sean más humanas, directas y con intención real. No es una copia de ninguna red
                social existente. Es una categoría nueva.
              </p>
              <p>
                El nombre <strong>Reverglim</strong> representa exactamente eso: revertir el
                modelo de las redes sociales tradicionales. Volver a lo que importa. Conectar
                con propósito. Compartir con exclusividad. Interactuar con seguridad.
              </p>
            </section>

            {/* ── SECCIÓN 2 ── */}
            <section className="seo-section">
              <h2>¿Qué significa POST-SCROLL? El concepto que define a Reverglim</h2>
              <p>
                El término <strong>POST-SCROLL</strong> es el corazón de Reverglim. Significa
                literalmente "después del scroll infinito": la era en la que las redes sociales
                dejan de explotar la atención del usuario y empiezan a respetarla.
              </p>
              <p>
                En las redes sociales tradicionales, el scroll infinito es una trampa de diseño
                deliberada. Cada vez que llegas al final del feed, aparece más contenido. No hay
                pausa, no hay límite, no hay respiro. Estudios de bienestar digital demuestran
                que el scroll infinito está directamente relacionado con la ansiedad, la
                comparación social tóxica y la pérdida de tiempo no intencional.
              </p>
              <p>
                <strong>Reverglim elimina el scroll infinito por completo.</strong> En su lugar,
                cada publicación tiene su propio espacio y momento. El contenido exclusivo se
                presenta con prioridad y presentación especial. El usuario decide qué ver, cuándo
                verlo y con quién interactuar. Eso es POST-SCROLL.
              </p>
            </section>

            {/* ── SECCIÓN 3 ── */}
            <section className="seo-section">
              <h2>¿En qué se diferencia Reverglim de otras redes sociales?</h2>
              <p>
                La pregunta más frecuente sobre Reverglim es: ¿por qué es diferente a Instagram,
                TikTok, Facebook o Snapchat? La respuesta está en los principios de diseño que
                guían cada decisión de la plataforma.
              </p>

              <h3>Reverglim vs. Instagram</h3>
              <p>
                Instagram fue diseñada para el consumo visual masivo. Su algoritmo decide qué
                ves y qué no ves, priorizando el contenido que genera más tiempo de pantalla,
                no el que más te importa. Reverglim invierte esa lógica: el contenido que
                publicas tiene espacio propio y no compite contra el ruido algorítmico.
                Además, Reverglim no vende tus datos para publicidad dirigida.
              </p>

              <h3>Reverglim vs. TikTok</h3>
              <p>
                TikTok es el ejemplo más extremo del scroll infinito: un feed de videos
                interminable diseñado para maximizar el tiempo de uso. Reverglim no tiene
                ese feed. El contenido en video existe, pero con un formato que respeta
                tu atención y te permite interactuar con intención, no por inercia.
              </p>

              <h3>Reverglim vs. Facebook</h3>
              <p>
                Facebook acumula décadas de datos de usuarios para construir perfiles
                publicitarios detallados. Reverglim adopta el principio opuesto: la
                privacidad es tuya por defecto. No construimos perfiles publicitarios,
                no vendemos tu información y no usamos tus datos para mostrarte anuncios
                dirigidos.
              </p>

              <h3>La diferencia fundamental</h3>
              <p>
                Mientras las redes sociales tradicionales monetizan tu atención y tus datos,
                <strong> Reverglim monetiza el valor real del contenido exclusivo</strong>.
                El modelo es diferente desde la raíz, y eso cambia todo: la experiencia,
                la seguridad, el bienestar y la calidad de las interacciones.
              </p>
            </section>

            {/* ── SECCIÓN 4 ── */}
            <section className="seo-section">
              <h2>Los 7 beneficios clave de Reverglim como red social</h2>
              <p>
                Reverglim no es solo una red social diferente en concepto. Es diferente en
                cada característica que ofrece a sus usuarios. Estos son los siete pilares
                que definen la experiencia Reverglim:
              </p>

              <h3>1. Contenido saludable</h3>
              <p>
                Reverglim tiene una política de contenido estricta: no se permite contenido
                que incluya noticias de violencia, muertes, accidentes, conflictos sociales,
                pornografía ni ningún tipo de material que afecte negativamente el bienestar
                mental del usuario. El feed de Reverglim es un espacio positivo, creativo
                y exclusivo por diseño.
              </p>

              <h3>2. Interacciones innovadoras</h3>
              <p>
                Las interacciones en Reverglim van más allá del "me gusta" y el comentario
                estándar. La plataforma introduce formatos de interacción nuevos que hacen
                que conectar con otros usuarios sea una experiencia más rica, más significativa
                y más memorable que en cualquier otra red social actual.
              </p>

              <h3>3. Seguridad avanzada</h3>
              <p>
                La seguridad en Reverglim no es un añadido: es parte del diseño central de
                la plataforma. El sistema de chat permanece bloqueado hasta que ambos usuarios
                se sigan mutuamente o acepten la solicitud de contacto. Los reportes colectivos
                activan bloqueos automáticos para cuentas que incumplen las normas. La
                comunidad participa activamente en mantener el espacio seguro.
              </p>

              <h3>4. Protección de datos</h3>
              <p>
                En Reverglim, tus datos son tuyos. No construimos perfiles publicitarios,
                no vendemos tu información a terceros y no usamos tus datos para mostrarte
                publicidad dirigida. La privacidad es un derecho, no una opción de pago.
                Este principio diferencia a Reverglim de prácticamente todas las redes
                sociales masivas del mercado actual.
              </p>

              <h3>5. Comunidad capacitada</h3>
              <p>
                Reverglim invierte en la educación digital de su comunidad. Los usuarios
                reciben orientación sobre uso responsable de redes sociales, bienestar
                digital y creación de contenido de calidad. Una comunidad informada es
                una comunidad más segura, más creativa y más valiosa para todos.
              </p>

              <h3>6. Monetización de videos (próximamente)</h3>
              <p>
                Reverglim está desarrollando un sistema de monetización para creadores de
                contenido en video. A diferencia de otras plataformas donde solo los
                creadores con millones de seguidores pueden monetizar, Reverglim busca
                democratizar la monetización para que cualquier creador con contenido
                exclusivo de calidad pueda generar ingresos reales.
              </p>

              <h3>7. Comunicación innovadora</h3>
              <p>
                La forma en que nos comunicamos en redes sociales lleva años sin cambiar
                de forma significativa. Reverglim introduce nuevos formatos y mecánicas
                de comunicación que hacen que cada conversación, cada publicación y cada
                interacción sea una experiencia diferente a todo lo que conoces en las
                redes sociales actuales.
              </p>
            </section>

            {/* ── SECCIÓN 5 ── */}
            <section className="seo-section">
              <h2>Reverglim y el bienestar digital: una red social que respeta tu tiempo</h2>
              <p>
                El bienestar digital es uno de los temas más importantes de la era tecnológica
                actual. La Organización Mundial de la Salud, investigadores de universidades
                como Stanford y Harvard, y expertos en salud mental coinciden: el uso excesivo
                de redes sociales con scroll infinito está relacionado con niveles más altos
                de ansiedad, depresión y baja autoestima, especialmente en jóvenes y adolescentes.
              </p>
              <p>
                Reverglim fue diseñada con el bienestar digital como principio fundacional.
                Cada decisión de diseño, desde la eliminación del scroll infinito hasta la
                política de contenido saludable, responde a una pregunta central: ¿esta
                característica hace que el tiempo del usuario en la app sea más valioso,
                o simplemente más largo?
              </p>
              <p>
                En Reverglim, el objetivo no es que pases más tiempo en la app. El objetivo
                es que el tiempo que pases en la app sea genuinamente valioso: que descubras
                contenido que te importe, que conectes con personas reales, que compartas
                lo que te define y que salgas de la app sintiéndote mejor que cuando entraste.
              </p>
            </section>

            {/* ── SECCIÓN 6 ── */}
            <section className="seo-section">
              <h2>Seguridad infantil en Reverglim: protección real para los más jóvenes</h2>
              <p>
                La seguridad de los menores de edad en redes sociales es una responsabilidad
                que Reverglim toma con absoluta seriedad. Las redes sociales tradicionales
                han sido criticadas repetidamente por no proteger adecuadamente a los usuarios
                más jóvenes de contactos no deseados, contenido inapropiado y dinámicas
                de acoso.
              </p>
              <p>
                Reverglim implementa barreras automáticas de protección para menores:
                el sistema de chat bloqueado por defecto impide que adultos desconocidos
                puedan contactar directamente a menores de edad. Los reportes colectivos
                permiten que la comunidad identifique y bloquee automáticamente cuentas
                que intentan saltarse estas protecciones.
              </p>
              <p>
                Además, la política de contenido saludable de Reverglim garantiza que
                los menores no estén expuestos a contenido violento, sexual o perturbador
                en su feed. Reverglim es una red social donde los padres pueden confiar
                en que sus hijos están en un entorno digital más seguro.
              </p>
            </section>

            {/* ── SECCIÓN 7 ── */}
            <section className="seo-section">
              <h2>¿Cuándo y cómo puedo unirme a Reverglim?</h2>
              <p>
                Reverglim está actualmente en desarrollo activo. La aplicación estará
                disponible próximamente en <strong>Google Play</strong> para dispositivos
                Android y en <strong>App Store</strong> para dispositivos iOS.
              </p>
              <p>
                Para ser de los primeros en acceder a Reverglim cuando la app esté disponible,
                puedes seguir las cuentas oficiales en Instagram:
              </p>
              <ul className="seo-list">
                <li>
                  <a
                    href="https://www.instagram.com/reverglim/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @reverglim
                  </a>{' '}
                  — cuenta principal de Reverglim
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/rglimoficial/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @rglimoficial
                  </a>{' '}
                  — cuenta oficial de actualizaciones
                </li>
              </ul>
              <p>
                También puedes contactar al equipo de Reverglim directamente en{' '}
                <a href="mailto:soporte@reverglim.com">soporte@reverglim.com</a> para
                consultas sobre la plataforma, oportunidades de inversión o colaboraciones.
              </p>
            </section>

            {/* ── FAQ ── */}
            <section className="seo-section">
              <h2>Preguntas frecuentes sobre Reverglim</h2>

              <div className="seo-faq">
                <div className="seo-faq__item">
                  <h3>¿Qué es Reverglim exactamente?</h3>
                  <p>
                    Reverglim es una red social móvil POST-SCROLL: la primera plataforma
                    diseñada para que el contenido exclusivo destaque sobre el ruido digital.
                    En lugar de un scroll infinito que te atrapa, cada publicación tiene
                    espacio propio y propósito real. Es una red social diferente a Instagram,
                    TikTok, Facebook y cualquier otra plataforma existente.
                  </p>
                </div>

                <div className="seo-faq__item">
                  <h3>¿Qué significa POST-SCROLL en Reverglim?</h3>
                  <p>
                    POST-SCROLL es la era después del scroll infinito. En Reverglim no
                    compites contra un algoritmo que entierra tu contenido: las publicaciones
                    exclusivas se destacan y la interacción ocurre de forma más humana,
                    directa y con intención. Es el modelo opuesto al de las redes sociales
                    tradicionales.
                  </p>
                </div>

                <div className="seo-faq__item">
                  <h3>¿En qué se diferencia Reverglim de Instagram o TikTok?</h3>
                  <p>
                    A diferencia de Instagram y TikTok, Reverglim elimina el scroll infinito,
                    no vende tus datos para publicidad dirigida, protege a los menores con
                    barreras automáticas y destaca el contenido exclusivo en lugar de
                    enterrarlo bajo un algoritmo opresivo. El modelo de negocio es
                    fundamentalmente diferente.
                  </p>
                </div>

                <div className="seo-faq__item">
                  <h3>¿Reverglim es gratuita?</h3>
                  <p>
                    Sí. Unirse a Reverglim y publicar es completamente gratuito. El modelo
                    de Reverglim prioriza la privacidad del usuario: no vendemos datos ni
                    usamos tu información para publicidad dirigida.
                  </p>
                </div>

                <div className="seo-faq__item">
                  <h3>¿Cuándo estará disponible Reverglim?</h3>
                  <p>
                    Reverglim está en desarrollo activo. Puedes seguir las novedades en
                    Instagram @reverglim y @rglimoficial para ser de los primeros en acceder
                    cuando la app esté disponible en Google Play y App Store.
                  </p>
                </div>
              </div>
            </section>

            {/* ── CTA FINAL ── */}
            <section className="seo-cta">
              <h2>Únete a la nueva era de las redes sociales</h2>
              <p>
                Reverglim es más que una red social. Es una declaración: el scroll infinito
                termina aquí. El contenido exclusivo merece un espacio propio. La privacidad
                es un derecho. La seguridad es por diseño. Y las interacciones deben tener
                propósito real.
              </p>
              <p>
                Si estás buscando una red social diferente, una alternativa real a Instagram
                y TikTok, una plataforma donde tu contenido destaque y tu privacidad sea
                respetada, <strong>Reverglim es para ti</strong>.
              </p>
              <div className="seo-cta__links">
                <Link href="/" className="seo-cta__btn">
                  Conocer Reverglim →
                </Link>
                <a
                  href="https://www.instagram.com/reverglim/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="seo-cta__btn seo-cta__btn--ghost"
                >
                  Seguir @reverglim
                </a>
              </div>
            </section>

          </div>
        </main>

        <footer className="seo-footer">
          <div className="container">
            <p>© {new Date().getFullYear()} Reverglim — La red social POST-SCROLL</p>
            <nav>
              <Link href="/">Inicio</Link>
              <Link href="/term">Términos</Link>
              <Link href="/privacidad">Privacidad</Link>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
}
