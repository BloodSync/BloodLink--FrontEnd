import "./CentralInfo.css"
import { Link } from 'react-router-dom';

import { useState } from 'react';

export default function InfoCenter() {
  const [activeSection, setActiveSection] = useState('como');

  const sections = {
    como: {
      title: 'Como funciona a doação?',
      content: (
        <>
          <p>A doação de sangue é um processo simples, rápido e seguro. Você comparece a um hemocentro, passa por uma triagem rápida e, estando tudo certo, realiza a coleta que leva em torno de 10 a 15 minutos.</p>
          <p>Após a doação, você pode descansar, tomar um lanche e seguir seu dia normalmente. Seu corpo repõe o sangue doado em poucos dias!</p>
        </>
      ),
    },
    requisitos: {
      title: 'Requisitos para doar',
      content: (
        <>
          <p>Para doar sangue, você precisa:</p>
          <ul>
            <li>Ter entre 16 e 69 anos (menores de 18 com autorização).</li>
            <li>Pesar mais de 50kg.</li>
            <li>Estar em boas condições de saúde.</li>
            <li>Não estar em jejum e evitar alimentos gordurosos nas 4h anteriores.</li>
            <li>Ter dormido pelo menos 6h na noite anterior.</li>
          </ul>
        </>
      ),
    },
    quem: {
      title: 'Quem precisa de sangue?',
      content: (
        <>
          <p>Milhares de pessoas dependem de transfusões diariamente: vítimas de acidentes, pacientes em cirurgias, com câncer, anemias crônicas ou outras condições graves.</p>
          <p>Uma única doação pode salvar até 4 vidas. Doe e seja o herói anônimo de alguém.</p>
        </>
      ),
    },
    desafios: {
      title: 'Desafios e recompensas',
      content: (
        <>
          <p>Na BloodLink, sua solidariedade também é reconhecida. A cada doação ou ação social você acumula <strong>MONs</strong>, participa de rankings e desbloqueia conquistas exclusivas!</p>
          <p>Além disso, você pode completar <strong>desafios mensais</strong> e participar de campanhas com recompensas temáticas — ajudando ainda mais e se divertindo no processo.</p>
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
              <li className={activeSection === 'quem' ? 'active-link' : ''} onClick={() => setActiveSection('quem')}>Quem precisa de sangue?</li>
              <li className={activeSection === 'desafios' ? 'active-link' : ''} onClick={() => setActiveSection('desafios')}>Desafios e recompensas</li>
            </ul>
          </aside>

          <main className="info-content">
            <h2>{sections[activeSection].title}</h2>
            <div className="info-text">{sections[activeSection].content}</div>
            <p className="updated">Última atualização: 20 de Junho de 2025</p>
          </main>
        </div>
      </div>
    </div>
  );
}