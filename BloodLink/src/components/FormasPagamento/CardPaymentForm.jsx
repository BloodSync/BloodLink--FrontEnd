import React, { useState } from 'react';
import "./CardPaymentForm.css"


export default function CardPaymentForm({ type, formData, setFormData, onNext, onBack }) {
  const [flip, setFlip] = useState(false);
const handleChange = (e) => {
  let { name, value } = e.target;

  if (name === 'numero') {
    value = value.replace(/\D/g, '');
    value = value.substring(0, 16);
    value = value.replace(/(.{4})/g, '$1 ').trim(); 
  }

  // Formatação da validade MM/AA
  if (name === 'validade') {
    value = value.replace(/\D/g, '');
    if (value.length >= 3) {
      value = value.slice(0, 4);
      value = value.replace(/(\d{2})(\d{1,2})/, '$1/$2');
    }
  }

  setFormData({ ...formData, [name]: value });
};

  const metodoTexto = type === 'credito' ? 'Cartão de Crédito' : 'Cartão de Débito';

  return (
    <div className="card-section-wrapper">
      <h2 className="section-title">Método de Pagamento – {metodoTexto}</h2>

      <div className="card-form-horizontal">
        <div
          className={`card-preview ${flip ? 'flipped' : ''}`}
          onMouseEnter={() => setFlip(true)}
          onMouseLeave={() => setFlip(false)}
        >
          <div className="card-front">
            <h3> BloodLink</h3>
            <p>{formData.numero || 'Número do cartão'}</p>
            <p>{formData.nome || 'Nome do cartão'}</p>
            <p>{formData.validade || 'MM/AA'}</p>
          </div>
          <div className="card-back">
            <p>CVV: {formData.cvv || ''}</p>
          </div>
        </div>

        <div className="form-container">
          <form className="payment-form">
            <div className="form-group">
              <label htmlFor="nome">Nome no cartão</label>
              <input name="nome" placeholder="Digite o nome" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="numero">Número do cartão</label>
              <input name="numero" placeholder="•••• •••• •••• ••••" maxLength={16} onChange={handleChange} />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="validade">Validade</label>
                <input name="validade" placeholder="MM/AA" maxLength={4} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input name="cvv" placeholder="•••" maxLength={3} onChange={handleChange} />
              </div>
            </div>
            
          </form> 
        </div>
        <div className="billing-address">
  <h4 className="form-subtitle">Endereço de Cobrança</h4>
  <form className="payment-form">
    <div className="form-group">
      <label htmlFor="rua">Rua</label>
      <input name="rua" placeholder="Av. Central" onChange={handleChange} />
    </div>
    <div className="form-row">
      <div className="form-group">
        <label htmlFor="numeroEndereco">Número</label>
        <input name="numeroEndereco" placeholder="123" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="bairro">Bairro</label>
        <input name="bairro" placeholder="Centro" onChange={handleChange} />
      </div>
    </div>
    <div className="form-row">
      <div className="form-group">
        <label htmlFor="cidade">Cidade</label>
        <input name="cidade" placeholder="São Paulo" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="estado">Estado</label>
        <input name="estado" placeholder="SP" maxLength={2} onChange={handleChange} />
      </div>
    </div>
    <div className="form-row">
      <div className="form-group">
        <label htmlFor="cep">CEP</label>
        <input name="cep" placeholder="00000-000" maxLength={9} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="pais">País</label>
        <input name="pais" placeholder="Brasil" onChange={handleChange} />
      </div>
    </div>
  </form>
</div>
      </div>
                <div className="form-actions">
            <button className="back-btn" onClick={onBack}>Voltar</button>
            <button className="checkout-btn" onClick={onNext}>Check Out</button>
          </div>
    </div>
  );
  
}