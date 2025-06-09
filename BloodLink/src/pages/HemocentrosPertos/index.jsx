import React, { useState, useEffect } from 'react';
import './styles.css'; // Arquivo CSS separado, se desejar

const Hemocentros = () => {
  const [cep, setCep] = useState('');
  const [validCep, setValidCep] = useState(false);
  const [error, setError] = useState('');
  const [mapUrl, setMapUrl] = useState('');

  const GOOGLE_MAPS_KEY = 'SUA_API_KEY_AQUI'; // Trocar pela chave válida

  const validarCep = (cep) => {
    const regex = /^[0-9]{5}-?[0-9]{3}$/;
    return regex.test(cep);
  };

  useEffect(() => {
    if (validCep) {
      setMapUrl(

        //Lembrete de criar api para o funcionamento da função 
        `https://www.google.com/maps/embed/v1/search?key=${GOOGLE_MAPS_KEY}&q=hemocentro+perto+${cep}`
      );
    }
  }, [validCep, cep]);

  const handleCepChange = (e) => {
    const novoCep = e.target.value;
    setCep(novoCep);
    if (validarCep(novoCep)) {
      setValidCep(true);
      setError('');
    } else {
      setValidCep(false);
      setError('CEP inválido');
    }
  };

  return (
    <div className="hemocentro-container">
      <h2>Hemocentros perto de você</h2>
      <hr />

      <label htmlFor="cep" className="label-cep">Digite seu CEP</label>
      <input
        type="text"
        className="input-cep"
        id="cep"
        placeholder="00000-000"
        value={cep}
        onChange={handleCepChange}
      />

      {error && <p className="erro-cep">{error}</p>}

      {validCep && (
        <div className="mapa-hemocentros">
          <iframe
            title="mapa"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: '15px' }}
            src={mapUrl}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Hemocentros;
