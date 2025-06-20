import React, { useState } from 'react';
import './LojaCarrossel.css';
import minhaFoto from '../../assets/avatar.jpg';
import { Link } from 'react-router-dom';

function LojaSection() {
  return (
    <>
      <div className="novos-grid">
        {/* Primeira linha fixa com 3 itens */}
        <div className="linha-superior">
          <div className="item-box destaque">
            <div className="item-img-wrapper">
              <img src={minhaFoto} alt="Set Bloomiis" />
              <div className="img-overlay" />
              <span className="item-label">SET BLOOMIIS</span>
            </div>
            <div className="item-bar gold" />
          </div>

          <div className="item-box medio">
            <div className="item-img-wrapper">
              <img src={minhaFoto} alt="Item 1" />
              <div className="img-overlay" />
              <span className="item-label">ITEM</span>
            </div>
            <div className="item-bar purple" />
          </div>

          <div className="item-box mediano">
            <div className="item-img-wrapper">
              <img src={minhaFoto} alt="Item 2" />
              <div className="img-overlay" />
              <span className="item-label">ITEM</span>
            </div>
            <div className="item-bar green" />
          </div>
        </div>

        {/* Segunda linha com os pequenos */}
        <div className="linha-inferior">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="item-box pequeno">
              <div className="item-img-wrapper">
                <img src={minhaFoto} alt={`Item ${i}`} />
                <div className="img-overlay" />
                <span className="item-label">ITEM</span>
              </div>
              <div className="item-bar green" />
            </div>
          ))}
        </div>
      </div>

    </>
  );
}
export default LojaSection;