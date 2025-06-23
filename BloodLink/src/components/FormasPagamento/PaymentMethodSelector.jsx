export default function PaymentMethodSelector({ method, setMethod, onNext, price, description }) {

  return (
    
    <div className="payment-method-selector">
      <h2>Selecione a forma de pagamento</h2>

      <p><strong>Produto:</strong> {description}</p>
      <p><strong>Preço:</strong> R$ {price.toFixed(2).replace('.', ',')}</p>

      <div className="method-buttons">
        <button
          onClick={() => setMethod('credito')}
          className={method === 'credito' ? 'active' : ''}
        >
          Cartão de Crédito
        </button>
        <button
          onClick={() => setMethod('debito')}
          className={method === 'debito' ? 'active' : ''}
        >
          Cartão de Débito
        </button>
        <button
          onClick={() => setMethod('pix')}
          className={method === 'pix' ? 'active' : ''}
        >
          Pix
        </button>
        <button
          onClick={() => setMethod('boleto')}
          className={method === 'boleto' ? 'active' : ''}
        >
          Boleto
        </button>
      </div>

      <button onClick={onNext} disabled={!method} className="next-button1">Próximo</button>
    </div>
  );
}
