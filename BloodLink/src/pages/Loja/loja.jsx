import React, { useState } from 'react';
import './Loja.css';
import minhaFoto from '../../assets/avatar.jpg';
import { Link } from 'react-router-dom';
import LojaSection from '../../components/Loja-Carrossel/LojaCarrossel';

function LojaPage() {
  const [tab, setTab] = useState('loja');

  return (
    <div className="LojinhaBg">
      <div className="loja-wrapper">

        <div className="loja-tabs">
          <button className={`tab-btn ${tab === 'loja' ? 'active' : ''}`} onClick={() => setTab('loja')}>
            Loja
          </button>
          <button className={`tab-btn ${tab === 'sets' ? 'active' : ''}`} onClick={() => setTab('sets')}>
            Sets
          </button>
        </div>


        <div className="loja-top-section">
          <div className="novos-itens">
            <h2 className="titulo-novos">LOJA - <span className="novos-sub">NOVOS ITENS</span></h2>
</div>

<LojaSection/>


          {/* Info usuário */}
          <div className="loja-info">
            <img src={minhaFoto} alt="Avatar" className="user-thumb" />
            <p className="user-coins">
              <img src={minhaFoto} alt="Moeda" className="coin-icon" />
              <span className="coin-amount"><span className="coin-size">500</span> Mon</span>
            </p>
          </div>
        </div>

        <hr className="loja-divider" />

        {/* Categorias */}
        <h3 className="categorias-title">CATEGORIAS</h3>
        <div className="categorias-grid">
          <button className="categoria-icon user-icon" />
          <button className="categoria-icon head-icon" />
          <button className="categoria-icon hat-icon" />
          <button className="categoria-icon shirt-icon" />
          <button className="categoria-icon pants-icon" />
          <button className="categoria-icon ring-icon" />
        </div>

        {/* Prévia e Itens */}
        <div className="loja-preview-section">
          <div className="preview-box">
            <h4 className="preview-title">Prévia</h4>
            <img src={minhaFoto} alt="Prévia" className="preview-img" />
          </div>

          <div className="item-section">
            <div className="item-header">
              <h4 className="item-section-title">Cabelo</h4>
              <button className="comprar-btn">COMPRAR</button>
            </div>
            <div className="item-grid">
              {[...Array(8)].map((_, i) => (
                <div className="item-card" key={i}>
                  <img src={minhaFoto} alt={`Item ${i}`} className="item-img" />
                  <p className="item-price">
                    <img src={minhaFoto} alt="Moeda" className="coin-icon-sm" /> 300 Mon
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LojaPage;