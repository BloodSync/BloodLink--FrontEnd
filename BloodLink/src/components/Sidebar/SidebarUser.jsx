import './SidebarUser.css';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import { showNav } from "../../utils/showNav";
import { MdHome } from "react-icons/md";
import { HiUser, HiOutlineLogin } from "react-icons/hi";
import { GiHeartDrop } from "react-icons/gi";
import { BiSolidShoppingBagAlt } from "react-icons/bi";
import { FaGamepad } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import LinkyFenix from '../../assets/Linky-Fenix.png';
import { useEffect, useState } from 'react';
import { getUsuarioById } from '../../services/usuarioService';
import { useAuth } from '../../context/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();
  const [usuarioData, setUsuarioData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        if (!user?.id) return;
        const data = await getUsuarioById(user.id);
        setUsuarioData(data);
      } catch (error) {
        console.error('Erro ao buscar usuário:', error);
      }
    };

    fetchUsuario();
  }, [user]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      <div className="sidenav">

        <div onClick={showNav} role="button" aria-label="Fechar menu">
          <IoIosArrowBack className="sidenav-close" />
        </div>

        <div className="profile-card">
          <img className="profile" src={LinkyFenix} alt="Perfil do usuário" />

          <p className="username">@{usuarioData?.username || user?.nome || 'Carregando...'}</p>

          <p className="bio">{usuarioData?.bio || 'Bem-vindo(a)!'}</p>

          <div className="level-container">
            <p className="level">Nível {usuarioData?.nivel || 0}</p>
            <p className="level-xp">{usuarioData?.xp || 0} XP</p>
          </div>

          <p className="streak">🔥 Streak {usuarioData?.streak || 0} dias!</p>
        </div>

        {/* Menu de Navegação */}
        <nav className="nav-menu">
          <Link to="/userdashboard" className="nav-item active">
            <MdHome />
            <span className="nav-text">Home</span>
          </Link>
          <Link to="/userprofile" className="nav-item">
            <HiUser />
            <span className="nav-text">Perfil</span>
          </Link>
          <Link to="/userdonate" className="nav-item red">
            <GiHeartDrop />
            <span className="nav-text">Doe Sangue</span>
          </Link>
          <Link to="/userstore" className="nav-item">
            <BiSolidShoppingBagAlt />
            <span className="nav-text">Loja</span>
          </Link>
          <Link to="/vitalink" className="nav-item">
            <FaGamepad />
            <span className="nav-text">Vitalink</span>
          </Link>

          <hr />

          <div className="others-elements">
            <Link to="/settings" className="nav-item">
              <IoMdSettings />
              <span className="nav-text">Configurações</span>
            </Link>
            <button onClick={handleLogout} className="nav-item logout-button">
              <HiOutlineLogin />
              <span className="nav-text">Sair</span>
            </button>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
