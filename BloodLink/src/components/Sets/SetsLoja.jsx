// components/Sets/SetsSection.jsx
import React from 'react';
import Set from '../../assets/SetPage.jpg';
import './SetsLoja.css';
import { Link } from 'react-router-dom';

function SetsSection() {
  return (
    <>
<div className="sets-section">
  <h2 className="titulo-novos">SETS SECRETOS</h2>
  <div className="sets-grid">
    
    {[...Array(2)].map((_, i) => (
      <div className="set-card" key={i}>
        <img src={Set} alt={`Set ${i}`} className="set-img" />
        <p className="set-title">Set Especial {i + 1} <br/> 2000Mon </p>
      </div>
    ))}

  </div>
</div>
    </>
  );
}

export default SetsSection;
