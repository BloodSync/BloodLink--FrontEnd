import './styles.css';

export default function SlideTabs({ abaAtual, setAbaAtual }) {
  return (
    <div className="slide-tabs">
      <button
        className={`tab-button ${abaAtual === 'doacao' ? 'active' : ''}`}
        onClick={() => setAbaAtual('doacao')}
      >
        Doação
      </button>
      <button
        className={`tab-button ${abaAtual === 'historico' ? 'active' : ''}`}
        onClick={() => setAbaAtual('historico')}
      >
        Histórico
      </button>
    </div>
  );
}
