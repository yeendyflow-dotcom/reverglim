import Head from 'next/head';
import Link from 'next/link';
import { SITE_URL } from '../lib/site';

const SECTIONS = [
  {
    title: '1. Información que recopilamos',
    intro: 'En Reverglim, recopilamos únicamente la información necesaria para brindarte la mejor experiencia posible. Esto incluye:',
    items: [
      'Información de cuenta: nombre, nombre de usuario, correo electrónico, imagenes o videos que publicas en reverglim, descripción, presentación y la contraseña cifrada.',
      'Contenido que publicas voluntariamente en la plataforma.',
      'Datos de uso anónimos para mejorar nuestros servicios (sin identificación personal).',
    ],
  },
  {
    title: '2. Cómo usamos tu información',
    intro: 'Tu información se usa exclusivamente para:',
    items: [
      'Operar y mejorar los servicios de Reverglim.',
      'Personalizar tu experiencia dentro de Reverglim.',
      'Comunicarnos contigo sobre actualizaciones importantes.',
      'Garantizar la seguridad de tu cuenta.',
    ],
  },
  {
    title: '3. Lo que NUNCA hacemos',
    intro: 'En Reverglim nos comprometemos a nunca:',
    items: [
      'Vender tu información personal a terceros.',
      'Compartir tus datos con anunciantes.',
      'Usar tu información para publicidad dirigida sin tu consentimiento explícito.',
      'Acceder a tu contenido privado sin autorización legal.',
    ],
  },
  {
    title: '4. Seguridad de los datos',
    body: 'Utilizamos encriptación de extremo a extremo y las mejores prácticas de la industria para proteger tu información. Nuestros servidores están alojados en infraestructura certificada con los más altos estándares de seguridad.',
  },
  {
    title: '5. Tus derechos',
    intro: 'Tienes derecho a:',
    items: [
      'Acceder a toda tu información personal almacenada.',
      'Corregir información incorrecta.',
      'Solicitar la eliminación completa de tu cuenta y datos.',
      'Exportar tus datos en formato portable.',
      'Oponerte al procesamiento de tus datos.',
    ],
  },
  {
    title: '6. Cookies',
    body: 'Usamos cookies esenciales para el funcionamiento de la plataforma. No usamos cookies de rastreo ni de publicidad de terceros. Puedes gestionar tus preferencias de cookies desde la configuración de tu cuenta.',
  },
  {
    title: '7. Contacto',
    body: 'Para cualquier consulta sobre privacidad, contáctanos en jg2777613@gmail.com.',
  },
];

export default function Privacidad() {
  return (
    <>
      <Head>
        <title>Política de Privacidad | Reverglim</title>
        <meta name="description" content="Conoce cómo Reverglim protege tus datos: sin venta de información, sin publicidad dirigida y con encriptación de extremo a extremo. Tu privacidad es un derecho." />
        <link rel="canonical" href={`${SITE_URL}/privacidad`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/privacidad`} />
        <meta property="og:title" content="Política de Privacidad | Reverglim" />
        <meta property="og:description" content="Reverglim no vende tus datos ni usa publicidad dirigida. Conoce nuestra política de privacidad." />
        <meta property="og:image" content={`${SITE_URL}/images/og-image.jpg`} />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <div className="privacy-page">
        <nav className="privacy-nav">
          <Link href="/" className="privacy-nav__logo">
            <img src="https://ik.imagekit.io/yfitk2mna/Orange_and_Black_Illustrative_Engineering_Services_Logo_Design___5_-removebg-preview.png?updatedAt=1778986456032" alt="Reverglim" />
          </Link>
          <Link href="/" className="privacy-nav__back">← Volver al inicio</Link>
        </nav>

        <main className="privacy-main container">
          <p className="privacy-label">Legal</p>
          <h1 className="privacy-title">POLÍTICAS DE<br />PRIVACIDAD</h1>
          <p className="privacy-date">Última actualización: 17 de septiembre de 2026</p>

          <div className="privacy-sections">
            {SECTIONS.map((s) => (
              <section key={s.title} className="privacy-section">
                <h2>{s.title}</h2>
                {s.intro && <p>{s.intro}</p>}
                {s.items && (
                  <ul>
                    {s.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
                {s.body && <p>{s.body}</p>}
              </section>
            ))}
          </div>
        </main>

        <div className="footer-wrapper">
          <footer className="footer">
            <div className="footer__col">
              <h3>Reverglim</h3>
              <p>Únete a Reverglim y disfruta de los beneficios que ofrecemos para ti.</p>
            </div>
            <div className="footer__col">
              <h4>Contacto</h4>
              <ul>
                <li>+1 (829) 931-5704</li>
                <li>soporte@reverglim.com</li>
                <li>@reverglim</li>
              </ul>
            </div>
            <div className="footer__col">
              <h4>Enlaces rápidos</h4>
              <ul>
                <li><a href="#">Términos y condiciones</a></li>
                <li><Link href="/privacidad">Política y privacidad</Link></li>
                <li><a href="#">Seguridad infantil</a></li>
              </ul>
            </div>
          </footer>
          <p className="footer__copyright">© {new Date().getFullYear()} Reverglim — Todos los derechos reservados.</p>
        </div>
      </div>
    </>
  );
}
