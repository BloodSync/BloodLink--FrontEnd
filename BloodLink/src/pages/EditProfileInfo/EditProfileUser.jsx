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
          <img src={LinkyFenix} className="avatar" />
          <h2 className="editprofile-title">Usuário &gt;&gt; </h2> <p className="editprofile-txt"> Editar perfil </p>
        </div>
        {sections[activeTab]}
      </div>
    </div>
    </div>
  );
}
