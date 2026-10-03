import SEO from '../components/SEO';
import SiteNav from '../components/SiteNav';

export default function Mision() {
  return (
    <>
      <SEO
        title="Nuestra misión | Reverglim"
        description="La misión de Reverglim es ofrecer una red social altamente interactiva, con contenido exclusivo y conversaciones en el feed de Reels."
        path="/mision"
      />

      <SiteNav />
      <main className="standalone-page">
        <section className="section section--mision standalone-section">
          <div className="section__inner mision__wrap">
            <span className="pill pill--light">REVERGLIM</span>
            <h1 className="mision__title">NUESTRA MISIÓN</h1>
            <p className="mision__text">
              Crear una red social altamente interactiva que permita compartir
              contenido exclusivo y conversar en el feed de Reels mediante
              comentarios de texto y notas de voz.
            </p>
            <div className="mision__values">
              {['EXCLUSIVIDAD', 'INNOVACIÓN', 'SEGURIDAD', 'COMUNIDAD'].map((value) => (
                <div key={value} className="mision__value">{value}</div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
