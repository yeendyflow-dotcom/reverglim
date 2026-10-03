import SEO from '../components/SEO';
import SiteNav from '../components/SiteNav';

export default function Nosotros() {
  return (
    <>
      <SEO
        title="Quiénes somos | Reverglim"
        description="Conoce Reverglim: una red social para compartir contenido exclusivo e interactuar mediante comentarios de texto y notas de voz en Reels."
        path="/nosotros"
      />

      <SiteNav />
      <main className="standalone-page">
        <section className="section section--nosotros standalone-section">
          <div className="section__inner nosotros__grid">
            <div className="nosotros__media">
              <img
                src="https://ik.imagekit.io/q9tlsrum4/Image-Photoroom.png?updatedAt=1790990685121"
                alt="Reverglim — nosotros"
              />
            </div>
            <div className="nosotros__content">
              <span className="pill">REVERGLIM</span>
              <h1>NOSOTROS</h1>
              <p>
                Red social móvil creada para quienes quieren conectar, compartir
                y destacar de una manera diferente.
              </p>
              <p>
                En Reverglim nos comprometemos a cultivar contenido exclusivo,
                eliminando por completo noticias, muertes, accidentes, conflictos
                sociales y pornografía.
              </p>
              <p>
                Reverglim busca que compartir contenido exclusivo y conversar sobre
                cada publicación formen parte de una misma experiencia social.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
