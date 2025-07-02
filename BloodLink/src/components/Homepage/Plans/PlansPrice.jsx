import './PlansPrice.css'
import { Link } from 'react-router-dom';

function Plans() {
  return (
    <>
      <section className="part-six-plans">

        <h3 data-i18n="plansTitle">Planos para empresas</h3>

        <div className="all-plans">
          <div className="plan blue">
            <h4><span className="blue-color">Blue</span>Blood</h4>
            <p className="description" data-i18n="plan1Description">
              Anúncio sutil no site, ideal para empresas que apoiam a causa e buscam visibilidade acessível.
            </p>
            <div className="price">R$20<span className="unit">/mês</span></div>
            <Link to="/Pay"><button data-i18n="learnMore">Saiba mais</button></Link>
            <hr className="plan-divider" />
            <ul>
              <li data-i18n="plan1Feature1">Anúncio discreto no site</li>
              <li data-i18n="plan1Feature2">Visibilidade acessível</li>
              <li data-i18n="plan1Feature3">Apoio à causa com baixo custo</li>
            </ul>
          </div>

          <div className="plan oranges">
            <h4><span className="orange-color">Orange</span>Blood</h4>
            <p className="description" data-i18n="plan2Description">
              Anúncios em destaque no site e nas campanhas.
            </p>
            <div className="price-orange">R$40<span className="unit">/mês</span></div>
            <Link to="/Pay"><button data-i18n="learnMore">Saiba mais</button></Link>
            <hr className="plan-divider" />
            <ul>
              <li data-i18n="plan2Feature1">Anúncios em destaque</li>
              <li data-i18n="plan2Feature2">Inclusão nas campanhas</li>
              <li data-i18n="plan2Feature3">Itens exclusivos da empresa</li>
            </ul>
          </div>

          <div className="plan red">
            <h4><span className="red-color">Red</span>Blood</h4>
            <p className="description" data-i18n="plan3Description">
              Anúncios em destaque no site, campanhas e eventos especiais.
            </p>
            <div className="price-red">R$80<span className="unit">/mês</span></div>
            <Link to="/Pay"><button data-i18n="learnMore">Saiba mais</button></Link>
            <hr className="plan-divider" />
            <ul>
              <li data-i18n="plan3Feature1">Exposição em eventos e especiais</li>
              <li data-i18n="plan3Feature2">Inclusão em campanhas</li>
              <li data-i18n="plan3Feature3">Selos personalizados</li>
            </ul>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default Plans; 