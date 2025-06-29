import { itensMiniLojinha } from '../../components/LojaItem/ItensLoja';
import React, { useState } from 'react';
import './Loja.css';
import baseLoja from '../../assets/baseLoja.png';
import Bg from '../../assets/VitalinkC.png';
import { RiMoneyRupeeCircleFill } from 'react-icons/ri';
import { TbShoppingCartSearch } from 'react-icons/tb';
import { BiCloset } from "react-icons/bi";
import { FaRegFaceMehBlank } from "react-icons/fa6";
import { PiHairDryerFill } from "react-icons/pi";
import { RiTShirt2Fill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";
import { GiArmoredPants, GiBigDiamondRing } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';
import LojaSection from '../../components/Loja-Carrossel/LojaCarrossel';
import SetsSection from '../../components/Sets/SetsLoja';



function LojaPage() {
const nomesFormatados = {
  set: 'Set',
  rosto: 'Rosto',
  cabelo: 'Cabelo',
  camisa: 'Camisa',
  calca: 'Calça',
  acessorios: 'Acessórios'
};

  const [tab, setTab] = useState('loja');
  const [categoriaAtiva, setCategoriaAtiva] = useState('set');
  const [itemSelecionado, setItemSelecionado] = useState(null);

  const itensCategoria = itensMiniLojinha[categoriaAtiva] || []

  const [previewCamadas, setPreviewCamadas] = useState({
    cabelo: null,
    rosto: null,
    camisa: null,
    calca: null,
    acessorios: null,
  });

  const handleItemClick = (item) => {
    setItemSelecionado(item);

    if (categoriaAtiva === 'set') {
      // Para sets, limpa camadas porque a imagem substitui a base inteira
      setPreviewCamadas({
        cabelo: null,
        rosto: null,
        camisa: null,
        calca: null,
        acessorios: null,
      });
    } else {
      // Para outras categorias, atualiza a camada respectiva
      if (item.tipo && previewCamadas.hasOwnProperty(item.tipo)) {
        setPreviewCamadas(prev => ({
          ...prev,
          [item.tipo]: item.preview || item.imagem,
        }));
      }
    }
  };

  // Botão para limpar o preview (tanto para sets quanto para camadas)
  const limparPreview = () => {
    setItemSelecionado(null);
    setPreviewCamadas({
      cabelo: null,
      rosto: null,
      camisa: null,
      calca: null,
      acessorios: null,
    });
  };

  return (
    <div className="LojinhaBg">
      <div className="loja-wrapper">

        {/* Abas */}
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

        {/* Aba Loja */}
        {tab === 'loja' && (
          <>
            <div className="loja-top-section">
              <div className="novos-itens">
                <h2 className="titulo-novos">
                  LOJA - <span className="novos-sub">NOVOS ITENS</span>
                </h2>
              </div>
              <div className="loja-info">
                <Link to="/UserProfile">
                  <img src={Bg} alt="Avatar" className="user-thumb" />
                </Link>
                <p className="user-coins">
                  <RiMoneyRupeeCircleFill className="coin-icon" />
                  <span className="coin-amount">500 Mon</span>
                </p>
              </div>
            </div>

            <LojaSection />

            <hr className="loja-divider" />

            <div className="categoria-elements">

              <div className="categorias-header">
                <h3 className="categorias-title">CATEGORIAS</h3>

                <div className="categorias-grid">
                  <button
                    className={`categoria-btn ${categoriaAtiva === 'set' ? 'active' : ''}`}
                    onClick={() => {
                      setCategoriaAtiva('set');
                      limparPreview();
                    }}
                    title="Set"
                  >
                    <BiCloset className="categoria-icon" />
                  </button>

                  <button
                    className={`categoria-btn ${categoriaAtiva === 'rosto' ? 'active' : ''}`}
                    onClick={() => {
                      setCategoriaAtiva('rosto');
                      limparPreview();
                    }}
                    title="Rosto"
                  >
                    <FaRegFaceMehBlank className="categoria-icon" />
                  </button>

                  <button
                    className={`categoria-btn ${categoriaAtiva === 'cabelo' ? 'active' : ''}`}
                    onClick={() => {
                      setCategoriaAtiva('cabelo');
                      limparPreview();
                    }}
                    title="Cabelo"
                  >
                    <PiHairDryerFill className="categoria-icon" />
                  </button>

                  <button
                    className={`categoria-btn ${categoriaAtiva === 'camisa' ? 'active' : ''}`}
                    onClick={() => {
                      setCategoriaAtiva('camisa');
                      limparPreview();
                    }}
                    title="Camisa"
                  >
                    <RiTShirt2Fill className="categoria-icon" />
                  </button>

                  <button
                    className={`categoria-btn ${categoriaAtiva === 'calca' ? 'active' : ''}`}
                    onClick={() => {
                      setCategoriaAtiva('calca');
                      limparPreview();
                    }}
                    title="Calça"
                  >
                    <GiArmoredPants className="categoria-icon" />
                  </button>

                  <button
                    className={`categoria-btn ${categoriaAtiva === 'acessorios' ? 'active' : ''}`}
                    onClick={() => {
                      setCategoriaAtiva('acessorios');
                      limparPreview();
                    }}
                    title="Acessórios"
                  >
                    <GiBigDiamondRing className="categoria-icon" />
                  </button>
                </div>
              </div>

              <div className="loja-preview-section">
                <div className="preview-box">
                  <div className="preview-title-wrapper">
                    <h4 className="preview-title">
                      <TbShoppingCartSearch /> Prévia
                    </h4>
                    {itemSelecionado && (
                      <button className="limpar-preview-icon" onClick={limparPreview} title="Limpar Preview">
                        <FaTrash />
                      </button>
                    )}
                  </div>
                  <div className="preview-layer">
                    {categoriaAtiva === 'set' && itemSelecionado && itensCategoria.some(i => i.id === itemSelecionado.id) ? (
                      // Se for set, mostra o preview direto (igual antes)
                      <img
                        src={itemSelecionado.previews?.[0] || itemSelecionado.preview || itemSelecionado.imagem}
                        alt={itemSelecionado.nome}
                        className="preview-img base"
                      />
                    ) : (
                      <>
                        {/* Se existir preview[0], usa ele como base */}
                        {itemSelecionado?.previews?.[0] ? (
                          <img
                            src={itemSelecionado.previews[0]}
                            alt={`Preview base de ${itemSelecionado.nome}`}
                            className="preview-img base"
                            style={{ zIndex: 1 }}
                          />
                        ) : (
                          <img
                            src={baseLoja}
                            alt="Base"
                            className="preview-img base"
                            style={{ zIndex: 1 }}
                          />
                        )}

                        {/* Se não existe preview[0], mostra as camadas */}
                        {!itemSelecionado?.previews?.[0] &&
                          Object.entries(previewCamadas).map(([tipo, imagem], index) =>
                            imagem ? (
                              <img
                                key={tipo}
                                src={imagem}
                                alt={`Camada ${tipo}`}
                                className="preview-img overlay"
                                style={{ zIndex: index + 2 }}
                              />
                            ) : null
                          )}
                      </>
                    )}

                  </div>

                </div>
                <div className="item-section">
                  <div className="item-header">
                <h4 className="item-section-title">{nomesFormatados[categoriaAtiva] || categoriaAtiva}</h4>

                    <Link
                      to={itemSelecionado ? `/LojaItem/${itemSelecionado.id}` : '#'}
                      state={{ item: itemSelecionado }}
                    >
                      <button
                        className="comprar-btn"
                        disabled={!itemSelecionado}
                        title={itemSelecionado ? `Comprar ${itemSelecionado.nome}` : 'Selecione um item'}
                      >
                        COMPRAR
                      </button>
                    </Link>
                  </div>

                  <div className="item-grid">
                    {itensCategoria.map(item => (
                      <div
                        key={item.id}
                        className={`item-card ${itemSelecionado?.id === item.id ? 'selecionado' : ''}`}
                        onClick={() => handleItemClick(item)}
                      >
                        <div className="item-img-wrapper">
                          <img src={item.imagem} alt={item.nome} className="item-img" />
                        </div>
                        <p className="item-price">
                          <RiMoneyRupeeCircleFill className="coin-icon-sm" />
                          {item.preco} Mon
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

        {/* Aba Sets */}
        {tab === 'sets' && <SetsSection />}
      </div>
    </div>
  );
}

export default LojaPage;
