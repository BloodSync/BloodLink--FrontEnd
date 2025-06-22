import React, { useState } from 'react';

export default function BoletoForm({ onNext, onBack }) {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');

  return (
    <div className="boleto-form">
      <h3>Pagamento via Boleto</h3>
      <p>Preencha seus dados para gerar o boleto:</p>
      <input
        type="text"
        placeholder="Nome completo"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="text"
        placeholder="CPF"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      />

      <div className="form-actions">
        <button onClick={onBack}>Voltar</button>
        <button onClick={onNext} disabled={!nome || !cpf}>Próximo</button>
      </div>
    </div>
  );
}
