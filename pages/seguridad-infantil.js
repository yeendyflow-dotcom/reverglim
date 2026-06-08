import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Seguridad.module.css';

export default function SeguridadInfantil() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Seguridad Infantil y Protección — Reverglim</title>
        <meta name="description" content="Nuestra prioridad es la protección de los menores. Conoce los protocolos de seguridad y el escudo social de Reverglim." />
      </Head>

      <nav className={styles.backNav}>
        <Link href="/" className={styles.backLink}>
          ← Volver a la plataforma
        </Link>
      </nav>

      <main className={styles.main}>
        {/* Hero Section */}
        <header className={styles.hero}>
          <div className={styles.heroBadge}>Protección Activa</div>
          <h1 className={styles.heroTitle}>SEGURIDAD<br/><span className={styles.redGradient}>POR DISEÑO</span></h1>
          <p className={styles.heroLead}>
            En Reverglim, la innovación no solo está en la forma en la que compartimos, sino en la forma en que protegemos a nuestra comunidad más joven.
          </p>
        </header>

        {/* Core Protocol: El Bloqueo Social */}
        <section className={styles.protocolSection}>
          <div className={styles.protocolCard}>
            <div className={styles.protocolVisual}>
              <div className={styles.shieldPulse}></div>
            </div>
            <div className={styles.protocolInfo}>
              <h2>EN REVERGLIM: <br/></h2>
              <p>
                Contamos con un sistema de bloqueo automatico por reportes recividos, cualquier intento de contacto no solicitado hacia menores o mayores de edad será bloqueado via chat hasta que el usuario no acepte la solicitud de chat enviada o se sigan mutuamente, fortalecemos esa seguridad con un sistema de reportes colectivos que bloquea a los usuarios que imcuplan con nuestras politica de privacidad dentro de la comunidad de reverglim de forma automatica.
              </p>
<br/>
                <p>
                Reverglim se compromete a mantener un entorno seguro para todos nuestros usuarios, especialmente para los menores de edad. Nuestro sistema de bloqueo automático por reportes recibidos es una medida proactiva para prevenir cualquier intento de contacto no solicitado hacia menores o mayores de edad. Este sistema bloquea automáticamente a los usuarios que han sido reportados por comportamiento inapropiado, hasta que se resuelva la situación. Además, implementamos un sistema de reportes colectivos que permite a la comunidad participar activamente en la seguridad, bloqueando a los usuarios que incumplen con nuestras políticas de privacidad de forma automática. En Reverglim, la seguridad es una prioridad y trabajamos constantemente para garantizar un entorno confiable y protegido para todos nuestros usuarios.   
                </p>

            </div>
          </div>
        </section>

        {/* Footer de la página */}
        <footer className={styles.footer}>
          <div className={styles.footerBar}></div>
          <p>© {new Date().getFullYear()} REVERGLIM SAFETY — PROTOCOLOS DE CONFIANZA Y SEGURIDAD</p>
        </footer>
      </main>
    </div>
  );
}
