import './perfilUsuario.css';
import minhaFoto from '../../assets/avatar.jpg';
import { BsDropletFill } from "react-icons/bs";
import { MdStar } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { PiCloverFill } from "react-icons/pi";
import meuBloomii from '../../assets/Bloomii-Setgamer.gif';
import { BsPencilFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

function UserProfile() {
  return (
    <>
      <div className='userProfileBg'>
        <div className="userprofile-page">
          <div className="usercover-photo">
            <h2>@Usuário</h2>

            <div className="userprofile-bottom-line">
              <div className="userprofile-info">
                <p className="userprofile-title">| Lobo Solitário</p>
                <p className="userprofile-bio">
                  Nem todos os segredos estão escondidos. Alguns apenas sabem onde não olhar.
                </p>
              </div>

              <div className="userprofile-type">
                <p>Tipo sanguíneo</p>
                <strong>A+</strong>
              </div>

              <div className="userprofile-avatarpic">
                <img src={minhaFoto} alt="Foto de perfil" className="userprofile-pic" />
                <p className="userprofile-usernamep">Usuário</p>
              </div>
            </div>

            <button className="userprofile-editbutton">Editar perfil</button>
          </div>

          <div className="userprofile-content">
            <div className="userprofile-bloomii-card">
              <div className="bloomii-content">
                <div className="bloomii-text">
                  <div className="bloomii-header">
                    <h3>Bloomii</h3>
                      <Link to="/personalizarBloomii"> 
                      <BsPencilFill /> </Link>
                  </div>
                  <p>Personalize seu Bloomii e veja seus status.</p>
                  <ul>
                    <li>+ Vitalidade 10</li>
                    <li>+ Sabedoria 10</li>
                    <li>+ Influência 50</li>
                  </ul>
                </div>
                <div className="bloomii-sprite-area">
                  <img src={meuBloomii} alt="Bloomii" className="userprofile-bloomii-sprite" />
                </div>
              </div>
            </div>


            <div className="userprofile-ranking-card">
              <h3>
                Ranking <span className="ranking-pos">› 103º</span>
              </h3>

              <h3>
                Conquistas <span className="ranking-pos"> 20</span>
              </h3>

              <ul className="userprofile-achievements" >
                <li><img src={minhaFoto} alt="" className="achievements-icon" /></li>
                <li><img src={minhaFoto} alt="" className="achievements-icon" /></li>
                <li><img src={minhaFoto} alt="" className="achievements-icon" /></li>
                <li><img src={minhaFoto} alt="" className="achievements-icon" /></li>
                <li><img src={minhaFoto} alt="" className="achievements-icon" /></li>
              </ul>

              <h3>
                Amigos <span className="ranking-pos"> 05 </span>
              </h3>

              <ul className="userprofile-friends-list">
                <li>
                  <img src={minhaFoto} alt="" />
                  <div>
                    <p>Kadu</p>
                    <p>Streak 50 dias</p>
                  </div>
                </li>
                <li>
                  <img src={minhaFoto} alt="" />
                  <div>
                    <p>Guilherme</p>
                    <p>Streak 10 dias</p>
                  </div>
                </li>
                <li>
                  <img src={minhaFoto} alt="" />
                  <div>
                    <p>Sergio</p>
                    <p>Streak 5 dias</p>
                  </div>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
