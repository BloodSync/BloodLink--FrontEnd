import { useParams, Link, useLocation } from 'react-router-dom';
import { itensLoja } from '../LojaItem/ItensLoja';
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { IoChevronBackCircle } from "react-icons/io5";
import avatar from '../../assets/VitalinkC.png';
import { useState } from 'react';
import './LojaCompra.css';

export default function ItemPage() {
  const { id } = useParams();
const location = useLocation();
const item =
  location.state?.item || itensLoja.find((item) => item.id === id);

if (!item) return (
  <div className="LojaBuyBg">
    <div className="buy-item-page">
      <p className="not-found-msg">Item não encontrado. 😢</p>
      <Link to="/UserStore">
        <button className="back-btn-loja">Voltar à Loja</button>
      </Link>
    </div>
  </div>
);

 const [previewAtiva, setPreviewAtiva] = useState(
  item.previews?.[0] || item.preview
);


  const handleParteClick = (index) => {
    if (item.previews && item.previews[index]) {
      setPreviewAtiva(item.previews[index]);
    }
  };

  return (
    <div className="LojaBuyBg">
      <div className="buy-item-page">
        <div className="top-bar">
          <Link to="/UserStore">
            <button className="back-btn-loja">
              <IoChevronBackCircle />
            </button>
          </Link>
          <div className="top-info">
            <Link to="/UserProfile">
              <img src={avatar} alt="Banner" className="banner-img" />
            </Link>
            <span className="coin-display-loja">
              <RiMoneyRupeeCircleFill /> 500 Mon
            </span>
          </div>
        </div>

        <div className="content">
          <div className="left-panel">
            <h2 className="item-title">{item.nome}</h2>

            <div className="item-icons">
              {item.tipo === 'set' && item.partes ? (
                item.partes.map((parte, index) => (
                  <img
                    key={index}
                    src={parte}
                    alt={`Parte ${index + 1}`}
                    className="item-icon"
                    onClick={() => handleParteClick(index)}
                    style={{ cursor: 'pointer' }}
                  />
                ))
              ) : (
                <img src={item.imagem} alt="Item" className="item-icon" />
              )}
            </div>

            <hr className="divider-store" />

            <div className="price-box">
              <span className="item-price-loja">
                <RiMoneyRupeeCircleFill /> {item.preco} Mon
              </span>
            </div>

            <div className="buttons">
              <button className="buy-btn">COMPRAR</button>
              <Link to="/Vitalink">
                <button className="buy-btn">CONSEGUIR MON</button>
              </Link>
            </div>

            <p className="description-loja">{item.descricao}</p>
          </div>

          <div className="right-panel">
            <img src={previewAtiva} alt="Preview do item" className="avatar-img" />
          </div>
        </div>
      </div>
    </div>
  );
}
