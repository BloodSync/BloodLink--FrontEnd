import React, { useState } from 'react';

export default function PixForm({ onNext, onBack }) {
  const [chave, setChave] = useState('');

  return (
    <div className="pix-form">
      <h3>Pagamento via Pix</h3>
      <p>Insira sua chave Pix (CPF, e-mail ou aleatória):</p>
      <input
        type="text"
        placeholder="Chave Pix"
        value={chave}
        onChange={(e) => setChave(e.target.value)}
      />

      <div className="form-actions">
        <button onClick={onBack}>Voltar</button>
        <button onClick={onNext} disabled={!chave}>Próximo</button>
      </div>
    </div>
  );
}
