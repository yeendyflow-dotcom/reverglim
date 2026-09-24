import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import { SITE_URL } from '../lib/site';

const NAV_LINKS = [
  { label: 'INICIO', href: '#inicio' },
  { label: 'NOSOTROS', href: '#nosotros' },
  { label: 'MISIÓN', href: '#' },
  { label: 'VISIÓN', href: '#' },
  { label: 'STICKERS', href: '#' },
  { label: 'INVERTIR', href: '#' },
  { label: 'ANUNCIARME', href: '#' },
  { label: 'EMPRESA', href: '#' },
  { label: 'CONTACTO', href: '#contacto' },
];

const BENEFITS = [
  'CONTENIDO SALUDABLE',
  'INTERACCIONES INNOVADORAS',
  'SEGURIDAD',
  'PROTECCIÓN DE DATOS',
  'COMUNIDAD CAPACITADA',
  'MONETIZACIÓN DE VIDEOS (PRÓXIMAMENTE...)',
  'COMUNICACIÓN DE FORMA INNOVADORA',
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(() => new Set());

  const heroVideoRef = useRef(null);
  const verticalVideoRef = useRef(null);
  const revealNodes = useRef([]);

  // Oscurece la barra de navegación cuando el usuario baja en la página
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Fuerza la reproducción de ambos videos de fondo (ayuda en algunos navegadores móviles)
  useEffect(() => {
    [heroVideoRef.current, verticalVideoRef.current].forEach((video) => {
      if (video) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            /* el autoplay puede requerir interacción del usuario en algunos navegadores */
          });
        }
      }
    });
  }, []);

  // Revela cada bloque con una transición suave cuando entra en la pantalla
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.revealId;
            setVisible((prev) => {
              const next = new Set(prev);
              next.add(id);
              return next;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealNodes.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const registerReveal = (node) => {
    if (node && !revealNodes.current.includes(node)) {
      revealNodes.current.push(node);
    }
  };

  const revealClass = (id) => `reveal${visible.has(id) ? ' is-visible' : ''}`;

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <Head>
        <title>Reverglim | Red social POST-SCROLL: conecta, comparte y destaca</title>
        <meta
          name="description"
          content="Reverglim es la red social POST-SCROLL: sin scroll infinito, contenido exclusivo y saludable, privacidad real y seguridad por diseño. La alternativa a TikTok e Instagram."
        />
        <meta
          name="keywords"
          content="reverglim, rever, reverll, red social, red social post-scroll, nueva red social, alternativa tiktok, alternativa instagram, mejor red social, red social segura, red social sin publicidad, conectar compartir destacar"
        />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:title" content="Reverglim | Red social POST-SCROLL: conecta, comparte y destaca" />
        <meta
          property="og:description"
          content="Reverglim es la red social POST-SCROLL: sin scroll infinito, contenido exclusivo y saludable, privacidad real y seguridad por diseño."
        />
        <meta property="og:image" content={`${SITE_URL}/images/og-image.jpg`} />
        <meta property="og:site_name" content="Reverglim" />
        <meta property="og:locale" content="es" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Reverglim | Red social POST-SCROLL" />
        <meta
          name="twitter:description"
          content="Reverglim es la red social POST-SCROLL: sin scroll infinito, con privacidad real y seguridad por diseño."
        />
        <meta name="twitter:image" content={`${SITE_URL}/images/og-image.jpg`} />
      </Head>

      {/* ================= HERO ================= */}
      <header id="inicio" className="hero">
        <video
          ref={heroVideoRef}
          className="hero__video"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/og-image.jpg"
        >
          <source src="https://cdn.coverr.co/videos/coverr-a-girl-using-a-smartphone-to-take-pictures-of-the-sea-1907/720p.mp4" type="video/mp4" />
        </video>
        <div className="hero__overlay" />

        <nav className={`navbar${scrolled ? ' navbar--solid' : ''}`}>
          <div className="navbar__inner">
            <a href="#inicio" className="navbar__logo" onClick={closeMenu}>
              <img src="https://ik.imagekit.io/yfitk2mna/Orange_and_Black_Illustrative_Engineering_Services_Logo_Design___5_-removebg-preview.png?updatedAt=1778986456032" alt="Reverglim" />
            </a>

            <button
              type="button"
              className={`navbar__toggle${menuOpen ? ' is-open' : ''}`}
              aria-label="Abrir menú de navegación"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>

            <ul className={`navbar__links${menuOpen ? ' is-open' : ''}`}>
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={closeMenu}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="hero__content">
          <h1 className="hero__title">
            REVERGLIM, UNA <span className="text-red">RED SOCIAL</span>
            <br />
            DIFERENTE
          </h1>

          <div className="store-badges">
           <a
  className="store-badge"
  href="https://play.google.com/store/apps/details?id=com.reverglim"
  target="_blank"
  rel="noopener noreferrer"
>
  <svg viewBox="0 0 40 40" className="store-badge__icon" aria-hidden="true">
    {/* Azul (Izquierda) */}
    <path d="M19.7,19.2L4.3,35.3c0,0,0,0,0,0c0.5,1.7,2.1,3,4,3c0.8,0,1.5-0.2,2.1-0.6l0,0l17.4-9.9L19.7,19.2z" fill="#EA4335"></path>
    {/* Verde (Arriba) */}
    <path d="M35.3,16.4L35.3,16.4l-7.5-4.3l-8.4,7.4l8.5,8.3l7.5-4.2c1.3-0.7,2.2-2.1,2.2-3.6C37.5,18.5,36.6,17.1,35.3,16.4z" fill="#FBBC04"></path>
    {/* Amarillo (Derecha) */}
    <path d="M4.3,4.7C4.2,5,4.2,5.4,4.2,5.8v28.5c0,0.4,0,0.7,0.1,1.1l16-15.7L4.3,4.7z" fill="#4285F4"></path>
    {/* Rojo (Abajo) */}
    <path d="M19.8,20l8-7.9L10.5,2.3C9.9,1.9,9.1,1.7,8.3,1.7c-1.9,0-3.6,1.3-4,3c0,0,0,0,0,0L19.8,20z" fill="#34A853"></path>
  </svg>
  <span className="store-badge__text">
    <small>Disponible en</small>
    Google Play
  </span>
</a>

            <span className="store-badge__or" aria-hidden="true">O</span>

            <a
              className="store-badge store-badge--disabled"
              href="#"
              aria-disabled="true"
              onClick={(e) => e.preventDefault()}
            >
              <svg viewBox="0 0 24 24" className="store-badge__icon" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M16.4 12.6c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.8-3.1.8-.6 0-1.6-.7-2.7-.7-1.4 0-2.6.8-3.3 2-1.4 2.4-.4 6 1 8 .7 1 1.5 2.1 2.6 2 1-.1 1.4-.7 2.7-.7s1.6.7 2.7.6c1.1 0 1.8-1 2.5-2 .8-1.1 1.1-2.2 1.1-2.3-.1 0-2.2-.8-2.3-3.1z"
                />
                <path
                  fill="currentColor"
                  d="M14.1 6.2c.6-.7 1-1.7.9-2.7-.9.1-1.9.6-2.5 1.3-.6.6-1 1.6-.9 2.6.9.1 1.9-.5 2.5-1.2z"
                />
              </svg>
              <span className="store-badge__text">
                <small>Próximamente en</small>
                Apple Store
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* ================= PRESENTACIÓN ================= */}
      <section id="nosotros" className="presentation">
        <div className="container presentation__grid">
          <div
            className={`presentation__media ${revealClass('media')}`}
            data-reveal-id="media"
            ref={registerReveal}
          >
            <img
              src="https://ik.imagekit.io/yfitk2mna/Agregar%20un%20subt%C3%ADtulo.png?updatedAt=1789736153490"
              alt="Reverglim — conecta, comparte, destaca"
            />
          </div>

          <div
            className={`presentation__content ${revealClass('content')}`}
            data-reveal-id="content"
            ref={registerReveal}
          >
            <span className="pill-title">REVERGLIM</span>

            <p>
              Red social móvil creada para quienes quieren conectar, compartir
              y destacar de una manera diferente.
            </p>
            <p>
              Reverglim es un espacio para descubrir personas, expresar quién
              eres, compartir lo que te importa y convertir cada interacción
              en una experiencia social diferente. En este espacio vas a
              interactuar de manera diferente en la actualización actual y en
              las futuras actualizaciones.
            </p>
            <p>
              En Reverglim nos comprometemos a cultivar y a establecer como
              meta la generación de contenido exclusivo, eliminando por
              completo cualquier contenido que contenga: noticias, muertes,
              accidentes, conflictos sociales, pornografía, entre otros...
            </p>
            <p>
              Somos una red social que tiene como objetivo ser líder y autora
              de la innovación absoluta en el desarrollo de una{' '}
              <span className="text-gold">RED INTELIGENTE</span> de conexión
              colectiva entre usuarios.
            </p>
          </div>
        </div>
      </section>

      {/* ================= BENEFICIOS ================= */}
      <section id="beneficios" className="benefits">
        <div className="container benefits__grid">
          <div
            className={`benefits__content ${revealClass('benefits-content')}`}
            data-reveal-id="benefits-content"
            ref={registerReveal}
          >
            <h2>BENEFICIOS QUE OFRECEMOS</h2>
            <ol className="benefits__list">
              {BENEFITS.map((benefit, index) => (
                <li key={benefit}>
                  <span className="benefits__number">{index + 1}</span>
                  {benefit}
                </li>
              ))}
            </ol>
          </div>

          <div
            className={`benefits__media ${revealClass('benefits-media')}`}
            data-reveal-id="benefits-media"
            ref={registerReveal}
          >
            <video
              ref={verticalVideoRef}
              autoPlay
              loop
              muted
              playsInline
              poster="/images/og-image.jpg"
            >
              <source src="https://ik.imagekit.io/yfitk2mna/1.4%20M.mp4?updatedAt=1789744604688" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <div className="footer-wrapper">
        <footer id="contacto" className="footer">
          <div className="footer__col">
            <h3>Reverglim</h3>
            <p>
              Únete a Reverglim y disfruta de los beneficios que ofrecemos
              para ti. Si buscas una red social donde tu prioridad sea la
              exclusividad y la salud mental, Reverglim fue pensada para
              ti...
            </p>
          </div>

          <div className="footer__col">
            <h4>Contacto</h4>
            <ul>
              <li>soporte@reverglim.com</li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Enlaces rápidos</h4>
            <ul>
              <li><a href="/term">Términos y condiciones</a></li>
              <li><a href="/privacidad">Política y privacidad</a></li>
              <li><a href="/seguridad-infantil">Seguridad infantil</a></li>
              <li><a href="/red-social-segura-menores">Red social segura para menores</a></li>
              <li><a href="/red-social-sin-publicidad">Red social sin publicidad</a></li>
              <li><a href="/que-es-reverglim">¿Qué es Reverglim?</a></li>
              <li><a href="/alternativa-tiktok">Reverglim vs. TikTok</a></li>
              <li><a href="/alternativa-instagram">Reverglim vs. Instagram</a></li>
              <li><a href="/mejor-red-social-2026">Mejor red social 2026</a></li>
            </ul>
          </div>
        </footer>

        <p className="footer__copyright">
          © {new Date().getFullYear()} Reverglim — Todos los derechos
          reservados.
        </p>
      </div>
    </>
  );
}
