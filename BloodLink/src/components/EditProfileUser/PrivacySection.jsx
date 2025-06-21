import './PrivacySection.css';
import { Link } from 'react-router-dom';

export default function PrivacySection() {
  return (
    <div className="section-edit-profile">
      <h3>Privacidade e Segurança</h3>
        <Link to="/Terms"> 
        <button className="link-button">Clique aqui para conferir nossos termos.
      </button>
      </Link>
    </div>
  );
}
