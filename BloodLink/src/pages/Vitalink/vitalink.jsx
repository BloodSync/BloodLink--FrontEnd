import './vitalink.css';
import React, { useState } from 'react';
import LinkyFenix from '../../assets/Linky-Fenix.png';
import Linky from '../../assets/Linky-Mission.png';
import MissionBg from '../../assets/Missao-Banner.jpg';
import Icon from '../../assets/Conquista.png';
import { Link } from 'react-router-dom';
import { FiPlusCircle, FiTrash2, FiCheckCircle } from "react-icons/fi";

const missoes = [
  {
    titulo: "BLOODLINKER",
    descricao: "Faça sua primeira doação.",
    forca: 10,
    vitalidade: 20,
    influencia: 20,
    mon:200,
    selo: "Missão permanente",
  },
  {
    titulo: "NO ESTILO",
    descricao: "Personalize seu Bloomii.",
    forca: 5,
    vitalidade: 10,
    influencia: 40,
     mon:200,
    selo: "Missão semanal",
  },
  {
    titulo: "SEM LIMITES",
    descricao: "Consiga 10 Conquistas.",
    forca: 2,
    vitalidade: 5,
    influencia: 25,
     mon:200,
    selo: "Missão Permanente",
  },
];

function Vitalink() {
  const [mostrarMaisAtividades, setMostrarMaisAtividades] = useState(false);
  const [metas, setMetas] = useState([]);
  const [novaMeta, setNovaMeta] = useState('');
  const [subTab, setSubTab] = useState('todas');

  const atividadesExtras = [
    { texto: 'Usuário', data: '12 de junho' },
    { texto: 'Usuário', data: '11 de junho' },
  ];

  const adicionarMeta = () => {
    if (novaMeta.trim() !== '') {
      setMetas([...metas, { texto: novaMeta, concluida: false }]);
      setNovaMeta('');
    }
  };
  const removerMeta = (indexRemover) => {
    setMetas(metas.filter((_, index) => index !== indexRemover));
  };
  const alternarMetaConcluida = (index) => {
    const novasMetas = [...metas];
    novasMetas[index].concluida = !novasMetas[index].concluida;
    setMetas(novasMetas);
  };


  return (
    <div className="VitalinkBg">

      <div className="vitalink-header">
        <h1 className="vitalink-title">Vitalink</h1>
        <div className="vitalink-tabs">

        </div>
      </div>
      <div className="vitalink-container">
        <div className="vitalink-content">
          <div className="vitalink-left">
            {/* Atividades */}
            <div className="atividade-section">
              <h2 className="atividade-title">Atividade</h2>
              <div className="atividade-item">
                <p className="atividade-data">Hoje</p>
                <div className="atividade-linha">
                  <img src={LinkyFenix} alt="profile" className="atividade-avatar" />
                  <p><span className="azul">Usuário</span> completou suas missões diárias!</p>
                </div>
              </div>

              <div className="atividade-item">
                <p className="atividade-data">13 de junho</p>
                <div className="atividade-linha">
                  <img src={LinkyFenix} alt="profile" className="atividade-avatar" />
                  <p><span className="azul">Usuário</span> e <span className="azul">Jonas</span> agora são amigos.</p>
                </div>
              </div>

              {mostrarMaisAtividades && atividadesExtras.map((a, i) => (
                <div className="atividade-item" key={i}>
                  <p className="atividade-data">{a.data}</p>
                  <div className="atividade-linha">
                    <img src={minhaFoto} alt="profile" className="atividade-avatar" />
                    <p><span className="azul">{a.texto}</span> subiu de nível!</p>
                  </div>
                </div>
              ))}

              <a className="ver-mais" onClick={() => setMostrarMaisAtividades(!mostrarMaisAtividades)}>
                {mostrarMaisAtividades ? 'Ver menos' : 'Ver mais atividades'}
              </a>
            </div>

            {/* Missões */}
            <div className="missoes-tabs">
              <button className={`m-tab ${subTab === 'todas' ? 'ativo' : ''}`} onClick={() => setSubTab('todas')}>Todas as missões</button>
              <button className={`m-tab ${subTab === 'concluidas' ? 'ativo' : ''}`} onClick={() => setSubTab('concluidas')}>Missões concluídas</button>
            </div>

            <div className="missoes-lista">
              {(subTab === 'todas' ? missoes : [missoes[1]]).map((missao, i) => (
                <div key={i} className="missao-card">
                  <div className="missao-img-wrapper">
                    <img src={MissionBg} alt="missao" className="missao-img" />
                    <div className="missao-autor">
                      <img src={Linky} alt="autor" className="missao-avatar" />
                      <span className="proposto">PROPOSTO POR LINKY</span>
                    </div>
                  </div>
                  <div className="missao-info">
                    <h3 className="missao-titulo">{missao.titulo}</h3>
                    <p className="missao-desc">{missao.descricao}</p>
                    <div className="missao-recompensas">
                      <p className="missao-rewards">+{missao.forca} de força</p>
                      <p className="missao-rewards">+{missao.vitalidade} de vitalidade</p>
                      <p className="missao-rewards">+{missao.influencia} de Influência</p>
                      <p className="missao-rewards">+{missao.mon} Mon </p>
                    </div>
                    <p className="missao-selo">{missao.selo}</p>
                    <hr />
                    <button className="missao-btn">Aceitar missão</button>
                  </div>
                </div>
              ))}
            </div>

          </div>

          <div className="vitalink-right">
            {/* Conquistas */}
            <div className="conquistas-box-vitalink">
              <div className="conquista-txt">
                <h3>Conquistas <span className="qtd-conquistas">06</span></h3>
                <hr />
              </div>
              <div className="conquistas-grid-vitalink">
                {[...Array(6)].map((_, i) => (
                  <img key={i} src={Icon} alt="Conquistas" className="conquista-img" />
                ))}
              </div>
              <Link to="/Achievements">
                <div className="ver-conquistas">Ver todas as conquistas</div>
              </Link>
            </div>

            {/* Metas */}
            <div className="metas-box">
              <h3>Minhas Metas</h3>

              <div className="metas-form">
                <input
                  type="text"
                  value={novaMeta}
                  onChange={(e) => setNovaMeta(e.target.value)}
                  placeholder="Digite aqui..."
                  className="input-metas"
                />
                <button className="nova-meta-btn" onClick={adicionarMeta}>
                  <FiPlusCircle size={24} />
                </button>
              </div>

              <ul className="metas-lista">
                {metas.map((meta, index) => (
                  <li key={index} className="meta-item">
                    <span className={meta.concluida ? 'meta-texto concluida' : 'meta-texto'}>
                      {meta.texto}
                    </span>
                    <div className="meta-botoes">
                      <button
                        className="concluir-meta-btn"
                        onClick={() => alternarMetaConcluida(index)}
                        aria-label="Concluir meta"
                      >
                        <FiCheckCircle
                          size={18}
                          className={meta.concluida ? 'icone verde' : 'icone cinza'}
                        />
                      </button>
                      <button
                        className="remover-meta-btn"
                        onClick={() => removerMeta(index)}
                        aria-label="Remover meta"
                      >
                        <FiTrash2 size={18} className="icone vermelho" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ranking */}
            <Link to="/FriendsList">
              <div className="ranking-box-vitalink">
                <h3 className="ranking-title-vitalink">Ranking</h3>
                <div className="ranking-content-vitalink">
                  <div className="ranking-item-vitalink">
                    <span className="rank-pos-vitalink">1º</span>
                    <img src={LinkyFenix} alt="avatar" className="ranking-avatar-vitalink" />
                    <div className="ranking-info-vitalink">
                      <span className="ranking-nome-vitalink">Ingrid</span>
                      <span className="ranking-xp-vitalink">2500 XP</span>
                    </div>
                  </div>
                  <div className="ranking-item-vitalink">
                    <span className="rank-pos-vitalink">2º</span>
                    <img src={LinkyFenix} alt="avatar" className="ranking-avatar-vitalink" />
                    <div className="ranking-info-vitalink">
                      <span className="ranking-nome-vitalink">Jonas</span>
                      <span className="ranking-xp-vitalink">2000 XP</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vitalink;
