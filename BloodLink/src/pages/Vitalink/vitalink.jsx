import './vitalink.css'
import React from 'react';
import minhaFoto from '../../assets/avatar.jpg';
import { FiPlusCircle } from "react-icons/fi";
import { Link } from 'react-router-dom';

function Vitalink() {
  return (
    <>
      <div className="VitalinkBg">
        <div className="vitalink-container">
          <div className="vitalink-header">
            <h1 className="vitalink-title">Vitalink</h1>
            <div className="vitalink-tabs">
              <span className="tab">Conquistas</span>
              <span className="nav-divider">|</span>
              <span className="tab">Missões</span>
              <span className="nav-divider">|</span>
              <span className="tab">Rank</span>
            </div>
          </div>

          <div className="vitalink-content">
            <div className="vitalink-left">
              <div className="atividade-section">
                <h2 className="atividade-title">Atividade</h2>

                <div className="atividade-item">
                  <p className="atividade-data">Hoje</p>
                  <div className="atividade-linha">
                    <img src={minhaFoto} alt="profile" className="atividade-avatar" />
                    <p><span className="azul">Usuário</span> completou suas missões diárias</p>
                  </div>
                </div>

                <div className="atividade-item">
                  <p className="atividade-data">13 de junho</p>
                  <div className="atividade-linha">
                    <img src={minhaFoto} alt="profile" className="atividade-avatar" />
                    <p><span className="azul">Usuário</span> e <span className="azul">Jonas</span> agora são amigos.</p>
                  </div>
                </div>

                <a className="ver-mais" href="#">Ver mais atividades</a>
              </div>

              <div className="missoes-tabs">
                <button className="m-tab">Todas as missões</button>
                <button className="m-tab">Missões concluídas</button>
              </div>

              <div className="missoes-lista">
                {[1, 2].map((_, i) => (
                  <div key={i} className="missao-card">
                    <div className="missao-img-wrapper">
                      <img src={minhaFoto} alt="missao" className="missao-img" />
                      <div className="missao-autor">
                        <img src={minhaFoto} alt="autor" className="missao-avatar" />
                        <span className="proposto">PROPOSTO POR LINKY</span>
                      </div>
                    </div>

                    <div className="missao-info">
                      <h3 className="missao-titulo">CORAÇÃO ATENTO</h3>
                      <p className="missao-desc">Faça sua primeira doação.</p>

                      <div className="missao-recompensas">
                        <p className="missao-rewards">+10 de força</p>
                        <p className="missao-rewards">+20 de vitalidade</p>
                        <p className="missao-rewards">+20 de Influência</p>
                      </div>

                      <p className="missao-selo">Missão permanente</p>
                      <hr />
                      <button className="missao-btn">Aceitar missão</button>
                    </div>
                  </div>
                ))}
              </div>

            </div>
            <div className="vitalink-right">
              <div className="conquistas-box-vitalink">
                <div className="conquista-txt">
                  <h3>Conquistas <span className="qtd-conquistas">06</span></h3>
                  <hr />
                </div>

                <div className="conquistas-grid-vitalink">
                  {[...Array(6)].map((_, i) => (
                    <img key={i} src={minhaFoto} alt="Conquistas" className="conquista-img" />
                  ))}
                </div>
             <Link to="/Achievements"> 
                <div className="ver-conquistas">Ver todas as conquistas</div>
                </Link>
              </div>

              <div className="metas-box">
                <h3>Minhas Metas</h3>
                <button className="nova-meta-btn">

                  <FiPlusCircle />

                </button>
              </div>
              <Link to="/FriendsList">

                <div className="ranking-box">

                  <h3 className="ranking-title">Ranking</h3>

                  <div className="ranking-content">
                    <div className="ranking-item">
                      <span className="rank-pos">1º</span>
                      <img src={minhaFoto} alt="avatar" className="ranking-avatar1" />

                      <div className="ranking-info">
                        <span className="ranking-nome">Ingrid</span>
                        <span className="ranking-xp">2500 XP</span>
                      </div>
                    </div>
                    <div className="ranking-item">
                      <span className="rank-pos">2º</span>
                      <img src={minhaFoto} alt="avatar" className="ranking-avatar1" />
                      <div className="ranking-info">
                        <span className="ranking-nome">Jonas</span>
                        <span className="ranking-xp">2000 XP</span>
                      </div>

                    </div>

                  </div>

                </div>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vitalink;