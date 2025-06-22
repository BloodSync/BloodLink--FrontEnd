import "./Conquistas.css";
import ConquistaCard from "../../components/ConquistasC/ConquistasC";
import Icon from '../../assets/avatar.jpg';

export default function Conquistas() {
  const conquistasObtidas = [
    {
      icon: Icon,
      title: "Primeira doação!",
      description: "Doou sangue pela primeira vez dentro da BloodLink. Parabéns por salvar sua primeira vida!",
      date: "Obteve em: 21/06/2025",
      unlocked: true,
    },
    {
      icon: Icon,
      title: "Linkem?",
      description: "Pediu ajuda a Linky 10 vezes.",
      date: "Obteve em: 28/06/2025",
      unlocked: true,
    },
    {
      icon: Icon,
      title: "Mimimei",
      description: "Usou um set de roupas especiais no Bloomii.",
      date: "Obteve em: 04/07/2025",
      unlocked: true,
    },
       {
      icon: Icon,
      title: "EXXXXXperiente",
      description: "Adquriu 1800XP no jogo: Linky a caminho!",
      date: "Obteve em: 04/07/2025",
      unlocked: true,
    },
       {
      icon: Icon,
      title: "Pode isso?",
      description: "Dev preguiçoso ficou sem ideia de conquista e deu essa conquista de graça, no precinho. Ele será encontrado bem e com saúde em sua casa.",
      date: "Obteve em: 04/07/2025",
      unlocked: true,
    },
         {
      icon: Icon,
      title: "Pequeno Chefão",
      description: "Gastou 9999 MON. Seu Bloomii merece essa dedicação.",
      date: "Obteve em: 04/07/2025",
      unlocked: true,
    },
  ];

  const conquistasBloqueadas = [
    {
      icon: Icon,
      title: "Top 1 from Brazil",
      description: "Conseguiu a primeira posição no rank! boa, você será lembrado como lenda.",
      unlocked: false,
    },
    {
      icon: Icon,
      title: "Agora você me vê...",
      description: "Participou de uma campanha da BloodLink. Maneirasso.",
      unlocked: false,
    },
    {
      icon: Icon,
      title: "De hoje tá pago",
      description: "Respondeu o questionário e viu se pode ou não doar.",
      unlocked: false,
    },
       {
      icon: Icon,
      title: "Celebridadezinha",
      description: "Fez 100 amigos?! Como isso...",
      unlocked: false,
    },
           {
      icon: Icon,
      title: "Dialogo",
      description: "Reportou um bug para a Equipe BloodLink. Seremos gentis com o desenvolvedor que aprontou isso. Hehe.",
      unlocked: false,
    },
  ];

  return (
    <div className="conquistas-wrapper">
      <div className="conquistas-header">
        <img src={Icon} alt="Avatar do usuário" />
        <h2>Usuário &gt;&gt; Conquistas</h2>
      </div>

      <div className="user-nivel">
        <p>Nível 19 - Lobo Solitário</p>
      </div>

      <h3 className="section-title">Conquistas Obtidas 6/25</h3>
      <div className="conquistas-grid">
        {conquistasObtidas.map((c, i) => (
          <ConquistaCard key={i} {...c} />
        ))}
      </div>

      <hr className="divider" />
      <h3 className="section-title">Conquistas Bloqueadas</h3>
      <div className="conquistas-grid">
        {conquistasBloqueadas.map((c, i) => (
          <ConquistaCard key={i} {...c} />
        ))}
      </div>
    </div>
  );
}
