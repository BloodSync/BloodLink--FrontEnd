import "./styles.css";
import { Link } from 'react-router';
import { Outlet } from 'react-router'
import { FaX } from 'react-icons/fa6'
import { showNav } from "../../utils/showNav";


function Navbar() {
  return (
    <>
      <div className="sidenav">
        <div onClick={showNav}>
          <FaX color="#fff" className="sidenav-close" />
        </div>
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
          <Link to="/" className="nav-item active">&#127968; Home</Link>
          <Link to="/" className="nav-item">&#128100; Perfil</Link>
          <Link to="/" className="nav-item red">🩸 Doe Sangue</Link>
          <Link to="/" className="nav-item">🛍️ Loja</Link>
          <Link to="/" className="nav-item">🥇 Ranking</Link>
          <Link to="/" className="nav-item">&#128204; Missões</Link>
          <Link to="/" className="nav-item">🏆 Conquistas</Link>
          <hr />
          <Link to="/" className="nav-item">&#128736; Configurações</Link>
          <Link to="/" className="nav-item">⏻ Sair</Link>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
