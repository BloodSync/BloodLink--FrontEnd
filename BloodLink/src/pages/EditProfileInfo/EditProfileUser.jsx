import { useState } from 'react';
import './EditProfileUser.css'
import GeneralSection from '../../components/EditProfileUser/GeneralSection.jsx';
import BloomiiSection from '../../components/EditProfileUser/BloomiiSection.jsx';
import AccountSection from '../../components/EditProfileUser/AccountSection.jsx';
import PrivacySection from '../../components/EditProfileUser/PrivacySection.jsx';
import { Link } from 'react-router-dom';
import LinkyFenix from '../../assets/Linky-Fenix.png';


const sections = {
  Geral: <GeneralSection />,
  Bloomii: <BloomiiSection />,
  Conta: <AccountSection />,
  Privacidade: <PrivacySection />
};

export default function EditProfileTab() {
  const [activeTab, setActiveTab] = useState('Geral');

  return (
     <div className='userProfileBg'> 
    <div className="edit-profile">
      <div className="sidebar-edit-profile">
        {Object.keys(sections).map((tab) => (
          <button
            key={tab}
            className={`tab-button-edit ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}

          </button>
          
        ))} 

      </div>

      <div className="editprofile-content">
        <div className="editprofile-header">
          <img src={LinkyFenix} alt="A imagem apresenta um ícone de perfil em pixel art, destacando a parte superior da personagem Linky. Ela possui pele em tom marrom claro, cabelos pretos com franja lisa e usa uma fita vermelha amarrada na cabeça. Seus óculos retangulares de armação fina emolduram olhos verdes semicerrados, transmitindo uma expressão serena e alegre. Um sorriso discreto revela parte dos dentes superiores, reforçando sua simpatia. Sobre seu ombro direito, repousa uma pequena fênix vermelha, adicionando um toque mágico e carismático à cena." className="avatar" />
          <h2 className="editprofile-title">Usuário &gt;&gt; </h2> <p className="editprofile-txt"> Editar perfil </p>
        </div>
        {sections[activeTab]}
      </div>
    </div>
    </div>
  );
}
