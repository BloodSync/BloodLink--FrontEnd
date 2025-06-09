import './styles.css';
import { FaRegDotCircle } from 'react-icons/fa';
import { AiOutlineQrcode } from 'react-icons/ai';

const donations = [
  {
    status: 'marcada',
    date: '04/08/2025',
    center: 'Hemocentro Unicamp',
  },
  {
    status: 'concluida',
    date: '04/04/2025',
    center: 'Hemocentro Unicamp',
  },
  {
    status: 'nao-concluida',
    date: '03/03/2025',
    center: 'Hemocentro Unicamp',
    reason: 'não pude comparecer.',
  },
  {
    status: 'nao-concluida',
    date: '01/01/2025',
    center: 'Hemocentro Unicamp',
    reason: 'não pude comparecer.',
  },
];

const HistoricoDoacao = () => {
  return (
    <div className="history-container">
      <h2>Histórico de Doações</h2>
      <hr />
      {donations.map((item, index) => (
        <div
          className={`history-card ${item.status}`}
          key={index}
        >
          <div className="left-info">
            <FaRegDotCircle
              className={`dot ${item.status}`}
            />
            <div className="text">
              {item.status === 'marcada' && (
                <p>
                  Doação Marcada Para: <strong>{item.date}</strong>
                </p>
              )}
              {item.status === 'concluida' && (
                <p>
                  Doação Concluída em: <strong>{item.date}</strong>
                </p>
              )}
              {item.status === 'nao-concluida' && (
                <>
                  <p>
                    Doação Não Concluída em: <strong>{item.date}</strong>
                  </p>
                  <p className="reason">
                    Motivo: "{item.reason}"
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="right-info">
            <span className="center-name">{item.center}</span>
            {item.status === 'marcada' && (
              <button className="cancel-btn">Cancelar</button>
            )}
            <AiOutlineQrcode className="qr-icon" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HistoricoDoacao;
