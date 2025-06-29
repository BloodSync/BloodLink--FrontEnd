import "./FriendsRequest.css"
import AvatarPedidos from '../../assets/Linky-Fenix.png';


export default function PedidosAmizade() {
  return (
    <div className="friends-content-section">
      <div className="friend-request-header">
        <h3>Pedidos de Amizade <span>(1)</span></h3>
      </div>

      <div className="friend-request-card">
        <img src={AvatarPedidos} alt="Avatar de Nicolas" />
        <div className="friend-request-info">
          <strong>Nicolas</strong>
          <p>Quer ser seu amigo!</p>
        </div>
        <div className="friend-request-actions">
          <button className="accept-btn">Aceitar</button>
          <button className="decline-btn">Recusar</button>
        </div>
      </div>
    </div>
  );
}