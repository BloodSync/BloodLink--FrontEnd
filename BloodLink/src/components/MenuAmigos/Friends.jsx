import "./Friends.css"
import AvatarAmigos from '../../assets/Linky-Fenix.png';


const amigos = [
  { nome: "André", streak: 50 },
  { nome: "Ana Julia", streak: 20 },
  { nome: "Jonas", streak: 5 },
  { nome: "Ingrid", streak: 100 },
  { nome: "Guilherme", streak: 10 }
];

export default function ListaAmigos() {
  return (
     <div className="friends-content-section"> 
    <div className="lista-amigos-container">
      <div className="barra-titulo-amigos">Amigos <span>05/100</span></div>

      <div className="friends-grid-user">
        {amigos.map((amigo, index) => (
          <div className="friend-card-user" key={index}>
            <img src={AvatarAmigos} alt={amigo.nome} />
            <div>
              <strong>{amigo.nome}</strong>
              <p>Streak {amigo.streak} dias</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
