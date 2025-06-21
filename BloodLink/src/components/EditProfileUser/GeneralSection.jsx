import { useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';

export default function GeneralSection() {
  const [isAtivo, setIsAtivo] = useState(null);
  const [tituloSelecionado, setTituloSelecionado] = useState('Lobo Solitário');
  const [dropdownAberto, setDropdownAberto] = useState(false);

  const opcoesTitulos = [
    'Lobo Solitário',
    'Guardião da Vida',
    'Anjo da Esperança',
    'Coração Solidário'
  ];

  const handleClickTitulo = () => {
    setDropdownAberto(!dropdownAberto);
  };

  const handleSelecionarTitulo = (titulo) => {
    setTituloSelecionado(titulo);
    setDropdownAberto(false);
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

      {/* Div com os titulos*/}
      <div className="input-group-edit">
        <label>Título</label>
        <div className="dropdown-titulo">
          <button type="button" className="dropdown-button" onClick={handleClickTitulo}>
            {tituloSelecionado} ▼
          </button>
          {dropdownAberto && (
            <ul className="dropdown-list">
              {opcoesTitulos
                .filter(titulo => titulo !== tituloSelecionado)
                .map((titulo) => (
                  <li
                    key={titulo}
                    className="dropdown-item"
                    onClick={() => handleSelecionarTitulo(titulo)}
                  >
                    {titulo}
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>

      <div className="buttons-edit-profile">
        <button className="buttons-profileE">Cancelar</button>
        <button className="buttons-profileE">Salvar alterações</button>
      </div>
    </div>
  );
}
