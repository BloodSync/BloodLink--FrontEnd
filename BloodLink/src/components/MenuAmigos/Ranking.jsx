import AvatarRankGeral from '../../assets/Linky-Fenix.png';

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
  const top3 = rankingGeral.slice(0, 3);
  const restantes = rankingGeral.slice(3);

  return (
    <div className="ranking-amigos-container">
      <div className="barra-titulo-rank">Ranking <span>Geral</span></div>

      {/* Linha dos top 3 */}
      <div className="top3-container">
        {top3.map((user, index) => (
          <div className={`ranking-card top-card place-${index + 1}`} key={index}>
            <div className="ranking-pos-friends1">{index + 1}°</div>
            <img src={AvatarRankGeral} alt={`Avatar de ${user.nome}`} />
            <div className="ranking-info1">
              <strong>{user.nome}</strong>
              <p>Streak {user.streak} dias</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lista restante em colunas de 4 */}
      <div className="ranking-columns">
        {[0, 1, 2].map((colIndex) => (
          <div className="ranking-list" key={colIndex}>
            {restantes.slice(colIndex * 4, colIndex * 4 + 4).map((user, index) => (
              <div className="ranking-card" key={index + colIndex * 4}>
                <div className="ranking-pos-friends">{index + 4 + colIndex * 4}°</div>
                <img src={AvatarRankGeral} alt={`Avatar de ${user.nome}`} />
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
