import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Linky from '../../assets/LinkyN1.png';
import LinkyHappy from '../../assets/LinkyIcoRight.png';
import LinkySad from '../../assets/LinkyIcoWrong.png';
import Congrats from '../../assets/Congrats.gif';

import "./Linkizz.css";
import "./Roleta.css";

const allQuestions = [
  {
    question: "Qual o tipo sanguíneo do doador universal?",
    options: ["A+", "O-", "AB+"],
    answer: "O-",
  },
  {
    question: "Qual intervalo ideal entre doações para mulheres?",
    options: ["4 meses", "2 meses", "3 meses"],
    answer: "4 meses",
  },
  {
    question: "Quem pode doar sangue?",
    options: ["Apenas maiores de 18", "Pessoas saudáveis acima de 50kg", "Somente homens"],
    answer: "Pessoas saudáveis acima de 50kg",
  },
  {
    question: "Quantos ml são coletados numa doação?",
    options: ["250ml", "450ml", "1 litro"],
    answer: "450ml",
  },
  {
    question: "Após doar sangue, o que é recomendado?",
    options: ["Exercício intenso", "Repouso e hidratação", "Ficar em jejum"],
    answer: "Repouso e hidratação",
  },
  {
    question: "Qual intervalo ideal entre doações para homens?",
    options: ["4 meses", "2 meses", "3 meses"],
    answer: "3 meses", // Corrigi aqui pois tava incompleto
  },
];

const prizes = [
  { label: "Nada desta vez...", weight: 40 },
  { label: "Prêmio consolo.", weight: 25 },
  { label: "Pacotinho de doces", weight: 15 },
  { label: "1 chance de rodar novamente!", weight: 10 },
  { label: "Ecobag BloodLink.", weight: 4 },
  { label: "Pelúcia de coração (pequeno)", weight: 3 },
  { label: "Pelúcia de coração (médio)", weight: 2 },
  { label: "Tubet", weight: 1 },
];

function getWeightedRandomIndex(prizes) {
  const totalWeight = prizes.reduce((acc, p) => acc + p.weight, 0);
  let random = Math.random() * totalWeight;
  for (let i = 0; i < prizes.length; i++) {
    random -= prizes[i].weight;
    if (random <= 0) return i;
  }
  return prizes.length - 1;
}

