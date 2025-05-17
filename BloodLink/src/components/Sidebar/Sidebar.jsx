import "./Sidebar.css";

function Navbar({ show }) {
  return (
    <div className={show ? "sidenav active" : "sidenav"}>
      {/* Card de Perfil */}
      <div className="profile-card">
        <p className="username">
          <img className="perfil" src="/src/avatar.jpg" alt="Ícone do perfil" /> @Usuário100 &#128394;
        </p>
        <p className="bio">
          Nem todos os segredos estão escondidos. Alguns apenas sabem onde não olhar.
        </p>

        <div className="level-container">
          <p className="level">Nível 19</p>
          <p className="level-percent">1800/2500</p>
        </div>

        <div className="xp-bar">
          <div className="xp-fill"></div>
        </div>
        <p className="streak">🔥 Streak 40 dias!</p>
      </div>

      {/* Menu de Navegação */}
      <nav className="nav-menu">
        <a href="/" className="nav-item active">&#127968; Home</a>
        <a href="/" className="nav-item">&#128100; Perfil</a>
        <a href="/" className="nav-item red">🩸 Doe Sangue</a>
        <a href="/" className="nav-item">🛍️ Loja</a>
        <a href="/" className="nav-item">🥇 Ranking</a>
        <a href="/" className="nav-item">&#128204; Missões</a>
        <a href="/" className="nav-item">🏆 Conquistas</a>
        <hr />
        <a href="/" className="nav-item">&#128736; Configurações</a>
        <a href="/" className="nav-item">⏻ Sair</a>
      </nav>
    </div>
  );
}

export default Navbar;
