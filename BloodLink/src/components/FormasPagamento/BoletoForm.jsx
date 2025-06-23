import React from 'react';
import "./BoletoForm.css"

export default function BoletoForm({ onNext, onBack, formData, setFormData }) {
  return (
    <div className="boleto-wrapper">
      <h2 className="section-title">Método de Pagamento – Boleto Bancário</h2>

      <form className="payment-form">
        <div className="form-group">
          <label htmlFor="nome">Nome completo</label>
          <input
            id="nome"
            type="text"
            placeholder="Seu nome completo"
            value={formData.nome || ''}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="cpf">CPF</label>
          <input
            id="cpf"
            type="text"
            placeholder="000.000.000-00"
            value={formData.cpf || ''}
            maxLength={11}
            onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
          />
        </div>

        <div className="form-actions">
          <button className="back-btn" onClick={onBack}>Voltar</button>
          <button
            className="checkout-btn"
            onClick={onNext}
            disabled={!formData.nome || !formData.cpf}
          >
            Gerar Boleto
          </button>
        </div>
      </form>
    </div>
  );
}
