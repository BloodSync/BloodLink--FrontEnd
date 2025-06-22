import React, { useState } from 'react';

export default function CardPaymentForm({ type, formData, setFormData, onNext, onBack }) {
  const [flip, setFlip] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="card-form">
      <div
        className={`card-preview ${flip ? 'flipped' : ''}`}
        onMouseEnter={() => setFlip(true)}
        onMouseLeave={() => setFlip(false)}
      >
        <div className="card-front">
          <h3>{type === 'credito' ? 'Crédito' : 'Débito'} - BloodLink</h3>
          <p>{formData.numero || '•••• •••• •••• ••••'}</p>
          <p>{formData.nome || 'SEU NOME AQUI'}</p>
          <p>{formData.validade || '••/••'}</p>
        </div>
        <div className="card-back">
          <p>CVV: {formData.cvv || '•••'}</p>
        </div>
      </div>

      <form>
        <input name="numero" placeholder="Número do cartão" maxLength={19} onChange={handleChange} />
        <input name="nome" placeholder="Nome no cartão" onChange={handleChange} />
        <input name="validade" placeholder="Validade (MM/AA)" maxLength={5} onChange={handleChange} />
        <input name="cvv" placeholder="CVV" maxLength={3} onChange={handleChange} />
      </form>

      <div className="form-actions">
        <button onClick={onBack}>Voltar</button>
        <button onClick={onNext}>Próximo</button>
      </div>
    </div>
  );
}
