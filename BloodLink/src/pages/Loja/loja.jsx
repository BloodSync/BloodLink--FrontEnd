import React, { useState } from 'react';
import './loja.css';
import minhaFoto from '../../assets/avatar.jpg';
import LojaSection from '../../components/Loja-Carrossel/LojaCarrossel';
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaRegFaceMehBlank } from "react-icons/fa6";
import { PiHairDryerFill } from "react-icons/pi";
import { BiCloset } from "react-icons/bi";
import { RiTShirt2Fill } from "react-icons/ri";
import { GiArmoredPants } from "react-icons/gi";
import { GiBigDiamondRing } from "react-icons/gi";
import SetsSection from '../../components/Sets/SetsLoja';
import meuBloomii from '../../assets/Bloomii-Setgamer.gif';
import { TbShoppingCartSearch } from "react-icons/tb";
import { Link } from 'react-router-dom';


function LojaPage() {
  const [tab, setTab] = useState('loja');
  const [selectedButton, setSelectedButton] = useState(null);

  return (
    <div className="LojinhaBg">
      <div className="loja-wrapper">

        {/* Botões da aba */}
        <div className="loja-tabs">
          <button
            className={`tab-btn ${tab === 'loja' ? 'active' : ''}`}
            onClick={() => setTab('loja')}
          >
            <span>Loja</span>
          </button>

          <button
            className={`tab-btn ${tab === 'sets' ? 'active' : ''}`}
            onClick={() => setTab('sets')}
          >
            <span>Sets</span>
          </button>
        </div>

        {/* Conteúdo da aba LOJA */}
        {tab === 'loja' && (
          <>
            <div className="loja-top-section">
              <div className="novos-itens">
                <h2 className="titulo-novos">LOJA - <span className="novos-sub">NOVOS ITENS</span></h2>
              </div>
              <div className="loja-info">
                <Link to="/UserProfile">
                  <img src={minhaFoto} alt="Avatar" className="user-thumb" />
                </Link>
                <p className="user-coins">
                  <RiMoneyRupeeCircleFill className="coin-icon" />
                  <span className="coin-amount">
                    500 Mon</span>
                </p>
              </div>
            </div>

            <LojaSection />

            <hr className="loja-divider" />
            <div className="categoria-elements">
              <div className="categorias-header">
                <h3 className="categorias-title">CATEGORIAS</h3>

                <div className="categorias-grid">
                  <button className="categoria-btn"><BiCloset className="categoria-icon" /></button>
                  <button className="categoria-btn"><FaRegFaceMehBlank className="categoria-icon" /></button>
                  <button className="categoria-btn"><PiHairDryerFill className="categoria-icon" /></button>
                  <button className="categoria-btn"><RiTShirt2Fill className="categoria-icon" /></button>
                  <button className="categoria-btn"><GiArmoredPants className="categoria-icon" /></button>
                  <button className="categoria-btn"><GiBigDiamondRing className="categoria-icon" /></button>
                </div>
              </div>
              <div className="loja-preview-section">
                <div className="preview-box">
                  <h4 className="preview-title"><TbShoppingCartSearch /> Prévia</h4>
                  <img src={meuBloomii} alt="Prévia" className="preview-img" />
                </div>

                <div className="item-section">
                  <div className="item-header">
                    <h4 className="item-section-title">Cabelo</h4>
                    <Link to="/LojaItem">
                      <button className="comprar-btn">COMPRAR</button>
                    </Link>
                  </div>
                  <div className="item-grid">
                    {[...Array(10)].map((_, i) => (
                      <div className="item-card" key={i}>
                        <img src={minhaFoto} alt={`Item ${i}`} className="item-img" />
                        <p className="item-price">
                          <RiMoneyRupeeCircleFill className="coin-icon-sm" />
                          300 Mon
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <hr className="loja-divider" />
          </>
        )}

        {tab === 'sets' && <SetsSection />}

      </div>
    </div>
  );
}

export default LojaPage;
