// import { Link } from 'react-router-dom';
import './styles.css';

function UserProfile() {
  return (
    <div className="container">
  
        <div className="profile-info">
          
          <div className="avatar-box">
          <p className="avatar-edit"> &#128396;</p>
            <img src="/src/chibi.png" alt="Avatar" className="avatar" />
          </div>

          <div className="info-box">
            <div>
              <p className="label">Tipo Sanguíneo</p>
              <p className="highlight">A+</p>
            </div>
            <hr/>
            <div>
              <p className="label">Amigos</p>
              <p className="link">+Adicionar amigos</p>
              <p className="link">+Convidar amigos</p>
            </div>
          </div>
        </div>

        <section className="bio-box">
          
          <h3>&#128394; Usuário<span>@usuario100</span> </h3>
          <p className="friends-count"> | Doador Astuto </p>
          <p className="bio-text">Nem todos os segredos estão escondidos. Alguns apenas sabem onde não olhar.</p>
          <hr/>
          <p className="friends-count"> 4 amigos! </p>
          <p className="friends-count"> Sua posição no rank é 120° </p>
          
        </section>

        <section>

        </section>
        </div>
        
    
  );
}

export default UserProfile;
