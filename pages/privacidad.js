import SEO from '../components/SEO';
import SiteNav from '../components/SiteNav';

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
      <SEO
        title="Política de privacidad | Reverglim"
        description="Consulta qué información recopila Reverglim, cómo se utiliza y qué opciones tienes para proteger tus datos personales."
        path="/privacidad"
      />

      <SiteNav appearance="dark" />

      <div className="privacy-page">
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

      </div>
    </>
  );
}
