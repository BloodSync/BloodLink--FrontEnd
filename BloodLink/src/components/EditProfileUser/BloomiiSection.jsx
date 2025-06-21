import "./BloomiiSection.css";
import { FaPencilAlt } from "react-icons/fa";
import meuBloomii from '../../assets/Bloomii-Setgamer.gif';
import { Link } from 'react-router-dom';

export default function BloomiiSection() {
  return (
    <div className="section-edit-profile">
      <h3>Aparência do Bloomii</h3>
      <p>
        Personalize seu Bloomii com estilos únicos! Escolha itens, cores e
        acessórios para deixá-lo com a sua cara. Aqui é onde sua identidade
        visual ganha vida.
      </p>

      <div className="bloomii-preview-container">
        <div className="edit-icon-wrapper">
          <FaPencilAlt className="edit-icon" />
        <Link to="/personalizarBloomii">   <span>Editar Bloomii</span> </Link>
        </div>
        <img
          src={meuBloomii}
          alt="Avatar Bloomii personalizado"
          className="bloomii-img-edit"
        />
      </div>
<hr className="section-divider-edit" />
      <div className="purchase-history">
        <h3>Histórico de Compras</h3>
        <ul className="purchase-list">
          <li className="purchase-item">
            <span className="item-name">Set Bloomii Game ON</span>
            <span className="item-date"> 500Mon | 20/06/2025</span>
          </li>
          <li className="purchase-item">
            <span className="item-name">Set VerãoMii </span>
            <span className="item-date"> 200Mon | 18/06/2025</span>
          </li>
          <li className="purchase-item">
            <span className="item-name">Camisa listrada</span>
            <span className="item-date"> 300Mon | 15/06/2025</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
