import React, { useState } from 'react';
import './Loja.css';
import minhaFoto from '../../assets/avatar.jpg';



export default function LojaPage() {
  const [tab, setTab] = useState('loja');

  return (
    <> 
    < div className="LojinhaBg"> 
    <div className="loja-wrapper">
      
      <div className="loja-tabs">
        <button className={`tab-btn ${tab === 'loja' ? 'active' : ''}`} onClick={() => setTab('loja')}>
          Loja
        </button>
        <button className={`tab-btn ${tab === 'especiais' ? 'active' : ''}`} onClick={() => setTab('especiais')}>
          Especiais
        </button>
      </div>

      <div className="loja-top-section">
        <div className="carousel-and-categorias">
          <div className="banner-carousel">
            <img src={minhaFoto} alt="Set Bloomiis" className="banner-img" />
            <p className="banner-title">Set Bloomiis</p>
          </div>

          <div className="loja-categorias">
            <h3 className="categorias-title">Categorias</h3>
            <div className="categorias-grid">
              <button className="categoria-icon user-icon" />
              <button className="categoria-icon head-icon" />
              <button className="categoria-icon hat-icon" />
              <button className="categoria-icon shirt-icon" />
              <button className="categoria-icon pants-icon" />
              <button className="categoria-icon ring-icon" />
            </div>
          </div>
        </div>

        <div className="loja-info">
          <img src={minhaFoto}  alt="Avatar" className="user-thumb" />
          <p className="user-coins">
            <img src={minhaFoto} alt="Moeda" className="coin-icon" />
            <span className="coin-amount"> <span className="coin-size"> 500 </span> Mon </span>
          </p>
        </div>
      </div>

      <hr className="loja-divider" />

      <div className="loja-preview-section">
        <div className="preview-box">
          <h4 className="preview-title">Prévia</h4>
          <img src= {minhaFoto}  alt="Prévia" className="preview-img" />
        </div>

        <div className="item-section">
          <h4 className="item-section-title">Cabelo</h4>
          <div className="item-grid">
            {[1, 2, 3].map((_, i) => (
              <div className="item-card" key={i}>
                <p className="item-name">Reizinho</p>
                <p className="item-price">
                  <img src={minhaFoto} alt="Moeda" className="coin-icon-sm" /> 30
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
    </div>
    </>
  );
}
