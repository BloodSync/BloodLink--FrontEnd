import './AccountSection.css';
import { FaFire, FaUserFriends } from 'react-icons/fa';
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import minhaFoto from '../../assets/avatar.jpg';

export default function AccountSection() {
  return (
    <div className="section-account-section">

      <div className="section-edit-profile">
        <h3>Informações da Conta</h3>
        <p>Aqui você encontra um resumo das suas estatísticas pessoais dentro da BloodLink.
          Veja tudo o que você conquistou desde que começou sua jornada: a quantidade total de MONs acumuladas, o número de amigos conectados na plataforma e o seu maior streak — ou seja, a sequência mais longa de dias consecutivos em que você interagiu, participou ou doou.

          Esta seção é o reflexo do seu impacto na comunidade. Continue ativo, compartilhe, doe e acompanhe sua evolução!</p>
      </div>

      <div className="account-banner">
        <div className="user-info">
          <img src={minhaFoto} alt="Avatar do usuário" className="user-avatar" />
          <div>
            <h3>@Usuario</h3>
            <p>| Lobo Solitário</p>
          </div>
        </div>

        <div className="stats">
          <div className="stat-box">
            <RiMoneyRupeeCircleFill className="stat-icon" />
            <div>
              <span className="stat-value">2.340</span>
              <span className="stat-label">MON</span>
            </div>
          </div>

          <div className="stat-box">
            <FaUserFriends className="stat-icon" />
            <div>
              <span className="stat-value">05</span>
              <span className="stat-label">Amigos</span>
            </div>
          </div>

          <div className="stat-box">
            <FaFire className="stat-icon" />
            <div>
              <span className="stat-value">12</span>
              <span className="stat-label">Streak</span>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
