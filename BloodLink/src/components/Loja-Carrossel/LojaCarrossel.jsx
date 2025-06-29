import React from 'react';
import './LojaCarrossel.css';
import { Link } from 'react-router-dom';
import { itensLoja } from '../LojaItem/ItensLoja';


const tamanhos = ['destaque', 'medio', 'mediano'];
const cores = ['gold', 'purple', 'green'];

function LojaSection() {
  return (
    <>
      <div className="novos-grid">

        {/* Primeira linha fixa com 3 itens (IDs 1, 2, 3) */}
        <div className="linha-superior">
          {itensLoja.slice(0, 3).map((item, index) => {
            const tamanhos = ['destaque', 'medio', 'mediano'];
            const cores = ['gold', 'purple', 'green'];

            return (
              <Link key={item.id} to={`/LojaItem/${item.id}`}>
                <div className={`item-box ${tamanhos[index]}`}>
                  <div className="item-img-wrapper">
                    <img src={item.imagem} alt={item.nome} />
                    <div className="img-overlay" />
                    <span className="item-label">{item.nome.toUpperCase()}</span>
                    <p className="item-label">{item.preco}MON</p>
                  </div>
                  <div className={`item-bar ${cores[index]}`} />
                </div>
              </Link>
            );
          })}
        </div>


        {/* Segunda linha com os pequenos (IDs 4 em diante) */}
        <div className="linha-inferior">
          {itensLoja.slice(3).map((item) => (
            <Link key={item.id} to={`/LojaItem/${item.id}`}>
              <div className="item-box pequeno">
                <div className="item-img-wrapper">
                  <img src={item.imagem} alt={item.nome} />
                  <div className="img-overlay" />
                  <span className="item-label">{item.nome}</span>
                  <p className="item-label">{item.preco}MON</p>
                </div>
                <div className="item-bar green" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </>
  );
}

export default LojaSection;
