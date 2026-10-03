import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NAV_LINKS = [
  { label: 'INICIO', id: 'inicio', href: '/' },
  { label: 'NOSOTROS', id: 'nosotros', href: '/nosotros' },
  { label: 'MISIÓN', id: 'mision', href: '/mision' },
  { label: 'stickers', id: 'stickers', href: '/#stickers' },
  { label: 'INVERTIR', id: 'invertir', href: '/invertir' },
  { label: 'CONTACTO', id: 'contacto', href: '/#contacto' },
];

export default function SiteNav({ activeSection = '', onHomeSectionNavigate, appearance = 'light' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const isActive = (id) => {
    if (activeSection === id) return true;
    return router.pathname === `/${id}`;
  };

  const renderNavLinks = (links) => links.map((link) => (
    <li key={link.id}>
      <Link
        className={`nav-btn${isActive(link.id) ? ' active' : ''}`}
        href={link.href}
        onClick={(event) => {
          if (router.pathname === '/' && ['inicio', 'stickers', 'contacto'].includes(link.id)) {
            event.preventDefault();
            onHomeSectionNavigate(link.id);
          }
          setMenuOpen(false);
        }}
      >
        {link.label}
      </Link>
    </li>
  ));

  return (
    <nav className={`navbar navbar--${appearance}${menuOpen ? ' navbar--open' : ''}`}>
      <div className="navbar__inner">
        <Link
          className="navbar__logo-btn"
          href="/"
          onClick={(event) => {
            if (router.pathname === '/') {
              event.preventDefault();
              onHomeSectionNavigate('inicio');
            }
            setMenuOpen(false);
          }}
          aria-label="Ir al inicio"
        >
          <img
            src="https://ik.imagekit.io/yfitk2mna/Orange_and_Black_Illustrative_Engineering_Services_Logo_Design___5_-removebg-preview.png?updatedAt=1778986456032"
            alt="Reverglim"
          />
        </Link>

        <ul className="navbar__links navbar__links--left">
          {renderNavLinks(NAV_LINKS.slice(0, 3))}
        </ul>

        <Link
          className="navbar__brand"
          href="/"
          onClick={(event) => {
            if (router.pathname === '/') {
              event.preventDefault();
              onHomeSectionNavigate('inicio');
            }
          }}
        >
          REVERGLIM
        </Link>

        <button
          type="button"
          className={`navbar__toggle${menuOpen ? ' is-open' : ''}`}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span /><span />
        </button>

        <ul className="navbar__links navbar__links--right">
          {renderNavLinks(NAV_LINKS.slice(3))}
        </ul>

        <ul className={`navbar__links navbar__links--mobile${menuOpen ? ' is-open' : ''}`}>
          {renderNavLinks(NAV_LINKS)}
        </ul>
      </div>
    </nav>
  );
}