function QuizGame() {
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showQuestion, setShowQuestion] = useState(true);
  const [feedback, setFeedback] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  // Estados para a roleta horizontal
  const [hasSpun, setHasSpun] = useState(false);
  const [selectedPrize, setSelectedPrize] = useState(null);
  const [xPos, setXPos] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const containerRef = useRef(null);
  const wheelRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [sliceWidth, setSliceWidth] = useState(0);

  useEffect(() => {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 3));
  }, []);

  // Captura o tamanho da área visível da roleta e da fatia (slice)
  useEffect(() => {
    if (containerRef.current && wheelRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      if (wheelRef.current.children.length > 0)
        setSliceWidth(wheelRef.current.children[0].offsetWidth);
    }
  }, [started, finished]);

  const handleConfirm = () => {
    if (!selected) return;

    const correct = selected === questions[current].answer;
    setIsCorrect(correct);
    setFeedback(correct ? "Boa! Tá certinho!" : "Eiiii! Essa não era a resposta certa.");

    if (correct) setScore((s) => s + 1);

    setTimeout(() => {
      setFeedback(null);
      setIsCorrect(null);
      if (current === 2) {
        setFinished(true);
      } else {
        setCurrent((i) => i + 1);
        setSelected(null);
        setShowQuestion(true);
      }
    }, 1620);
  };

  const spinWheel = () => {
    if (hasSpun || isSpinning) return;

    const prizeIndex = getWeightedRandomIndex(prizes);

    // Calcula o deslocamento para centralizar a fatia sorteada
    const targetX = -(prizeIndex * sliceWidth + sliceWidth / 2 - containerWidth / 2);

    const extraSpins = sliceWidth * prizes.length * 4; // 4 voltas extras

    setIsSpinning(true);
    setHasSpun(true);
    setSelectedPrize(null);

    setXPos(0); // Reset posição antes de começar

    setTimeout(() => {
      // Desliza para longe (4 voltas extras) + para a fatia certa
      setXPos(targetX - extraSpins);

      setTimeout(() => {
        setXPos(targetX);
        setIsSpinning(false);
        setSelectedPrize(prizes[prizeIndex].label);

        if (prizes[prizeIndex].label === "1 chance de rodar novamente!") {
          setTimeout(() => {
            setHasSpun(false);
            setSelectedPrize(null);
          }, 2000);
        }
      }, 4500);
    }, 100);
  };

  if (!started) {
    return (
      <div className="start-screen">
        <div className="start-left">
          <div className="start-right">
            <img src={Linky} alt="Linky" className="start-image" />
          </div>
          <h1 className="logo-text">LINKIZZ</h1>
          <p>
            Responda as 3 perguntas organizadas por Linky para ter a chance de girar a super roleta! Por favor responda as perguntas em nosso stand.{" "}
          </p>
          <button onClick={() => setStarted(true)}>Bora lá!</button>
        </div>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="result-screen">
        <h2>Você acertou {score} de 3!</h2>
        {score >= 2 ? (
          <>
            <div className="linky-message-wrapper">
              <img src={Congrats} alt="Linky" className="linky-mini1" />
              <div className="linky-message">
                Mandou bem! Você ganhou uma chance de rolar a roleta. Aproveita!
              </div>
            </div>

            {/* Roleta horizontal */}
            <div ref={containerRef} className="wheel-container" style={{ overflow: "hidden" }}>
              <motion.div
                ref={wheelRef}
                className="wheel"
                animate={{ x: xPos }}
                transition={{ duration: 4.5, ease: "easeOut" }}
              >
                {prizes.map((prize, i) => (
                  <div key={i} className="wheel-slice">
                    {prize.label}
                  </div>
                ))}
              </motion.div>
              <div className="wheel-pointer">▼</div>
            </div>

            <button onClick={spinWheel} disabled={hasSpun || isSpinning} className="spin-button">
              {hasSpun ? "Já girou!" : "Girar Roleta"}
            </button>

            {selectedPrize && (
              <p className="prize-message">
                Você ganhou: <strong>{selectedPrize}</strong>
                {selectedPrize === "1 chance de rodar novamente!" && <> — Aproveite e gire de novo!</>}
              </p>
            )}
          </>
        ) : (
          <p className="result-message">Oh não! Você não passou no teste!</p>
        )}
      </div>
    );
  }

  const q = questions[current];

  return (
    <div className="quiz-container">
      <ProgressBar progress={(current + 1) / 3} />
      <AnimatePresence mode="wait">
        {showQuestion && (
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="question-box"
          >
            <h3>{q?.question}</h3>
            {feedback && (
              <div className="feedback-box">
                <img
                  src={isCorrect ? LinkyHappy : LinkySad}
                  alt="Linky"
                  className="linky-mini"
                />
                <p>{feedback}</p>
              </div>
            )}
            <div className="options">
              {q?.options.map((opt, index) => (
                <motion.div
                  key={opt}
                  className={`card-flip ${selected === opt ? "selected" : ""}`}
                  onClick={() => setSelected(opt)}
                  initial={{ rotateY: 180 }}
                  animate={{ rotateY: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="card-inner">
                    <div className="card-front" />
                    <div className="card-back">{opt}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            <button onClick={handleConfirm} disabled={!selected}>
              Confirmar
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ProgressBar({ progress }) {
  return (
    <div className="progress-wrapper">
      <div className="progress-bar" style={{ width: `${progress * 100}%` }} />
    </div>
  );
}

export default QuizGame;
