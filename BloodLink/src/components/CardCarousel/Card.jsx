import './Card.css';
import Info from '../../assets/Information.png';
import Mission from '../../assets/Mission.png';
import Rank from '../../assets/Rank.png';
import Meta from '../../assets/Objectives.png';
import { Link } from 'react-router-dom';

export default function CardCarousel() {
  return (
    <>

      <div class="gallery">
        <div className="image-box">
          <p>Central de Informações </p>
           <Link to="/InformationCenter">
            <img src={Info} alt="profile" className="Dashboard-photo" />
          </Link>

        </div>
        <div className="image-box">
          <p>Missões</p>

          <Link to="/Vitalink" >
            <img src={Mission} alt="profile" className="Dashboard-photo" />
          </Link>

        </div>
        <div className="image-box">
          <p>Ranking</p>

          <Link to="/Vitalink" >
            <img src={Rank} alt="profile" className="Dashboard-photo" />
          </Link>
        </div>
        <div className="image-box">
          <p>Definir novas metas </p>

          <Link to="/Vitalink" >
            <img src={Meta} alt="profile" className="Dashboard-photo" />
          </Link>
          
        </div >
      </div >
    </>
  );
}
