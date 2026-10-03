import SEO from '../components/SEO';
import SiteNav from '../components/SiteNav';

const SECTIONS = [
  {
    title: 'Nuestro compromiso',
    body: 'La seguridad de niñas, niños y adolescentes es una responsabilidad que tomamos con seriedad. Reverglim no permite contenido que sexualice, explote o ponga en riesgo a menores, ni conductas de acoso, amenazas o contacto inapropiado.',
  },
  {
    title: 'Edad mínima',
    body: 'De acuerdo con nuestros Términos y Condiciones, para utilizar Reverglim debes tener al menos 16 años.',
  },
  {
    title: 'Prevención y moderación',
    intro: 'Nuestras medidas de seguridad incluyen:',
    items: [
      'El chat está bloqueado por defecto para reducir el contacto directo no deseado con menores.',
      'Los usuarios pueden reportar publicaciones, comentarios y perfiles para revisión.',
      'Las cuentas que infrinjan nuestros Términos y Condiciones pueden ser suspendidas o eliminadas.',
    ],
  },
  {
    title: 'Cómo reportar una preocupación',
    body: 'Si encuentras contenido o comportamiento que pueda poner en riesgo a un menor, repórtalo desde la aplicación cuando esté disponible y comunícate con nuestro equipo de soporte. Incluye el enlace o nombre de usuario involucrado y una descripción del problema; evita enviar información personal innecesaria de menores.',
  },
];

export default function SeguridadInfantil() {
  return (
    <>
      <SEO
        title="Seguridad infantil y cómo reportar | Reverglim"
        description="Conoce las normas de protección de menores de Reverglim y cómo reportar contenido o conductas que puedan ponerlos en riesgo."
        path="/seguridad-infantil"
      />

      <SiteNav appearance="dark" />

      <div className="privacy-page">
        <main className="privacy-main container">
          <p className="privacy-label">Seguridad y protección</p>
          <h1 className="privacy-title">SEGURIDAD<br />INFANTIL</h1>

          <div className="privacy-sections">
            {SECTIONS.map((section) => (
              <section key={section.title} className="privacy-section">
                <h2>{section.title}</h2>
                {section.intro && <p>{section.intro}</p>}
                {section.items && (
                  <ul>
                    {section.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
                {section.body && <p>{section.body}</p>}
              </section>
            ))}
            <section className="privacy-section">
              <h2>Contacto</h2>
              <p>
                Para reportar una preocupación de seguridad infantil, escribe a{' '}
                <a href="mailto:soporte@reverglim.com">soporte@reverglim.com</a>.
              </p>
              <p>
                Si alguien está en peligro inmediato, contacta también a los servicios
                de emergencia o a las autoridades de protección infantil de tu localidad.
              </p>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
