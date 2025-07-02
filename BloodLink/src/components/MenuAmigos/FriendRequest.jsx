import "./FriendsRequest.css"
import AvatarPedidos from '../../assets/Linky-Fenix.png';


export default function PedidosAmizade() {
  return (
    <div className="friends-content-section">
      <div className="friend-request-header">
        <h3>Pedidos de Amizade <span>(1)</span></h3>
      </div>

      <div className="friend-request-card">
        <img src={AvatarPedidos} alt="A imagem apresenta um ícone de perfil em pixel art, destacando a parte superior da personagem Linky. Ela possui pele em tom marrom claro, cabelos pretos com franja lisa e usa uma fita vermelha amarrada na cabeça. Seus óculos retangulares de armação fina emolduram olhos verdes semicerrados, transmitindo uma expressão serena e alegre. Um sorriso discreto revela parte dos dentes superiores, reforçando sua simpatia. Sobre seu ombro direito, repousa uma pequena fênix vermelha, adicionando um toque mágico e carismático à cena." />
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