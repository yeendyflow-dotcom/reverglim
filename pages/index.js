import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect, useRef, useCallback } from 'react';
import styles from '../styles/Home.module.css';
google-site-verification=caJjXstv4J7COwx0jIKa3fZK_DNSuzFDH99pU-9cj7s
/* ─────────────────────────────────────────────────────────
   Secciones de Reverglim
───────────────────────────────────────────────────────── */
const SECTIONS = [
  { id: 'inicio',    label: 'Inicio',   index: 0 },
  { id: 'nosotros',  label: 'Nosotros', index: 1 },
  { id: 'mision',    label: 'Misión',   index: 2 },
  { id: 'vision',    label: 'Visión',   index: 3 },
  { id: 'contacto',  label: 'Contacto', index: 4 },
];

const TRANSITION_LOCK_MS = 950;

export default function Home() {
  const [current, setCurrent]             = useState(0);
  const [entering, setEntering]           = useState(0);
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [scanActive, setScanActive]       = useState(false);
  const isTransitioning                   = useRef(false);
  const touchStartY                       = useRef(0);
  const cursorRef                         = useRef(null);
  const followerRef                       = useRef(null);
  const followerPos                       = useRef({ x: 0, y: 0 });
  const cursorPos                         = useRef({ x: 0, y: 0 });
  const rafRef                            = useRef(null);

  /* ── Navigate to section ─────────────────────────────── */
  const goTo = useCallback((idx) => {
    if (isTransitioning.current || idx === current || idx < 0 || idx >= SECTIONS.length) return;
    isTransitioning.current = true;
    setScanActive(true);
    setTimeout(() => setScanActive(false), 900);
    setCurrent(idx);
    setEntering(idx);
    setTimeout(() => {
      isTransitioning.current = false;
      setEntering(-1);
    }, TRANSITION_LOCK_MS);
  }, [current]);

  /* ── Wheel ───────────────────────────────────────────── */
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      if (e.deltaY > 0) goTo(current + 1);
      else              goTo(current - 1);
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [current, goTo]);

  /* ── Touch ───────────────────────────────────────────── */
  useEffect(() => {
    const onStart = (e) => { touchStartY.current = e.touches[0].clientY; };
    const onEnd   = (e) => {
      const diff = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(diff) > 45) {
        if (diff > 0) goTo(current + 1);
        else          goTo(current - 1);
      }
    };
    window.addEventListener('touchstart', onStart, { passive: true });
    window.addEventListener('touchend',   onEnd,   { passive: true });
    return () => {
      window.removeEventListener('touchstart', onStart);
      window.removeEventListener('touchend',   onEnd);
    };
  }, [current, goTo]);

  /* ── Keyboard ────────────────────────────────────────── */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') goTo(current + 1);
      if (e.key === 'ArrowUp'   || e.key === 'PageUp')   goTo(current - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [current, goTo]);

  /* ── Custom Cursor ───────────────────────────────────── */
  useEffect(() => {
    const move = (e) => {
      cursorPos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top  = `${e.clientY}px`;
      }
    };
    const animate = () => {
      followerPos.current.x += (cursorPos.current.x - followerPos.current.x) * 0.12;
      followerPos.current.y += (cursorPos.current.y - followerPos.current.y) * 0.12;
      if (followerRef.current) {
        followerRef.current.style.left = `${followerPos.current.x}px`;
        followerRef.current.style.top  = `${followerPos.current.y}px`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    const onEnter = () => { cursorRef.current?.classList.add(styles.hover); followerRef.current?.classList.add(styles.hover); };
    const onLeave = () => { cursorRef.current?.classList.remove(styles.hover); followerRef.current?.classList.remove(styles.hover); };
    document.addEventListener('mousemove', move);
    document.querySelectorAll('a, button, [data-hover]').forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      document.removeEventListener('mousemove', move);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const trackOffset = `translateY(-${current * 100}dvh)`;

  return (
    <>
      <Head>
        <title>Reverglim — La Red Social POST-SCROLL</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>

      {/* ── Custom Cursor ─────────────────────────────── */}
      <div ref={cursorRef}   className={styles.cursor} />
      <div ref={followerRef} className={styles.cursorFollower} />

      {/* ── Scan Line FX ──────────────────────────────── */}
      <div className={`${styles.scanLine} ${scanActive ? styles.active : ''}`} />

      {/* ── Background ────────────────────────────────── */}
      <div className={`${styles.bgImage} ${current > 0 ? styles.scaled : ''}`} aria-hidden="true" />
      <div className={styles.overlay} aria-hidden="true" />

      {/* ── Navbar ────────────────────────────────────── */}
      <nav className={styles.navbar} role="navigation" aria-label="Navegación principal">
        <div className={styles.logo}>
          <img
            src="https://ik.imagekit.io/yfitk2mna/Orange_and_Black_Illustrative_Engineering_Services_Logo_Design___5_-removebg-preview.png?updatedAt=1778986456030"
            alt="Reverglim Logo"
            className={styles.logoImg}
            width={52}
            height={52}
          />
          <span className={styles.logoText}>REVERGLIM</span>
        </div>

        {/* Desktop links */}
        <ul className={styles.navLinks} role="list">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <button
                className={`${styles.navLink} ${current === s.index ? styles.active : ''}`}
                onClick={() => goTo(s.index)}
                aria-current={current === s.index ? 'page' : undefined}
                data-hover
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMobileOpen(true)}
          aria-label="Abrir menú"
          aria-expanded={mobileOpen}
          data-hover
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* ── Mobile Menu ───────────────────────────────── */}
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ''}`} role="dialog" aria-modal="true" aria-label="Menú móvil">
        <button className={styles.mobileClose} onClick={() => setMobileOpen(false)} aria-label="Cerrar menú">✕</button>
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            className={styles.mobileNavLink}
            onClick={() => { goTo(s.index); setMobileOpen(false); }}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* ── Section Number ────────────────────────────── */}
      <div className={styles.sectionNumber} aria-hidden="true">
        0{current + 1}
      </div>

      {/* ── Progress Dots ─────────────────────────────── */}
      <div className={styles.progressDots} role="tablist" aria-label="Secciones">
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            role="tab"
            aria-selected={current === s.index}
            aria-label={`Ir a ${s.label}`}
            className={`${styles.dot} ${current === s.index ? styles.activeDot : ''}`}
            onClick={() => goTo(s.index)}
            data-hover
          />
        ))}
      </div>

      {/* ── Scroll Hint ───────────────────────────────── */}
      <div className={`${styles.scrollHint} ${current === SECTIONS.length - 1 ? styles.hidden : ''}`} aria-hidden="true">
        <div className={styles.scrollHintLine} />
        <span className={styles.scrollHintText}>Scroll</span>
      </div>

      {/* ── Slide Container ───────────────────────────── */}
      <main className={styles.slideContainer} id="main-content">
        <div
          className={styles.slideTrack}
          style={{ transform: trackOffset }}
        >

          {/* ══ SECTION 0 — INICIO ══════════════════════ */}
          <section
            id="inicio"
            className={`${styles.slide} ${styles.secInicio} ${entering === 0 ? styles.entering : ''}`}
            aria-label="Inicio"
          >
            <div className={styles.inicioContent}>
 
              <div className={styles.tagline}>
                <div className={styles.taglineBar} />
                <span className={styles.taglineText}>Red Social POST-SCROLL</span>
              </div>

              <div className={styles.heroCtas}>
                <button
                  className={styles.btnPrimary}
                  onClick={() => goTo(1)}
                  data-hover
                  aria-label="Conocer más sobre Reverglim"
                >
                  <span>Sobre Reverglim</span>
                  <span aria-hidden="true">→</span>
                </button>
                <button
                  className={styles.btnSecondary}
                  onClick={() => goTo(4)}
                  data-hover
                  aria-label="Ver políticas de privacidad"
                >
                  <span>Políticas de Privacidad</span>
                </button>
              </div>
            </div>
          </section>

          {/* ══ SECTION 1 — NOSOTROS ════════════════════ */}
          <section
            id="nosotros"
            className={`${styles.slide} ${styles.secNosotros} ${entering === 1 ? styles.entering : ''}`}
            aria-label="Nosotros"
          >
            <div className={styles.sectionContent}>
              <div className={styles.sectionLabel}>
                <span className={styles.sectionLabelNum}>01</span>
                <div className={styles.sectionLabelLine} />
                <span className={styles.sectionLabelText}>Nosotros</span>
              </div>

              <h2 className={styles.sectionHeading}>
                SOMOS<br /><em>DIFERENTES</em><br />POR INNOVACIÓN
              </h2>

              <p className={styles.sectionBody}>
                Reverglim nació con el objetivo de innovar la forma en que interactuamos con los demas usuarios en las publicaciones.
                Somos una red social <strong>POST-SCROLL</strong>: que te permite hablar de Dios, expresarte libremente
                conectar con nuevos usuarios, crear un propósito, y vivir cada momento que compartes
              </p>
            </div>
          </section>

          {/* ══ SECTION 2 — MISIÓN ══════════════════════ */}
          <section
            id="mision"
            className={`${styles.slide} ${styles.secMision} ${entering === 2 ? styles.entering : ''}`}
            aria-label="Misión"
          >
            <div className={styles.misionContent}>
              <div className={styles.sectionLabel} style={{ justifyContent: 'center' }}>
                <span className={styles.sectionLabelNum}>02</span>
                <div className={styles.sectionLabelLine} />
                <span className={styles.sectionLabelText}>Misión</span>
              </div>

              <blockquote className={styles.misionQuote}>
                Devolver el control social a los creadores de contenido que IMPACTEN
                con su presencia, creatividad y humanidad.
              </blockquote>

              <div className={styles.redDivider} aria-hidden="true" />

              <p className={styles.sectionBody} style={{ textAlign: 'center', maxWidth: '560px' }}>
                Creemos que las redes sociales deben <strong>servir a las personas</strong>,
                no explotarlas. Nuestra misión es crear el espacio digital más humano,
                honesto y divertido del internet.
              </p>

              <div className={styles.misionPills} role="list">
                {['Autenticidad', 'Comunidad', 'Privacidad', 'Diversión', 'Bienestar digital'].map(p => (
                  <span key={p} className={styles.pill} role="listitem">{p}</span>
                ))}
              </div>
            </div>
          </section>

          {/* ══ SECTION 3 — VISIÓN ══════════════════════ */}
          <section
            id="vision"
            className={`${styles.slide} ${styles.secVision} ${entering === 3 ? styles.entering : ''}`}
            aria-label="Visión"
          >
            <div className={styles.visionContent}>
              <div className={styles.sectionLabel} style={{ justifyContent: 'flex-end' }}>
                <span className={styles.sectionLabelNum}>03</span>
                <div className={styles.sectionLabelLine} />
                <span className={styles.sectionLabelText}>Visión</span>
              </div>

              <h2 className={styles.sectionHeading}>
                EL FUTURO<br />DE LO<br /><em>SOCIAL</em>
              </h2>

              <p className={styles.sectionBody} style={{ textAlign: 'right' }}>
                Imaginamos un internet donde la <strong>calidad supera a la cantidad</strong>.
                Donde cada plataforma digital sea un lugar donde quieras pasar tiempo,
                no donde te sientas obligado a estar. Reverglim es ese lugar.
              </p>

              <div className={styles.visionStats} role="list">
               
                <div className={styles.statBlock} role="listitem">
                  <span className={styles.statNum}>100%</span>
                  <span className={styles.statLabel}>Privacidad tuya</span>
                </div>
                <div className={styles.statBlock} role="listitem">
                  <span className={styles.statNum}>∞</span>
                  <span className={styles.statLabel}>Posibilidades</span>
                </div>
              </div>

              <button
                className={styles.btnPrimary}
                onClick={() => goTo(4)}
                data-hover
                style={{ alignSelf: 'flex-end' }}
              >
                <span>Únete ahora</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </section>

          {/* ══ SECTION 4 — CONTACTO ════════════════════ */}
          <section
            id="contacto"
            className={`${styles.slide} ${styles.secContacto} ${entering === 4 ? styles.entering : ''}`}
            aria-label="Contacto"
          >
            <div className={styles.contactoContent}>
              <div className={styles.sectionLabel} style={{ justifyContent: 'center' }}>
                <span className={styles.sectionLabelNum}>04</span>
                <div className={styles.sectionLabelLine} />
                <span className={styles.sectionLabelText}>Contacto</span>
              </div>

              <h2 className={styles.sectionHeading} style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5.5rem)' }}>
                HABLEMOS
              </h2>

              <p className={styles.sectionBody} style={{ textAlign: 'center' }}>
                ¿Quieres saber más? ¿Tienes ideas? ¿O solo quieres saludar?
                Estamos aquí para escucharte.
              </p>

              <div className={styles.contactForm} role="form" aria-label="Formulario de contacto">
                <div className={styles.contactRow}>
                  <div className={styles.inputGroup}>
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      aria-label="Nombre"
                      autoComplete="name"
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <input
                      type="email"
                      placeholder="Tu correo"
                      aria-label="Correo electrónico"
                      autoComplete="email"
                    />
                  </div>
                </div>
                <div className={styles.inputGroup}>
                  <textarea
                    placeholder="Tu mensaje"
                    aria-label="Mensaje"
                  />
                </div>
                <button
                  className={styles.btnPrimary}
                  style={{ alignSelf: 'center', minWidth: '220px', justifyContent: 'center' }}
                  type="button"
                  data-hover
                >
                  <span>Enviar mensaje</span>
                  <span aria-hidden="true">↗</span>
                </button>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* ── Footer ────────────────────────────────────── */}
      <footer className={styles.footerStrip}>
        <p className={styles.footerText}>
          © {new Date().getFullYear()} Reverglim.{' '}
          <a href="/politicas-de-privacidad" data-hover>Políticas de Privacidad</a>
          {' · '}
          <a href="/terminos" data-hover>Términos de Uso</a>
          {' · '}
          Todos los derechos reservados.
        </p>
      </footer>
    </>
  );
}
