import React, { useState } from 'react';
import './styles.css';

export default function HemocentroSelector({ onSelect }) {
  const [option, setOption] = useState('cep'); // 'cep' ou 'critico'
  const [cep, setCep] = useState('');
  const [hemocentroSelecionado, setHemocentroSelecionado] = useState(null);

  const hemocentrosMock = {
    cep: [
      { nome: 'Hemocentro Central', endereco: 'Rua A, 123' },
      { nome: 'Unidade Zona Sul', endereco: 'Av. B, 456' },
    ],
    critico: [
      { nome: 'Hemocentro Leste', tiposCriticos: ['O-', 'AB+'] },
      { nome: 'Unidade Norte', tiposCriticos: ['A-', 'B-'] },
    ],
  };

  const handleSelecionar = (hemo) => {
    setHemocentroSelecionado(hemo);
    onSelect(hemo);
  };

  return (
    <div className="hemocentro-container">
      <div className="dropdown-header">
        <label>Buscar hemocentro por:</label>
     
        <select className="styled-select"
          value={option}
          onChange={(e) => {
            setOption(e.target.value);
            setHemocentroSelecionado(null);
            onSelect(null);
          }}
        >
          <option value="cep">CEP ▼</option>
          <option value="critico">Estado crítico ▼</option>
        </select>
      </div>

      {option === 'cep' && (
        <div className="busca-cep">
          <input
            type="text"
            placeholder="Digite o CEP"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
          <ul>
            {hemocentrosMock.cep.map((hemo, index) => (
              <li
                key={index}
                onClick={() => handleSelecionar(hemo)}
                className={hemocentroSelecionado === hemo ? 'selected' : ''}
              >
                <strong>{hemo.nome}</strong> — {hemo.endereco}
              </li>
            ))}
          </ul>
        </div>
      )}

      {option === 'critico' && (
        <div className="lista-criticos">
          <ul>
            {hemocentrosMock.critico.map((hemo, index) => (
              <li
                key={index}
                onClick={() => handleSelecionar(hemo)}
                className={hemocentroSelecionado === hemo ? 'selected' : ''}
              >
                <strong>{hemo.nome}</strong><br />
                Tipos críticos: {hemo.tiposCriticos.join(', ')}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
