import './styles.css';

export default function ConfirmarModal({ isOpen, onClose, onConfirm, data, hemocentro }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Confirmar Doação</h2>
        <p><strong>Data selecionada:</strong> {data?.toLocaleDateString('pt-BR')}</p>
        <p><strong>Hemocentro:</strong> {hemocentro?.nome}</p>
        {hemocentro?.endereco && <p><strong>Endereço:</strong> {hemocentro.endereco}</p>}
        {hemocentro?.tiposCriticos && (
          <p><strong>Tipos críticos:</strong> {hemocentro.tiposCriticos.join(', ')}</p>
        )}

        <div className="modal-buttons">
          <button className="btn cancelar" onClick={onClose}>Cancelar</button>
          <button className="btn confirmar" onClick={onConfirm}>Confirmar</button>
        </div>
      </div>
    </div>
  );
}
