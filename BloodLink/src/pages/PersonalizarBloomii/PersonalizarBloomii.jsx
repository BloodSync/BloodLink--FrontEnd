import React, { useState } from 'react';
import './PersonalizarBloomii.css';
import minhaFoto from '../../assets/avatar.jpg';
import meuBloomii from '../../assets/Bloomii-Setgamer.gif';
import logoImage from '../../assets/logo2.png';
import { MdOutlineSave } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { BsFillLockFill } from "react-icons/bs";
import { FaRegFaceMehBlank } from "react-icons/fa6";
import { PiHairDryerFill } from "react-icons/pi";
import { BiCloset } from "react-icons/bi";
import { RiTShirt2Fill } from "react-icons/ri";
import { GiArmoredPants } from "react-icons/gi";
import { GiBigDiamondRing } from "react-icons/gi";
import { Link } from 'react-router-dom';


function Bloomii() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categoryItems = {
    closet: 8,
    face: 6,
    hair: 6,
    shirt: 6,
    pants: 6,
    ring: 12
  };
  const skinColors = [
    '#D8A07F', '#E4926F', '#F7E7DD', '#5C371D',
    '#9D7653', '#7B4C2F', '#2F1C0F', '#FFF3E7',
    '#E2B79E', '#DB8C6C'
  ];

  const handleSelect = (key) => {
    setSelectedButton(key);
    setSelectedCategory(key); // usar 'key' aqui, não 'category'
  };
  const handleSave = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000); // oculta após 3 segundos
  };
  return (

    <div className="BloomiBg">
      <div className="bloomii-wrapper">
        <aside className="sidebarBloomii">
          <h3 className="sidebar-title">Categorias</h3>
          <hr className="sidebar-divider" />

          <div className="icon-grid">
            <button
              className={`icon-btn ${selectedButton === 'closet' ? 'selected' : ''}`}
              onClick={() => handleSelect('closet')}
            >
              <BiCloset className="icon-icon" />
            </button>
            <button
              className={`icon-btn ${selectedButton === 'face' ? 'selected' : ''}`}
              onClick={() => handleSelect('face')}
            >
              <FaRegFaceMehBlank className="icon-icon" />
            </button>
            <button
              className={`icon-btn ${selectedButton === 'hair' ? 'selected' : ''}`}
              onClick={() => handleSelect('hair')}
            >
              <PiHairDryerFill className="icon-icon" />
            </button>
            <button
              className={`icon-btn ${selectedButton === 'shirt' ? 'selected' : ''}`}
              onClick={() => handleSelect('shirt')}
            >
              <RiTShirt2Fill className="icon-icon" />
            </button>
            <button
              className={`icon-btn ${selectedButton === 'pants' ? 'selected' : ''}`}
              onClick={() => handleSelect('pants')}
            >
              <GiArmoredPants className="icon-icon" />
            </button>
            <button
              className={`icon-btn ${selectedButton === 'ring' ? 'selected' : ''}`}
              onClick={() => handleSelect('ring')}
            >
              <GiBigDiamondRing className="icon-icon" />
            </button>
          </div>

          <div className="character-box">
            <img src={meuBloomii} alt="Bloomii Avatar" className="bloomii-image" />
          </div>

          <div className="user-bar">
            <img src={logoImage} alt="Logo BloodLink" className="user-logo" />
            <span className="user-name">@Usuário</span>

            <button onClick={handleSave} className="save-button">
              <MdOutlineSave size={35} color="black" />
            </button>

          </div>

          <div className="triangle-decoration"></div>
        </aside>

        <main className="customization-area">
          <div className="custom-header">
            <h2 className="custom-title">Bloomii - Personalização</h2>
          </div>

          <div className="skin-color-picker">
            {skinColors.map((color, i) => (
              <div
                key={i}
                className={`diamond-color ${selectedColor === color ? 'selected' : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>
          <div className="items-grid">
            {selectedCategory &&
              Array.from({ length: categoryItems[selectedCategory] || 0 }).map((_, i) => (
                <div className="item-slot locked" key={i}>
                  <BsFillLockFill className="chest-lock" />
                </div>
              ))}
          </div>
          <div className="switch-side">
            <GiClothes size={30} color="black" />
          </div>
        </main>

        {showMessage && (
          <div className="save-message">
            Alterações feitas com sucesso!
          </div>
          
        )}
      </div>
    </div>
  );
}

export default Bloomii;
