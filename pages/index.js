import { useEffect, useRef, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import SEO from '../components/SEO';
import { BRAND_LOGO_URL, SITE_NAME, SITE_URL } from '../lib/site';
import SiteNav from '../components/SiteNav';

const SECTIONS = ['inicio', 'stickers', 'contacto'];

const homepageDescription =
  'Reverglim es una red social altamente interactiva con contenido exclusivo. Participa en el feed de Reels con comentarios escritos y notas de voz.';

const homepageStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: BRAND_LOGO_URL,
    sameAs: [
      'https://www.instagram.com/reverglim/',
      'https://www.instagram.com/rglimoficial/',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'soporte@reverglim.com',
      contactType: 'customer support',
      availableLanguage: 'Spanish',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: 'es',
    description: homepageDescription,
    publisher: { '@id': `${SITE_URL}/#organization` },
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState('inicio');
  const containerRef = useRef(null);
  const router = useRouter();

  // Detecta sección activa al hacer scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const scrollTop = container.scrollTop;
      const height = container.clientHeight;
      const index = Math.round(scrollTop / height);
      setActiveSection(SECTIONS[Math.min(index, SECTIONS.length - 1)]);
    };

    container.addEventListener('scroll', onScroll, { passive: true });
    return () => container.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = useCallback((id) => {
    const container = containerRef.current;
    const target = document.getElementById(id);
    if (!container || !target) return;
    container.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (!router.isReady) return undefined;
    const sectionId = router.asPath.split('#')[1];
    if (!sectionId || !SECTIONS.includes(sectionId)) return undefined;

    const frame = requestAnimationFrame(() => scrollTo(sectionId));
    return () => cancelAnimationFrame(frame);
  }, [router.asPath, router.isReady, scrollTo]);

  return (
    <>
      <SEO
        title="Reverglim | Red social interactiva con Reels, texto y voz"
        description={homepageDescription}
        structuredData={homepageStructuredData}
      />

      <SiteNav activeSection={activeSection} onHomeSectionNavigate={scrollTo} />

      {/* SCROLL CONTAINER */}
      <div className="scroll-container" ref={containerRef}>

        {/* ── INICIO ── */}
        <section id="inicio" className="section section--inicio">
          <div className="section__inner inicio__grid">
            <div className="inicio__text">
              <h1 className="inicio__heading">
                DESCUBRE<br />
                <span>UNA RED SOCIAL</span>
                DIFERENTE
              </h1>
              <p className="inicio__sub">
                REVERGLIM ES UNA RED SOCIAL ALTAMENTE INTERACTIVA CON CONTENIDO
                EXCLUSIVO. PARTICIPA EN EL FEED DE REELS CON COMENTARIOS DE TEXTO
                Y NOTAS DE VOZ.
              </p>
            </div>
            <div className="inicio__media">
              <img
                src="https://ik.imagekit.io/q9tlsrum4/Reverglim%20fue%20pensada%20para%20ti!-Photoroom.png?updatedAt=1790979617426"
                alt="Reverglim app en dispositivos móviles"
              />
            </div>
          </div>
          <div className="quick-links">
            <a href="/term">TÉRMINOS Y CONDICIONES</a>
            <a href="/privacidad">POLÍTICA DE PRIVACIDAD</a>
            <a href="/seguridad-infantil">SEGURIDAD INFANTIL</a>
          </div>
        </section>

        {/* ── stickers ── */}
        <section id="stickers" className="section section--stickers">
          <div className="section__inner stickers__grid">
            <div className="stickers__content">
              <span className="pill">REVERGLIM</span>
              <h2>STICKERS PRÓXIMAMENTE</h2>
              <p>
                Expresa quién eres con nuestra colección exclusiva de stickers.
                Cada sticker es una forma única de comunicarte, reaccionar y
                conectar con otros usuarios de manera creativa e innovadora.
              </p>
              <p>
                En el feed de Reels de Reverglim, las conversaciones continúan
                con comentarios de texto y notas de voz, además del contenido
                exclusivo que comparte la comunidad.
              </p>
            </div>
            <div className="stickers__media">
              <video autoPlay loop muted playsInline>
                <source src="https://ik.imagekit.io/yfitk2mna/1.4%20M.mp4?updatedAt=1789744604688" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>


        {/* ── CONTACTO ── */}
        <section id="contacto" className="section section--contacto">
          <div className="section__inner contacto__wrap">
            <span className="pill">REVERGLIM</span>
            <h2 className="contacto__title">CONTACTO</h2>
            <p className="contacto__sub">
              ¿Tienes preguntas, sugerencias o quieres ser parte de Reverglim?
              Escríbenos.
            </p>
            <div className="contacto__info">
              <div className="contacto__item">
                <span className="contacto__label">EMAIL</span>
                <a href="mailto:soporte@reverglim.com">soporte@reverglim.com</a>
                <span className="contacto__label">REVERGLIM</span>
                <a href="" target="_blank" rel="noopener noreferrer">
                  @reverglim
                </a>
              </div>
            </div>
            <div className="contacto__store">
              <a
                className="store-badge"
                href="https://play.google.com/store/apps/details?id=com.reverglim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 40 40" className="store-badge__icon" aria-hidden="true">
                  <path d="M19.7,19.2L4.3,35.3c0.5,1.7,2.1,3,4,3c0.8,0,1.5-0.2,2.1-0.6l17.4-9.9L19.7,19.2z" fill="#EA4335" />
                  <path d="M35.3,16.4l-7.5-4.3l-8.4,7.4l8.5,8.3l7.5-4.2c1.3-0.7,2.2-2.1,2.2-3.6C37.5,18.5,36.6,17.1,35.3,16.4z" fill="#FBBC04" />
                  <path d="M4.3,4.7C4.2,5,4.2,5.4,4.2,5.8v28.5c0,0.4,0,0.7,0.1,1.1l16-15.7L4.3,4.7z" fill="#4285F4" />
                  <path d="M19.8,20l8-7.9L10.5,2.3C9.9,1.9,9.1,1.7,8.3,1.7c-1.9,0-3.6,1.3-4,3L19.8,20z" fill="#34A853" />
                </svg>
                <span className="store-badge__text">
                  <small>Disponible en</small>
                  Google Play
                </span>
              </a>
              <div className="store-badge store-badge--disabled" aria-disabled="true">
                <svg viewBox="0 0 24 24" className="store-badge__icon" aria-hidden="true">
                  <path fill="currentColor" d="M16.4 12.6c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.8-3.1.8-.6 0-1.6-.7-2.7-.7-1.4 0-2.6.8-3.3 2-1.4 2.4-.4 6 1 8 .7 1 1.5 2.1 2.6 2 1-.1 1.4-.7 2.7-.7s1.6.7 2.7.6c1.1 0 1.8-1 2.5-2 .8-1.1 1.1-2.2 1.1-2.3-.1 0-2.2-.8-2.3-3.1z" />
                  <path fill="currentColor" d="M14.1 6.2c.6-.7 1-1.7.9-2.7-.9.1-1.9.6-2.5 1.3-.6.6-1 1.6-.9 2.6.9.1 1.9-.5 2.5-1.2z" />
                </svg>
                <span className="store-badge__text">
                  <small>Próximamente en</small>
                  Apple Store
                </span>
              </div>
            </div>
            <p className="contacto__copy">© {new Date().getFullYear()} Reverglim — Todos los derechos reservados.</p>
          </div>
        </section>

      </div>

      {/* Indicador de sección activa (lateral) */}
      <div className="section-dots">
        {SECTIONS.map((id) => (
          <button
            key={id}
            className={`section-dot${activeSection === id ? ' active' : ''}`}
            onClick={() => scrollTo(id)}
            aria-label={`Ir a ${id}`}
          />
        ))}
      </div>
    </>
  );
}
