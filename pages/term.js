import Head from 'next/head';
import Link from 'next/link';

const SECTIONS = [
  {
    title: '1. ACEPTACIÓN DE LOS TÉRMINOS',
    body: 'Al registrarte y utilizar Reverglim, aceptas estar legalmente obligado por estos Términos y Condiciones de Uso.',
  },
  {
    title: '2. DESCRIPCIÓN DE LOS SERVICIOS',
    intro: 'Reverglim es una red social digital que permite a los usuarios:',
    items: [
      '- Crear y compartir contenido multimedia (imágenes, videos, textos, audios)',
      '- Interactuar con otros usuarios mediante comentarios y reacciones',
      '- Crear y gestionar equipos dinámicos',
      '- Monetizar contenido (Próximamente)',
      '- Participar en eventos y actividades exclusivas (Próximamente)',
      '- Acceder a funciones avanzadas mediante suscripciones (Próximamente)',
      'Reverglim se reserva el derecho de modificar o descontinuar el servicio en cualquier momento sin previo aviso.',
    ],
  },
  {
    title: '3. ELEGIBILIDAD Y REQUISITOS',
    intro: 'Para usar Reverglim, usted reconoce que:',
    items: [
      '- Tienes al menos 16 años de edad',
      '- Proporcionas información precisa durante el registro',
      '- Eres responsable de mantener la confidencialidad de tu contraseña',
      '- No utilizas el servicio para actividades ilegales o no autorizadas',
      '- No eres un bot o entidad automatizada',
      '- No compartes tu cuenta con terceros',
      '- Eres capaz de celebrar un contrato vinculante',
      '- No has sido previamente suspendido o expulsado de Reverglim',
    ],
  },
  {
    title: '4. DERECHOS DE PROPIEDAD INTELECTUAL',
    subsections: [
      {
        subtitle: '4.1 Contenido del Usuario',
        intro: 'Usted retiene derechos sobre su contenido. Al publicar, otorga a Reverglim:',
        items: [
          '- Licencia mundial, no exclusiva, libre de regalías',
          '- Derecho a reproducir y distribuir su contenido',
          '- Derecho a usar en publicidad (con crédito)',
        ],
      },
      {
        subtitle: '4.2 Propiedad de Reverglim',
        intro: 'Todo el contenido de Reverglim está protegido por derechos de autor.',
      },
        {
        subtitle: '4.3 Marcas Registradas',
        intro: 'Reverglim y el logo son marcas registradas. No se permite su uso sin autorización.',
      },
       {
        subtitle: '4.4 Música y contenido protegido',
        intro: 'Cualquier música, video, audio, nota de voz u otro contenido protegido por derechos de autor subido a Reverglim debe estar cubierto por las licencias correspondientes. Reverglim no es responsable de las infracciones cometidas por los usuarios.',
      },
    ],
  },
  {
    title: '5. RESTRICCIONES DE CONTENIDO',
    intro: 'No se permite',
    items: [
      '- Contenido sexualmente explícito',
      '- Violencia o abuso',
      '- Acoso o amenazas',
      '- Discriminación',
      '- Spam o estafas',
      '- Piratería de derechos de autor',
      '- Información falsa o peligrosa',
      '- Suplantación de identidad',
      '- Promoción de actividades ilegales',
      '- Contenido que viole leyes locales o internacionales',
      '- Noticias, información o contenido que pueda inducir al pánico, miedo o alarma pública',
    ],
  },
  {
    title: '6. CONDUCTA DEL USUARIO',
    intro: 'El usuario NO debe:',
    items: [
        '- Acosar o amenazar a otros',
        '- Suplantar a terceros',
        '- Intentar acceso no autorizado',
        '- Interferir con la plataforma',
        '- Vender o compartir cuentas',
        '- Usar bots',
        '- Publicar contenido prohibido',
        '- Violar derechos de propiedad intelectual',
    ],
  },
  {
    title: '7. DERECHOS DE PROPIEDAD INTELECTUAL',
    subsections: [
      {
        subtitle: '7.1 Suspensión Temporal',
        intro: 'Reverglim puede suspender su cuenta por:',
        items: [
          '- Violación de términos',
          '- Contenido prohibido',
          '- Acoso o abuso',
        ],
      },
      {
        subtitle: 'Actividad sospechosa',
        intro: '- Duración: 24 horas a 30 días',

      },
         {
        subtitle: '7.2 Suspensión permanente',
        intro: 'Reverglim puede suspender tu cuenta por:',
        items: [
          '- Incumplir con nuestros terminos y condicciones',
          '- Atentar con nuestra comunidad joven',
        ],
      },
    ],
  },
  {
    title: '8. PRIVACIDAD Y DATOS',
    body: 'Reverglim recopila y procesa datos personales de acuerdo con nuestra Política de Privacidad. Consulte esa política para más detalles sobre cómo recopilamos, usamos, compartimos y protegemos su información.',
  },
   {
    title: '9. REVERCOINS',
    body: 'Nuestros revercoins no tienen valor real fuera de reverglim, solo dentro de reverglim.',
  },
  {
    title: '10. LIMITACIONES DE RESPONSABILIDAD',
    intro: 'Reverglim proporciona servicios TAL CUAL sin garantías de:',
    items: [
      '- Disponibilidad continua',
      'Precisión total',
      'Seguridad absoluta',
      'Protección contra contenido de terceros',
      'Reverglim no se responsabiliza por daños directos, indirectos, incidentales o consecuentes, pérdida de datos o ingresos, ni interrupción del negocio.',
    ],
  },
   {
    title: '11. INDEMNIZACIÓN',
    intro: 'Usted acepta defender a Reverglim de reclamaciones por:',
    items: [
      '- Violación de estos término',
      '- Violación de leyes aplicables',
      '- Violación de derechos de propiedad intelectual',
      '- Contenido que publica',
    ]
  },
   {
    title: '12. CAMBIOS A LOS TÉRMINOS',
    intro: 'Reverglim puede cambiar estos términos en cualquier momento. Cambios significativos serán notificados por email.',
  },
   {
    title: '13. RESOLUCIÓN DE DISPUTAS',
    intro: 'Las disputas se resuelven por:',
    items: [
      '1. Contacto informal con soporte',
      '2. Mediación si es necesario',
      '3. Arbitraje vinculante (no en cortes)',
      '4. Applicable law United States',
      '5. Renuncia a la acción colectiva',
    ]
  },
  {
    title: '14. LEY APLICABLE',
    intro: 'Estos términos se rigen por las leyes de Estados Unidos.',
  },
    {
    title: '15. REGLAS ESPECÍFICAS POR FUNCIONALIDAD',
    subsections: [
      {
        subtitle: '15.1 Comentarios y Notas de Voz',
        intro: 'Los comentarios y notas de voz están sujetos a las restricciones de la Sección 5, Reverglim puede analizar el audio para detectar contenido prohibido.',
      },
      {
        subtitle: '15.2 Publicaciones',
        intro: 'Usted puede eliminar sus publicaciones en cualquier momento; sin embargo, copias ya compartidas pueden permanecer fuera del control de Reverglim.',

      },
         {
        subtitle: '15.3 Perfiles y Seguidores',
        intro: 'Al usar Reverglim, otros usuarios pueden visualizar su perfil público, seguidores, seguidos, likes, total de vistas en sus publicaciones, total de publicaciones, verificaciones activas, nombre, nombre de usuario, publicaciones en la sección de (About me), su presentación y su foto de perfil.',
      },
        {
        subtitle: '15.4 Mensajes Anónimos',
        intro: 'La mensajería anónima NO garantiza anonimato absoluto frente a Reverglim. La plataforma mantiene un registro interno para fines de seguridad y cumplimiento legal. Los mensajes privados están sujetos a las restricciones de la Sección 5. Reverglim puede revisar contenido reportado exclusivamente para fines de moderación.',
      },
           {
        subtitle: '15.5 Mensajería y Chat',
        intro: 'La mensajería y chat están sujetos a las restricciones de la Sección 5. Reverglim puede revisar contenido reportado exclusivamente para fines de moderación.',
      },
      {
        subtitle: '15.6 Likes, Dislikes y Reacciones',
        intro: 'La manipulación coordinada de likes o dislikes mediante bots o cuentas falsas está prohibida.',
      },
       {
        subtitle: '15.7 Reportes y Moderación',
        intro: 'Los usuarios pueden reportar publicaciones, comentarios o perfiles. Enviar reportes falsos o maliciosos constituye una violación de estos Términos.',
      },
        {
        subtitle: '15.8 Publicidad',
        intro: 'Los usuarios que crean anuncios son responsables de garantizar que el contenido cumpla con la Sección 5 y las leyes aplicables.',
        items: [
          'Reverglim puede mostrar anuncios de terceros, incluidos anuncios de Google AdMob, cuando utilices la aplicación y accedas a funciones como Reels.',
          'Los anuncios pueden mostrarse al iniciar la aplicación o entre elementos de contenido. La disponibilidad y frecuencia pueden variar según la ubicación, el estado del consentimiento, el dispositivo y el inventario publicitario.',
        ],
      },
       {
        subtitle: '15.9 Suscripciones de Verificación',
        intro: 'La verificación es un servicio de suscripción recurrente. Puede cancelarlo en cualquier momento; la cancelación tendrá efecto al final del período ya pagado.',
       
      },
    ],
    
  },

];

export default function Term() {
  return (
    <>
      <Head>
        <title>Términos y condiciones | Reverglim</title>
        <meta name="description" content="Términos y condiciones de Reverglim." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://ik.imagekit.io/yfitk2mna/Orange_and_Black_Illustrative_Engineering_Services_Logo_Design___5_-removebg-preview.png?updatedAt=1778986456032" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
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
          <h1 className="privacy-title">TÉRMINOS Y<br />CONDICIONES</h1>
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
                {s.subsections && s.subsections.map((sub) => (
                  <div key={sub.subtitle} className="privacy-subsection">
                    <h3>{sub.subtitle}</h3>
                    {sub.intro && <p>{sub.intro}</p>}
                    {sub.items && (
                      <ul>
                        {sub.items.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    )}
                  </div>
                ))}
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
                <li><Link href="/term">Términos y condiciones</Link></li>
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
