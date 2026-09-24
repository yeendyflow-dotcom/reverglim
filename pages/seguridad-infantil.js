import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/seguridad-infantil.module.css';
import { SITE_URL } from '../lib/site';

export default function SeguridadInfantil() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Seguridad Infantil y Protección — Reverglim</title>
        <meta name="description" content="Nuestra prioridad es la protección de los menores. Conoce los protocolos de seguridad y el escudo social de Reverglim." />
        <meta name="keywords" content="seguridad infantil redes sociales, protección menores internet, reverglim seguridad, red social segura niños, bloqueo automático redes sociales, reportes colectivos, chat seguro menores, red social sin peligros" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={`${SITE_URL}/seguridad-infantil`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE_URL}/seguridad-infantil`} />
        <meta property="og:title" content="Seguridad Infantil y Protección — Reverglim" />
        <meta property="og:description" content="Nuestra prioridad es la protección de los menores. Conoce los protocolos de seguridad y el escudo social de Reverglim." />
        <meta property="og:image" content={`${SITE_URL}/images/og-image.jpg`} />
        <meta property="og:site_name" content="Reverglim" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Seguridad Infantil y Protección — Reverglim" />
        <meta name="twitter:description" content="Nuestra prioridad es la protección de los menores. Conoce los protocolos de seguridad y el escudo social de Reverglim." />
        <meta name="twitter:image" content={`${SITE_URL}/images/og-image.jpg`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Seguridad Infantil y Protección — Reverglim',
          description: 'Nuestra prioridad es la protección de los menores. Conoce los protocolos de seguridad y el escudo social de Reverglim.',
          url: `${SITE_URL}/seguridad-infantil`,
          inLanguage: 'es',
          author: { '@type': 'Organization', name: 'Reverglim', url: SITE_URL },
          publisher: { '@type': 'Organization', name: 'Reverglim', url: SITE_URL },
          mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/seguridad-infantil` },
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Seguridad infantil', item: `${SITE_URL}/seguridad-infantil` },
          ],
        }) }} />
      </Head>

      <nav className={styles.backNav}>
        <Link href="/" className={styles.backLink}>
          ← Volver a la plataforma
        </Link>
      </nav>

      <main className={styles.main}>
        {/* Hero */}
        <header className={styles.hero}>
          <div className={styles.heroBadge}>Protección Activa</div>
          <h1 className={styles.heroTitle}>
            SEGURIDAD<br />
            <span className={styles.redGradient}>POR DISEÑO</span>
          </h1>
          <p className={styles.heroLead}>
            En Reverglim, la innovación no solo está en la forma en la que compartimos, sino en la forma en que protegemos a nuestra comunidad más joven.
          </p>
        </header>

        {/* Bloqueo Social */}
        <section className={styles.protocolSection}>
          <div className={styles.protocolCard}>
            <div className={styles.protocolVisual}>
              <div className={styles.shieldPulse}>
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M32 4L8 14v18c0 13.3 10.3 25.7 24 29 13.7-3.3 24-15.7 24-29V14L32 4z" fill="rgba(232,17,44,0.15)" stroke="#e8112c" strokeWidth="2" />
                  <path d="M22 32l7 7 13-13" stroke="#e8112c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className={styles.protocolInfo}>
              <h2>EN REVERGLIM:</h2>
              <p>
                Contamos con un sistema de bloqueo automático por reportes recibidos: cualquier intento de contacto
                no solicitado hacia menores o mayores de edad se bloquea vía chat hasta que el usuario acepte la
                solicitud de chat enviada o ambos se sigan mutuamente. Fortalecemos esta seguridad con un sistema de
                reportes colectivos que bloquea automáticamente a los usuarios que incumplen nuestras políticas de
                privacidad dentro de la comunidad de Reverglim.
              </p>
              <br />
              <p>
                Reverglim se compromete a mantener un entorno seguro para todos nuestros usuarios, especialmente
                para los menores de edad. Nuestro sistema de bloqueo automático por reportes recibidos es una medida
                proactiva para prevenir cualquier intento de contacto no solicitado. Este sistema bloquea
                automáticamente a los usuarios reportados por comportamiento inapropiado hasta que se resuelva la
                situación. Además, el sistema de reportes colectivos permite a la comunidad participar activamente
                en la seguridad, bloqueando de forma automática a quienes incumplan nuestras políticas. En
                Reverglim, la seguridad es una prioridad y trabajamos constantemente para garantizar un entorno
                confiable y protegido para todos.
              </p>
            </div>
          </div>
        </section>

        {/* Pilares de seguridad */}
        <section className={styles.pillarsSection}>
          <h2 className={styles.pillarsTitle}>NUESTROS PILARES DE PROTECCIÓN</h2>
          <div className={styles.pillarsGrid}>
            {[
              {
                icon: '🔒',
                title: 'Bloqueo Automático',
                desc: 'Los usuarios reportados son bloqueados automáticamente hasta que se resuelva la situación.',
              },
              {
                icon: '👥',
                title: 'Reportes Colectivos',
                desc: 'La comunidad participa activamente bloqueando a quienes incumplan nuestras políticas.',
              },
              {
                icon: '💬',
                title: 'Chat Controlado',
                desc: 'El contacto vía chat requiere aceptación mutua, eliminando mensajes no solicitados.',
              },
              {
                icon: '🛡️',
                title: 'Contenido Saludable',
                desc: 'Moderamos activamente para eliminar contenido inapropiado y proteger a los menores.',
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className={styles.pillarCard}>
                <span className={styles.pillarIcon}>{icon}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Compromiso */}
        <section className={styles.commitSection}>
          <div className={styles.commitBox}>
            <h2>NUESTRO COMPROMISO</h2>
            <p>
              Reverglim trabaja de forma continua para garantizar que cada usuario, sin importar su edad,
              pueda disfrutar de la plataforma en un entorno seguro, respetuoso y libre de acoso.
              Si detectas comportamiento inapropiado, usa la función de reporte dentro de la app.
            </p>
            <a href="mailto:soporte@reverglim.com" className={styles.contactBtn}>
              Contactar soporte
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.pageFooter}>
        <p>© {new Date().getFullYear()} Reverglim — Todos los derechos reservados.</p>
        <nav>
          <Link href="/">Reverglim — Red social POST-SCROLL</Link>
          <Link href="/red-social-segura-menores">Red social segura para menores</Link>
          <Link href="/mejor-red-social-2026">Mejor red social 2026</Link>
          <Link href="/term">Términos y condiciones</Link>
          <Link href="/privacidad">Política y privacidad</Link>
        </nav>
      </footer>
    </div>
  );
}
