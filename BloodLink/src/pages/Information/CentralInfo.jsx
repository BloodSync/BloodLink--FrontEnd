import "./CentralInfo.css"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Footer from "../../components/Footer/Footer";

export default function InfoCenter() {
  const [activeSection, setActiveSection] = useState('como');

  const sections = {
    como: {
      title: 'Como funciona a doação?',
      content: (
        <>
          <p>A doação de sangue é um processo rápido, seguro e profundamente humano. Ao chegar em um hemocentro, você será acolhido por uma equipe treinada que explicará cada etapa do procedimento. Em seguida, passará por uma triagem com perguntas sobre sua saúde, estilo de vida e medicações, garantindo segurança tanto para o doador quanto para o receptor.</p>
          <p>Estando tudo certo, a coleta acontece em uma cadeira confortável e leva cerca de 10 a 15 minutos. São retirados aproximadamente 450ml de sangue — uma quantidade que o corpo repõe naturalmente em poucos dias. Durante a coleta, o desconforto é mínimo e você será constantemente monitorado.</p>
          <p>Depois, você poderá descansar em um ambiente calmo, tomar um lanche e retornar às suas atividades normalmente. É importante apenas evitar esforços físicos nas primeiras horas e manter-se hidratado.</p>
          <p>O sangue doado é separado em diferentes componentes (hemácias, plaquetas e plasma), podendo beneficiar até quatro pessoas em diferentes tratamentos — de acidentes graves a pacientes com câncer ou anemia.</p>
          <p>Doar sangue é uma forma poderosa de salvar vidas com um simples gesto. Ao doar, você se torna parte de algo maior, contribuindo para um sistema de saúde mais justo, acessível e humano.</p>
        </>
      ),
    },
    requisitos: {
      title: 'Requisitos para doar',
      content: (
        <>
          <p>Para ser um doador de sangue, é necessário atender a alguns critérios importantes que garantem a segurança do processo:</p>
          <ul>
            <li>Idade entre 16 e 69 anos (menores de 18 com autorização e presença do responsável).</li>
            <li>Peso mínimo de 50kg.</li>
            <li>Estar bem de saúde, sem sintomas de gripe ou resfriado nos últimos 7 dias.</li>
            <li>Ter dormido pelo menos 6 horas na noite anterior.</li>
            <li>Estar alimentado, mas evitar alimentos gordurosos nas últimas 4 horas.</li>
            <li>Não ter ingerido bebida alcoólica nas últimas 12 horas.</li>
            <li>Evitar o uso de certos medicamentos antes da doação (consulte o hemocentro).</li>
            <li>Aguardar 12 meses após tatuagens ou piercings (exceto se fora da língua e região íntima).</li>
            <li>Não ter feito procedimentos endoscópicos nos últimos 6 meses.</li>
            <li>Se teve COVID-19, aguardar 10 dias após a recuperação total.</li>
            <li>Evitar doar após vacinas recentes — por exemplo, 48h após vacina da gripe.</li>
            <li>Consulte o hemocentro sobre restrições em casos de viagens internacionais ou doenças infecciosas.</li>
          </ul>
          <p>Seja sempre honesto na triagem: sua sinceridade pode salvar vidas e manter o sistema de doação eficiente!</p>
        </>
      ),
    },
    desafios: {
      title: 'Desafios e recompensas',
      content: (
        <>
          <p>Doar sangue é mais que um ato de solidariedade — na BloodLink, você também é reconhecido por isso!</p>
          <ul>
            <li><strong>MONs:</strong> a moeda da plataforma, ganha com doações e participação em campanhas.</li>
            <li><strong>Ranking:</strong> compare sua dedicação com outros usuários da comunidade.</li>
            <li><strong>Conquistas:</strong> desbloqueie selos únicos ao bater metas de doação e engajamento.</li>
            <li><strong>Missões diárias:</strong> receba tarefas simples, como divulgar a doação de sangue ou responder quizzes informativos.</li>
          </ul>
          <p>A cada ação, você fortalece a comunidade e inspira outras pessoas a fazerem o bem. A solidariedade também pode ser divertida!</p>
        </>
      ),
    },
  };

  return (
    
    <div className="info-center-bg">
      <div className="page-wrapper">
        <div className="info-container">
          <aside className="info-sidebar">
            <ul>
              <li className={activeSection === 'como' ? 'active-link' : ''} onClick={() => setActiveSection('como')}>Como funciona a doação?</li>
              <li className={activeSection === 'requisitos' ? 'active-link' : ''} onClick={() => setActiveSection('requisitos')}>Requisitos para doar</li>
              <li className={activeSection === 'desafios' ? 'active-link' : ''} onClick={() => setActiveSection('desafios')}>Desafios e recompensas</li>
            </ul>
          </aside>

          <main className="info-content">
            <h2>{sections[activeSection].title}</h2>
            <div className="info-text">{sections[activeSection].content}</div>
            <p className="updated">Escrito em 21 de Junho de 2025 pela equipe BloodLink</p>

          </main>
          
        </div>
      </div>
 
           <Footer />
    </div>
    
  );
}
