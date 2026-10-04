import SEO from '../components/SEO';
import SiteNav from '../components/SiteNav';

export default function Invertir() {
  return (
    <>
      <SEO
        title="Invertir en Reverglim | Oportunidades de inversión"
        description="Conoce la visión de Reverglim y comunícate con el equipo para conversar sobre oportunidades de inversión."
        path="/invertir"
      />

      <SiteNav />
      <main className="standalone-page">
        <section className="section section--invertir standalone-section">
          <div className="section__inner invertir__wrap">
            <span className="pill pill--light">REVERGLIM</span>
            <h1 className="invertir__title">INVERTIR</h1>
            <p className="invertir__text">
              Sé parte del futuro de las redes sociales. Reverglim está en pleno
              crecimiento y buscamos inversores que compartan nuestra visión de
              una internet más sana, exclusiva e innovadora.
            </p>
            <a href="mailto:soporte@reverglim.com" className="cta-btn">
              CONTÁCTANOS PARA INVERTIR
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
