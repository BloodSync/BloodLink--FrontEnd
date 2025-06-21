import { useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';

export default function GeneralSection() {
  const [isAtivo, setIsAtivo] = useState(null);

  const handleClick = (tipo) => {
    setIsAtivo(tipo);
  };

  return (
    <div className="section-edit-profile">
      <h3>Informações de usuário</h3>
      <p>Aqui você pode visualizar e editar seus dados pessoais. Manter suas informações atualizadas nos ajuda a oferecer uma experiência mais personalizada e segura. Seu nome e avatar representam <strong> você</strong> dentro da comunidade BloodLink, por isso, escolha algo que reflita quem você é — de forma respeitosa e apropriada para todos os públicos.</p>

      <div className="input-group-edit">
        <label>
          Nome de usuário
        </label>
        <input type="text" placeholder="@Usuário" />
      </div>

      <div className="input-group-edit">
        <label className="label-info">
          Nome verdadeiro
          <span className="tooltip-wrapper">
            <FaInfoCircle className="info-icon" />
            <span className="tooltip-text">Usar seu nome verdadeiro facilita o processo de triagem para hemocentros.</span>
          </span>
        </label>
        <input type="text" placeholder="Usuário" />
      </div>

      <div className="input-group-edit">
        <label>Biografia</label>
        <input type="text" placeholder="Digite sua bio..." />
      </div>

      <div className="buttons-edit-profile">
        <button className="buttons-profileE">Cancelar</button>
        <button className="buttons-profileE">Salvar alterações</button>
      </div>
    </div>
  );
}
