import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Policy.module.css';

export default function PoliticasDePrivacidad() {
  return (
    <>
      <Head>
        <title>Políticas de Privacidad — Reverglim</title>
        <meta name="description" content="Lee las políticas de privacidad de Reverglim. Tu privacidad es nuestra prioridad." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://reverglim.com/politicas-de-privacidad" />
      </Head>

      <div className={styles.page}>
        <nav className={styles.backNav}>
          <Link href="/" className={styles.backLink}>
            ← Volver a Reverglim
          </Link>
        </nav>

        <main className={styles.content}>
          <header className={styles.header}>
            <span className={styles.label}>Legal</span>
            <h1 className={styles.title}>POLÍTICAS DE<br />PRIVACIDAD</h1>
            <p className={styles.updated}>Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </header>

          <article className={styles.article}>
            <section>
              <h2>1. Información que recopilamos</h2>
              <p>En Reverglim, recopilamos únicamente la información necesaria para brindarte la mejor experiencia posible. Esto incluye:</p>
              <ul>
                <li>Información de cuenta: nombre de usuario, correo electrónico y contraseña cifrada.</li>
                <li>Contenido que publicas voluntariamente en la plataforma.</li>
                <li>Datos de uso anónimos para mejorar nuestros servicios (sin identificación personal).</li>
              </ul>
            </section>

            <section>
              <h2>2. Cómo usamos tu información</h2>
              <p>Tu información se usa exclusivamente para:</p>
              <ul>
                <li>Operar y mejorar los servicios de Reverglim.</li>
                <li>Personalizar tu experiencia dentro de la plataforma.</li>
                <li>Comunicarnos contigo sobre actualizaciones importantes.</li>
                <li>Garantizar la seguridad de tu cuenta.</li>
              </ul>
            </section>

            <section>
              <h2>3. Lo que NUNCA hacemos</h2>
              <p>En Reverglim nos comprometemos a <strong>nunca</strong>:</p>
              <ul>
                <li>Vender tu información personal a terceros.</li>
                <li>Compartir tus datos con anunciantes.</li>
                <li>Usar tu información para publicidad dirigida sin tu consentimiento explícito.</li>
                <li>Acceder a tu contenido privado sin autorización legal.</li>
              </ul>
            </section>

            <section>
              <h2>4. Seguridad de los datos</h2>
              <p>
                Utilizamos encriptación de extremo a extremo y las mejores prácticas de la industria
                para proteger tu información. Nuestros servidores están alojados en infraestructura
                certificada con los más altos estándares de seguridad.
              </p>
            </section>

            <section>
              <h2>5. Tus derechos</h2>
              <p>Tienes derecho a:</p>
              <ul>
                <li>Acceder a toda tu información personal almacenada.</li>
                <li>Corregir información incorrecta.</li>
                <li>Solicitar la eliminación completa de tu cuenta y datos.</li>
                <li>Exportar tus datos en formato portable.</li>
                <li>Oponerte al procesamiento de tus datos.</li>
              </ul>
            </section>

            <section>
              <h2>6. Cookies</h2>
              <p>
                Usamos cookies esenciales para el funcionamiento de la plataforma. No usamos
                cookies de rastreo ni de publicidad de terceros. Puedes gestionar tus preferencias
                de cookies desde la configuración de tu cuenta.
              </p>
            </section>

            <section>
              <h2>7. Contacto</h2>
              <p>
                Para cualquier consulta sobre privacidad, contáctanos en{' '}
                <a href="mailto:jg2777613@gmail.com">jg2777613@gmail.com</a>.
              </p>
            </section>
          </article>
        </main>
      </div>
    </>
  );
}
