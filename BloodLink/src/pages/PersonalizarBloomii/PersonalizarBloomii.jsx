import React, { useState } from 'react';
import './PersonalizarBloomii.css';
import base1 from '../../assets/base1.png';
import base2 from '../../assets/base2.png';
import base3 from '../../assets/base3.png';
import base4 from '../../assets/base4.png';
import base5 from '../../assets/base5.png';
import logoImage from '../../assets/logo2.png';
import { MdOutlineSave } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { BsFillLockFill } from "react-icons/bs";
import { FaRegFaceMehBlank } from "react-icons/fa6";
import { PiHairDryerFill } from "react-icons/pi";
import { BiCloset } from "react-icons/bi";
import { RiTShirt2Fill } from "react-icons/ri";
import { GiArmoredPants, GiBigDiamondRing } from "react-icons/gi";
import { itemsData } from './ItemData';
import { Link } from 'react-router-dom';

function Bloomii() {
  const skinColors = [
    { color: '#f9cbbe', img: base1 },
    { color: '#d3aa8d', img: base2 },
    { color: '#a06d49', img: base3 },
    { color: '#523932', img: base4 },
    { color: '#100b07', img: base5 },
  ];
  const categoryNamesPT = {
    hair: 'Cabelo',
    face: 'Rosto',
    shirt: 'Camisa',
    pants: 'Calça',
    ring: 'Acessórios',
    sets: 'Sets',
  };
  const [selectedSkin, setSelectedSkin] = useState(skinColors[0]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [equippedItems, setEquippedItems] = useState({
    hair: null,
    face: null,
    shirt: null,
    pants: null,
    ring: null,
    sets: null,
  });

  const [showMessage, setShowMessage] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);

  // Clicou numa categoria: se já estiver selecionada, desmarca
  const handleSelectCategory = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      setSelectedButton(null);
    } else {
      setSelectedCategory(category);
      setSelectedButton(category);
    }
  };

  const handleEquipItem = (category, item) => {
    // Se clicar no item já equipado, desseleciona ele (toggle)
    if (equippedItems[category] === item) {
      setEquippedItems(prev => ({ ...prev, [category]: null }));
    } else {
      setEquippedItems(prev => ({ ...prev, [category]: item }));
    }
  };

  const handleSave = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <div className="bloomii-bg">
      <div className="bloomii-wrapper">
        <aside className="bloomii-sidebar">
          <h3 className="bloomii-sidebar-title">Categorias</h3>
          <hr className="bloomii-sidebar-divider" />

          <div className="bloomii-icon-grid">
            <button
              className={`bloomii-icon-btn ${selectedButton === 'hair' ? 'selected' : ''}`}
              onClick={() => handleSelectCategory('hair')}
            >
              <PiHairDryerFill className="bloomii-icon-icon" />
            </button>
            <button
              className={`bloomii-icon-btn ${selectedButton === 'face' ? 'selected' : ''}`}
              onClick={() => handleSelectCategory('face')}
            >
              <FaRegFaceMehBlank className="bloomii-icon-icon" />
            </button>
            <button
              className={`bloomii-icon-btn ${selectedButton === 'shirt' ? 'selected' : ''}`}
              onClick={() => handleSelectCategory('shirt')}
            >
              <RiTShirt2Fill className="bloomii-icon-icon" />
            </button>
            <button
              className={`bloomii-icon-btn ${selectedButton === 'pants' ? 'selected' : ''}`}
              onClick={() => handleSelectCategory('pants')}
            >
              <GiArmoredPants className="bloomii-icon-icon" />
            </button>
            <button
              className={`bloomii-icon-btn ${selectedButton === 'ring' ? 'selected' : ''}`}
              onClick={() => handleSelectCategory('ring')}
            >
              <GiBigDiamondRing className="bloomii-icon-icon" />
            </button>
          </div>

          <div className="bloomii-character-box">
            <div className="bloomii-avatar-layer">
              <img src={selectedSkin.img} alt="Base avatar" className="bloomii-avatar-img base" />
              {Object.entries(equippedItems).map(([category, item], i) =>
                item ? (
                  <img
                    key={i}
                    src={item.preview}
                    alt={`${category} equipado`}
                    className="bloomii-avatar-img equipped-item"
                  />
                ) : null
              )}
            </div>
          </div>

          <div className="bloomii-user-bar">
            <img src={logoImage} alt="Logo BloodLink" className="bloomii-user-logo" />
            <span className="bloomii-user-name">@Usuário</span>

            <button onClick={handleSave} className="bloomii-save-button">
              <MdOutlineSave size={35} color="black" />
            </button>
          </div>

          <div className="bloomii-triangle-decoration"></div>
        </aside>

        <main className="bloomii-customization-area">
          <div className="bloomii-custom-header">
            <h2 className="bloomii-custom-title">
              {selectedCategory
                ? `Bloomii - ${categoryNamesPT[selectedCategory] || selectedCategory}`
                : 'Bloomii - Personalização'}
            </h2>
          </div>

          {/* Exibe diamante só quando nenhuma categoria estiver selecionada */}
          {!selectedCategory && (
            <>
              <div className="bloomii-skin-color-picker">
                {skinColors.map((skin, i) => (
                  <div
                    key={i}
                    className={`bloomii-diamond-color ${selectedSkin.color === skin.color ? 'selected' : ''}`}
                    style={{ backgroundColor: skin.color }}
                    onClick={() => setSelectedSkin(skin)}
                  />
                ))}
              </div>

              <div className="bloomii-sets-section">
                <h3 className="bloomii-sets-title">{categoryNamesPT.sets}</h3>
                {itemsData.sets && itemsData.sets.length > 0 ? (
                  <div className="bloomii-sets-grid">
                    {itemsData.sets.map((set, i) => (
                      <div
                        key={i}
                        className={`bloomii-set-slot ${equippedItems.sets === set ? 'equipped' : ''}`}
                        onClick={() => handleEquipItem('sets', set)}
                      >
                        <img src={set.icon} alt={set.name} className="bloomii-set-icon" />
                        <span className="bloomii-set-name">{set.name}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="bloomii-no-sets-message">
                    Você não possui nenhum set! Quer visitar a{' '}
                    <Link to="/UserStore" className="bloomii-loja-link">
                      lojinha?
                    </Link>
                  </p>
                )}
              </div>


              <div className="bloomii-switch-side">
                <GiClothes size={30} color="black" />
              </div>
            </>
          )}

          <div className="bloomii-items-grid">
            {selectedCategory ? (
              itemsData[selectedCategory].map((item, i) => (
                <div
                  key={i}
                  className={`bloomii-item-slot ${equippedItems[selectedCategory] === item ? 'equipped' : ''}`}
                  onClick={() => handleEquipItem(selectedCategory, item)}
                >
                  <img src={item.icon} alt={`Item ${i + 1}`} className="bloomii-item-img-preview" />
                </div>
              ))
            ) : null}
          </div>


          {/* Sempre mostrar o switch-side (parte dos sets) junto com o diamante (quando diamante visível) */}
          {!selectedCategory && (
            <div className="bloomii-switch-side">
              <GiClothes size={30} color="black" />
            </div>
          )}
        </main>

        {showMessage && (
          <div className="bloomii-save-message">Alterações feitas com sucesso!</div>
        )}
      </div>
    </div>
  );
}

export default Bloomii;
