import Navbar from '../../components/Sidebar/SidebarUser';
import './UserDashboard.css'
import { showNav } from '../../utils/showNav'
import IconLoja from '../../assets/Dashboard-Loja.png';
import CardCarousel from '../../components/CardCarousel/Card';
import logoImageWhite from '../../assets/logo-white.png';
import { Link } from 'react-router-dom'; //router

function Home1() {
  return (
    <>
      <div className="userDashboard-container">
        <div className="main-card">
          <div className="main-card-text">
            <h4>BloodLink</h4>
            <p>Suas ações de hoje podem mudar uma vida.</p>
            <Link to="/hemocentrosPerto">
              <button>Hemocentros perto de você</button>
            </Link>
          </div>
          <img src={logoImageWhite} alt="A imagem mostra o logotipo da BloodLink estilizado de uma fênix na cor branca, em um fundo vermelho sólido. A fênix está em perfil, voltada para a direita, com suas asas amplas e uma cauda longa e curvilínea que se estende para cima e para trás, lembrando chamas ou um movimento ascendente. O design é limpo e moderno, transmitindo uma sensação de ascensão, renovação e poder." className="logo-white" />
        </div>

        <h2 className="Dashboard-title">Conteúdo para você</h2>

        <CardCarousel />

      </div>


      <div className="Dashboard-section">
        <div className="top-row">
          <Link to="/userStore" >
            <img src={IconLoja} alt="Arte em pixel de um dos Bloomis da equipe! de cabelo preto longo e marinha chiquinha, ela possui um óculos redendo , pele morena e um sorriso. O fundo dessa imagem é vermelho."
              className="bloomii-img" />
          </Link>
          <h2 className="main-text">Visite a loja e personalize seu Bloomii do seu jeitinho.</h2>
        </div>
      </div>
    </>
  );
}

export default Home1;