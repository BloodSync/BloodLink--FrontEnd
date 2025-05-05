import React from 'react';
import './UserProfile.css';

function UserProfile() {
  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="profile-card">
          <p className="username"><img className= "perfil" src="/src/avatar.jpg" alt="Ícone do perfil"/> @Usuário100 &#128394;</p>
          <p className="bio"> Nem todos os segredos estão escondidos. Alguns apenas sabem onde não olhar. </p>

          <div className="level-container">
          <p className="level">Nível 19</p>
          <p className="level-percent">1800/2500</p>
          </div>
        
          <div className="xp-bar">
            <div className="xp-fill"></div>
          </div>
          <p className="streak">🔥 Streak 40 dias!</p>
        </div>

        <nav className="nav-menu">
          <a href="#" className="nav-item active">&#127968; Home</a>
          <a href="#" className="nav-item">&#128100; Perfil</a>
          <a href="#" className="nav-item red">🩸 Doe Sangue</a>
          <a href="#" className="nav-item">🛍️ Loja</a>
          <a href="#" className="nav-item">🥇 Ranking</a>
          <a href="#" className="nav-item">&#128204; Missões</a>
          <a href="#" className="nav-item">🏆 Conquistas</a>
          <hr />
          <a href="#" className="nav-item">&#128736; Configurações</a>
          <a href="#" className="nav-item">⏻ Sair</a>
        </nav>
      </aside>

      {/* Conteúdo principal */}
      <main className="main-content">
        <section className="goal-box">
          <h2>++ Minhas Metas de Vida e Saúde</h2>
          <p>
            Aqui você pode acompanhar suas metas pessoais relacionadas à saúde, bem-estar e doações...
          </p>
          <img className= "perfil" src="/src/avatar.jpg" alt="Ícone do perfil"/>
        </section>

        <div className="profile-info">
          
          <div className="avatar-box">
          <p className="avatar-edit"> &#128396;</p>
            <img src="/src/chibi.png" alt="Avatar" className="avatar" />
          </div>

          <div className="info-box">
            <div>
              <p className="label">Tipo Sanguíneo</p>
              <p className="highlight">A+</p>
            </div>
            <hr/>
            <div>
              <p className="label">Amigos</p>
              <p className="link">+Adicionar amigos</p>
              <p className="link">+Convidar amigos</p>
            </div>
          </div>
        </div>

        <section className="bio-box">
          
          <h3>&#128394; Usuário<span>@usuario100</span> </h3>
          <p className="friends-count"> | Doador Astuto </p>
          <p className="bio-text">Nem todos os segredos estão escondidos. Alguns apenas sabem onde não olhar.</p>
          <hr/>
          <p className="friends-count"> 4 amigos </p>
          <p className="friends-count"> Sua posição no rank é 120° </p>
          
        </section>

        <section>

        </section>
      </main>
    </div>
  );
}

export default UserProfile;
