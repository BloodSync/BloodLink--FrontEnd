// components/Sets/SetsSection.jsx
import React from 'react';
import Set from '../../assets/SetPage.jpg';
import './SetsLoja.css';
import { Link } from 'react-router-dom';
import { setsSecretos } from '../../components/LojaItem/ItensLoja';

function SetsSection() {
  return (
    <>
      <div className="sets-section">
        <h2 className="titulo-novos">SETS SECRETOS</h2>
        <div className="sets-grid">
          {setsSecretos.map((set) => (
            <Link
              to={`/LojaItem/${set.id}`}
              state={{ item: set }}
            >
              <div className="set-card">
                <img src={set.imagem} alt={`Set ${set.nome}`} className="set-img" />
                <p className="set-title">{set.nome} <br /> {set.preco}Mon </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default SetsSection;
