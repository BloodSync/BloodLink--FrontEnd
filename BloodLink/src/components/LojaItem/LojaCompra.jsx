import './LojaCompra.css';
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { IoChevronBackCircle } from "react-icons/io5";
import avatar from '../../assets/avatar.jpg';
import meuBloomii from '../../assets/Bloomii-Setgamer.gif';
import { Link } from 'react-router-dom';

export default function ItemPage() {
  return (
    <>
      <div className="LojaBuyBg ">
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
              <h2 className="item-title">Nome do item</h2>
              <div className="item-icons">
                <img src={avatar} alt="Item" className="item-icon" />
                <img src={avatar} alt="Item" className="item-icon" />
              </div>

              <hr className="divider" />

              <div className="price-box">
                <span className="item-price-loja">
                  <RiMoneyRupeeCircleFill />  300 Mon
                </span>
              </div>

              <div className="buttons">
                  <button className="buy-btn">COMPRAR</button>
                <Link to="/Vitalink">
                  <button className="buy-btn">CONSEGUIR MON</button>
                </Link>
              </div>

              <p className="description-loja">
                Descrição Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
              </p>
            </div>

            <div className="right-panel">
              <img src={meuBloomii} alt="Avatar" className="avatar-img" />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
