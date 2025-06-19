
import './SidebarUser.css';
import { Link, Outlet } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { showNav } from "../../utils/showNav";
import { MdHome } from "react-icons/md";
import { HiUser } from "react-icons/hi";
import { GiHeartDrop } from "react-icons/gi";
import { BiSolidShoppingBagAlt } from "react-icons/bi";
import { FaGamepad } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { HiOutlineLogin } from "react-icons/hi";

function Navbar() {
  return (
    <>
      <div className="sidenav">

        <div onClick={showNav} role="button" aria-label="Fechar menu">
          <IoIosArrowBack className="sidenav-close" />
        </div>
        <div className="profile-card">
          <img className="profile" src="/src/avatar.jpg" alt="Ícone do perfil" />
          <p className="username">
            @Usuario
          </p>
          <p className="bio">
            Nem todos os segredos estão escondidos. Alguns apenas sabem onde não olhar.
          </p>

          <div className="level-container">
            <p className="level">Nível 19</p>
            <p className="level-xp"> 800 XP </p>
          </div>

          <p className="streak">🔥 Streak 40 dias!</p>
        </div>

        {/* Menu de Navegação */}
        <nav className="nav-menu">
          <Link to="UserDashboard" className="nav-item active">
            <MdHome />
            <span className="nav-text">Home</span>
          </Link>
          <Link to="UserProfile" className="nav-item">
            <HiUser />
            <span className="nav-text">Perfil</span>
          </Link>
          <Link to="UserDonate" className="nav-item red">
            <GiHeartDrop />
            <span className="nav-text">Doe Sangue</span>
          </Link>
          <Link to="UserStore" className="nav-item">
            <BiSolidShoppingBagAlt />
            <span className="nav-text">Loja</span>
          </Link>
          <Link to="Vitalink" className="nav-item">
            <FaGamepad />
            <span className="nav-text">Vitalink</span>
          </Link>

          <hr />

          <div className="others-elements">
            <Link to="Settings" className="nav-item">
              <IoMdSettings />
              <span className="nav-text">Configurações</span>
            </Link>
            <Link to="/" className="nav-item">
              <HiOutlineLogin />
              <span className="nav-text">Sair</span>
            </Link>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}
export default Navbar;

