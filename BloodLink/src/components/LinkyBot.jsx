import React, { useState } from 'react';
import '../components/LinkyBot.css';

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogIndex, setDialogIndex] = useState(0); // Estado para controlar o índice da mensagem

  const dialogues = [
    "Olá! Eu sou a Linky, a sua incrível ajudante. Precisa de algo?",
    "Estou aqui para ajudar, basta me dizer o que você precisa!",
    "Você sabia que posso te ajudar a encontrar informações rapidamente?",
    "Se você quiser saber algo, é só me chamar!"
  ];

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setDialogIndex(0); // Resetar o diálogo ao abrir o chat
    }
  };

  const handleNextDialog = () => {
    if (dialogIndex < dialogues.length - 1) {
      setDialogIndex((prevIndex) => prevIndex + 1); // Avançar para o próximo diálogo, mas só se não for o último
    }
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chatbot-box">
          <div className="chatbot-message">
            <p>{dialogues[dialogIndex]}</p>
            {dialogIndex < dialogues.length - 1 && (
              <button onClick={handleNextDialog}>Próximo</button>
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