import './styles.css';
import Logo from '../../../../assets/logo.png'
import { showNav } from '../../../../utils/showNav'

export default function Header() {
  return (
    <header className="header-container">
      <img
          src={Logo}
          alt="BloodLink Logo"
          className="home-logo"
          onClick={showNav}
        />

      <h1 className="header-title">Bem-vindo de volta</h1>
      <p className="header-subtitle strong">Escolha uma data para doar ou veja seu histórico</p>
      <p className='header-subtitle'>Suas escolhas de hoje podem salvar vidas e deixar seu personagem ainda mais forte. Vamos continuar essa jornada juntos? Obtenha mais informações sobre doação de sangue aqui.</p>
    </header>
  );
}
