import avatar from '../../assets/avatar.jpg';

const rankingGeral = [
  { nome: "Alice", streak: 132 },
  { nome: "Bruno", streak: 120 },
  { nome: "Camila", streak: 117 },
  { nome: "Diego", streak: 112 },
  { nome: "Eduarda", streak: 105 },
  { nome: "Fábio", streak: 99 },
  { nome: "Gabriela", streak: 95 },
  { nome: "Henrique", streak: 90 },
  { nome: "Isabela", streak: 85 },
  { nome: "João", streak: 79 },
  { nome: "Karina", streak: 75 },
  { nome: "Lucas", streak: 72 },
  { nome: "Mariana", streak: 68 },
  { nome: "Nicolas", streak: 63 },
  { nome: "Otávio", streak: 60 }
];

export default function RankingGeral() {
  return (
    <div className="ranking-amigos-container">
      <div className="barra-titulo-rank">Ranking <span>Geral</span></div>

      <div className="ranking-columns">
        {[0, 1, 2].map((colIndex) => (
          <div className="ranking-list" key={colIndex}>
            {rankingGeral.slice(colIndex * 5, colIndex * 5 + 5).map((user, index) => (
              <div className="ranking-card" key={index + colIndex * 5}>
                <div className="ranking-pos-friends">{index + 1 + colIndex * 5}°</div>
                <img src={avatar} alt={`Avatar de ${user.nome}`} />
                <div className="ranking-info">
                  <strong>{user.nome}</strong>
                  <p>Streak {user.streak} dias</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
