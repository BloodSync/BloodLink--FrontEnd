
import "./AddFriend.css"

export default function AdicionarAmigos() {
  return (
    <div className="friends-content-section">
      <h3>Adicionar Amigos</h3>
      <p>Adicione amigos por código ou username.</p>
      <input type="text" placeholder="Código ou username" className="input-friend" />
      <button className="btn-add-friend">Adicionar</button>
    </div>
  );
}
