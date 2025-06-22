import './PlansPrice.css'
import { Link } from 'react-router-dom';

function Plans() {
  return (
    <>
      <section className="part-six-plans">

        <h3>Planos para empresas</h3>

        <div className="all-plans">
          <div className="plan blue">
            <h4><span className="blue-color">Blue</span>Blood</h4>
            <p className="description">
              Anúncio sutil no site, ideal para empresas que apoiam a causa e buscam visibilidade acessível.
            </p>
            <div className="price">R$20<span className="unit">/mês</span></div>
            <Link to="/Pay">  <button>Saiba mais</button></Link>
            <hr className="plan-divider" />
            <ul>
              <li>Anúncio discreto no site</li>
              <li>Visibilidade acessível</li>
              <li>Apoio à causa com baixo custo</li>
            </ul>
          </div>

          <div className="plan oranges">
            <h4><span className="orange-color">Orange</span>Blood</h4>
            <p className="description">
              Anúncios em destaque no site e nas campanhas.</p>
            <div className="price-orange">R$40<span className="unit">/mês</span></div>
            <Link to="/Pay">  <button>Saiba mais</button></Link>
            <hr className="plan-divider" />
            <ul>
              <li>Anúncios em destaque</li>
              <li>Inclusão nas campanhas</li>
              <li>Itens exclusivos da empresa </li>
            </ul>
          </div>

          <div className="plan red">
            <h4><span className="red-color">Red</span>Blood</h4>
            <p className="description">
              Anúncios em destaque no site, campanhas e eventos especiais.</p>
            <div className="price-red">R$80<span className="unit">/mês</span></div>
            <Link to="/Pay">  <button>Saiba mais</button></Link>
            <hr className="plan-divider" />
            <ul>
              <li>Exposição em eventos e especiais</li>
              <li>Inclusão em campanhas</li>
              <li>Selos personalizados</li>
            </ul>
          </div>

        </div>

      </section>
    </>
  );
};

export default Plans; 