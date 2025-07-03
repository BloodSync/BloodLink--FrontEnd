import './modalConfirm.css';
import logo from '../../../../assets/logo.png';
import ImageModal from '../../../../assets/ModalImage.png';

export default function ConfirmarModal({ isOpen, onClose, onConfirm, data, hemocentro, horario = "09:00" }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content modal-flex">
        <button className="close-button" onClick={onClose}>×</button>

        <div className="modal-image-container">
          <img src={ImageModal} alt="Ilustração doação" className="modal-img" />
        </div>

        <div className="modal-info">
          <img src={logo} alt="BloodLink" className="logo" />

          <h2>Confirmar Agendamento</h2>

          <div className="info-box">
            <label>Data e Horário</label>
            <div className="info-card">
              <span>{data?.toLocaleDateString('pt-BR', {
                weekday: 'long',
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
              })}</span>
              <span className="horario">Horário: {horario}</span>
            </div>
          </div>

          <div className="info-box">
            <label>Local de Doação</label>
            <div className="info-card">
              {hemocentro?.nome} <span className="pin">📍</span>
            </div>
          </div>

          {hemocentro?.endereco && (
            <p className="extra-info"><strong>Endereço:</strong> {hemocentro.endereco}</p>
          )}

          {hemocentro?.tiposCriticos && (
            <p className="extra-info"><strong>Tipos críticos:</strong> {hemocentro.tiposCriticos.join(', ')}</p>
          )}


          <div className="modal-buttons">
            <button className="btn confirmar" onClick={onConfirm}>Tem certeza que deseja Cancelar?</button>
          </div>
        </div>
      </div>
    </div>
  );
}
