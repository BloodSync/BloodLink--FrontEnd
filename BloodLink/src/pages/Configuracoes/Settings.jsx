import './Settings.css'
import logoImage from '../../assets/logo2.png';
import { LuUsersRound } from "react-icons/lu";
import { PiPaintBrushHouseholdFill } from "react-icons/pi";
import { MdHealthAndSafety } from "react-icons/md";
import { BiSolidHelpCircle } from "react-icons/bi";
import { Link } from 'react-router-dom';

function Configuracao() {
  return (
    <>

      <div className="SettingsBg">
        <div className="Setting-Content">

          <h2> Configurações </h2>

          <LuUsersRound />
          <span className="settings-text">Perfil Usuário</span>
          <ul>
            <li>Informação de usuário</li>
          </ul>
          <PiPaintBrushHouseholdFill />
          <span className="settings-text">Aparência</span>
          <ul>
            <li>Tema</li>
          </ul>
          <MdHealthAndSafety />
          <span className="settings-text">Privacidade e Segurança</span>
          <ul>
            <li>Termos de Uso</li>
            <li>Termos de Privacidade</li>
          </ul>
          <BiSolidHelpCircle />
          <span className="settings-text">Ajuda e suporte</span>

          <img src={logoImage} alt="Logo BloodLink" className="user-logo" />
          <span className="settings-text">Sobre a BloodLink</span>
        </div>

      </div>
    </>


  );

}
export default Configuracao;