// components/Sets/SetsSection.jsx
import React from 'react';
import avatar from '../../assets/avatar.jpg';
import './SetsLoja.css';
import { Link } from 'react-router-dom';

function SetsSection() {
  return (
    <>
<div className="sets-section">
  <h2 className="titulo-novos">SETS DISPONÍVEIS</h2>
  <div className="sets-grid">
    {[...Array(3)].map((_, i) => (
      <div className="set-card" key={i}>
        <img src={avatar} alt={`Set ${i}`} className="set-img" />
        <p className="set-title">Set Bloomii {i + 1} <br/> 1600Mon </p>
      </div>
    ))}
  </div>
</div>
    </>
  );
}

export default SetsSection;
