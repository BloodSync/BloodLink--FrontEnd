import "./FriendsRank.css"
import avatar from '../../assets/avatar.jpg';

const ranking = [
  { nome: "André", streak: 105 },
  { nome: "Ana Julia", streaks: 98 },
  { nome: "Jonas", streak: 75 },
  { nome: "Ingrid", streak: 62 },
  { nome: "Guilherme", streak: 41 }
];

export default function RankingAmigos() {
  return (
    <> 
         <div className="friends-content-section"> 
       <div className="ranking-amigos-container">
      <div className="barra-titulo-rank">Ranking <span>Amigos</span></div>

      <div className="ranking-list">
        {ranking.map((amigo, index) => (
          <div className="ranking-card" key={index}>
          <div className="ranking-pos-friends">{index + 1}°</div> <img src={avatar} alt={amigo.nome} />
            <div className="ranking-info">
              <strong> {amigo.nome}</strong>
              <p>Streak {amigo.streak} dias</p>
            </div>
          </div>
        ))}
      </div>
    </div>
      </div>
    </>
  );
}