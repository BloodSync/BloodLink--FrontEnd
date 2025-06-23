import React, { useState } from 'react';
import "./PixForm.css"
export default function PixForm({ onNext, onBack }) {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [chavePix] = useState(() => gerarChavePix());

  function gerarChavePix() {
    return '3fa85f64-5717-4562-b3fc-2c963f66afa6'; // chave simulada
  }

  function copiarChave() {
    navigator.clipboard.writeText(chavePix);
    alert('Chave Pix copiada!');
  }

  return (
    <div className="billing-address">
      <h2 className="section-title">Método de Pagamento – Pix</h2>

      <form className="payment-form">
        <div className="form-group">
          <label htmlFor="nome">Nome completo</label>
          <input
            id="nome"
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="cpf">CPF</label>
          <input
            id="cpf"
            type="text"
            placeholder="000.000.000-00"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </div>

        <div className="qr-section">
          <p className="form-subtitle">Escaneie o QR Code abaixo para pagar</p>
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(chavePix)}`}
            alt="QR Code Pix"
            className="qr-image"
          />
        </div>

   <div className="pix-chave-area">
          <p><strong>Chave Pix:</strong></p>
          <div className="pix-chave-box">
            <span>{chavePix}</span>
            <button type="button" className="copy-btn" onClick={copiarChave}>Copiar</button>
          </div>
        </div>

        <div className="form-actions">
          <button className="back-btn" type="button" onClick={onBack}>Voltar</button>
          <button
            className="checkout-btn"
            type="button"
            onClick={onNext}
            disabled={!nome || !cpf}
          >
            Confirmar Pix
          </button>
        </div>
      </form>
    </div>
  );
}
