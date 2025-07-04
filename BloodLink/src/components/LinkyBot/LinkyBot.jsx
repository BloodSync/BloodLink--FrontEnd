import React, { useState } from 'react';
import '../LinkyBot/LinkyBot.css';

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogIndex, setDialogIndex] = useState(0);
  const [showTutorial, setShowTutorial] = useState(false);
  const [tutorialStep, setTutorialStep] = useState(0);

  const dialogues = [
    "Olá! Eu sou a Linky, a sua incrível ajudante. Precisa de algo?",
    "Estou aqui para ajudar, basta me dizer o que você precisa!",
    "Você sabia que posso te ajudar a encontrar informações rapidamente?"
  ];

  const tutorialSteps = [
    <>🔥 Para começar sua jornada na Bloodlink, primeiro você precisa de uma conta! Clique em <strong>Entrar</strong> e preencha as informações.</>,
    <>🧬 Personalize seu <strong>Bloomii</strong> na aba de avatar.</>,
    <>🏠 Feito isso, visite a <strong>Home</strong> para ver conteúdos para você.</>,
    <>🔎 Vá em <strong>Hemocentros</strong> para ver onde doar sangue.</>,
    <>🏆 Veja seu <strong>ranking</strong> e <strong>conquistas</strong> na parte de perfil.</>,
    <>🩸 Clique em <strong>Quero doar</strong> para registrar sua doação.</>,
    <>🛍️ Use seus pontos para comprar itens na <strong>Loja</strong>.</>,
    <>🎯 Participe do <strong>Vitalink</strong>, conclua missões e ganhe mon para comprar itens!</>,
  ];

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setDialogIndex(0);
      setShowTutorial(false);
      setTutorialStep(0);
    }
  };

  const handleNextDialog = () => {
    if (dialogIndex < dialogues.length - 1) {
      setDialogIndex(dialogIndex + 1);
    } else {
      setShowTutorial(true);
    }
  };

  const handleNextTutorial = () => {
    if (tutorialStep < tutorialSteps.length - 1) {
      setTutorialStep(tutorialStep + 1);
    } else {
      setIsOpen(false); // fecha o chat no final do tutorial
    }
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chatbot-box">
          <div className="chatbot-message">
            {!showTutorial ? (
              <>
                <p>{dialogues[dialogIndex]}</p>
                <button className='Linky-button' onClick={handleNextDialog}>Próximo</button>
              </>
            ) : (
              <>
                <p>{tutorialSteps[tutorialStep]}</p>
                <button className='Linky-button' onClick={handleNextTutorial}>
                  {tutorialStep < tutorialSteps.length - 1 ? 'Próximo' : 'Finalizar'}
                </button>
              </>
            )}
          </div>
        </div>
      )}

      <button className="chatbot-button" onClick={handleClick}>
        <img src="/public/img/linky-bot-icon.gif" alt="Chat box Linky" className="chatbot-icon" />
      </button>
    </div>
  );
}

export default ChatBot;
