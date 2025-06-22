import './Settings.css';
import logoImage from '../../assets/logo2.png';
import { LuUsersRound } from "react-icons/lu";
import { PiPaintBrushHouseholdFill } from "react-icons/pi";
import { MdHealthAndSafety } from "react-icons/md";
import { BiSolidHelpCircle } from "react-icons/bi";
import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';

function Configuracao() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleExpanded = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="SettingsBg">
      <div className="Setting-Content">
        <h2 className="settings-title">Configurações</h2>

        <div className="settings-section">
          <div className="settings-header">
            <LuUsersRound className="settings-icon" />
            <span className="settings-text"> Perfil Usuário</span>
          </div>
          <div
            className="settings-small-text"
            onClick={() => toggleExpanded('perfil')}
          >
            Veja e edite suas informações de conta, como nome, tipo sanguíneo e e-mail. <IoIosArrowDown />
          </div>
          <div className={`settings-expanded-content ${expandedSection === 'perfil' ? 'open' : 'closed'}`}>
            <p>Aqui você pode alterar seu nome, atualizar seu e-mail, modificar seu tipo sanguíneo e outras informações pessoais importantes.</p>
          </div>
        </div>

        <div className="settings-section">
          <div className="settings-header">
            <PiPaintBrushHouseholdFill className="settings-icon" />
            <span className="settings-text">Aparência</span>
          </div>
          <div
            className="settings-small-text"
            onClick={() => toggleExpanded('aparencia')}
          >
            Altere o tema da plataforma, entre claro e escuro, além de poder contar com a Acessibilidade Digital. <IoIosArrowDown />
          </div>
          <div className={`settings-expanded-content ${expandedSection === 'aparencia' ? 'open' : 'closed'}`}>
            <p>Escolha seu modo preferido, configure cores e outros aspectos para deixar a BloodLink com a sua cara.</p>
          </div>
        </div>

        <div className="settings-section">
          <div className="settings-header">
            <MdHealthAndSafety className="settings-icon" />
            <span className="settings-text">Privacidade e Segurança</span>
          </div>
          <div
            className="settings-small-text"
            onClick={() => toggleExpanded('privacidade')}
          >
            Leia nossos Termos de Uso e Política de Privacidade. <IoIosArrowDown />
          </div>
          <Link to="/Terms">
            <div className={`settings-expanded-content ${expandedSection === 'privacidade' ? 'open' : 'closed'}`}>
              <p>Garantimos que seus dados estão seguros conosco e explicamos detalhadamente nossas práticas de privacidade.</p>
            </div>
          </Link>
        </div>

        <div className="settings-section">
          <div className="settings-header">
            <BiSolidHelpCircle className="settings-icon" />
            <span className="settings-text">Ajuda e Suporte</span>
          </div>
          <div
            className="settings-expanded-content"
            onClick={() => toggleExpanded('ajuda')}
          >
           <a href="mailto:doei@bloodsync.com">Precisa de ajuda? Entre em contato conosco.</a> 
          </div>
        </div>

        <Link to="/AboutUs">
          <div className="settings-static">
            <img src={logoImage} alt="Logo BloodLink" className="user-logo-settings" />
            <span className="settings-text">Sobre a BloodLink</span>
          </div>
        </Link>
        <button className="logout-btn">Sair da conta</button>
      </div>
    </div>
  );
}

export default Configuracao;
