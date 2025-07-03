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
    answer: "3 meses",
  },
  {
    question: "Qual a frequência máxima de doações por ano para homens?",
    options: ["6 vezes", "4 vezes", "3 vezes"],
    answer: "4 vezes",
  },
  {
    question: "Qual a frequência máxima de doações por ano para mulheres?",
    options: ["2 vezes", "3 vezes", "4 vezes"],
    answer: "3 vezes",
  },
  {
    question: "Pessoas com piercings recentes podem doar sangue?",
    options: ["Sim, sem problemas", "Apenas após 6 meses", "Apenas após 1 ano"],
    answer: "Apenas após 6 meses",
  },
  {
    question: "Qual desses alimentos é recomendado após a doação?",
    options: ["Frutas e líquidos", "Apenas carne vermelha", "Nada por 2 horas"],
    answer: "Frutas e líquidos",
  },
  {
    question: "Qual documento é necessário para doar sangue?",
    options: ["CPF", "Título de eleitor", "Documento com foto"],
    answer: "Documento com foto",
  },
  {
    question: "Quem amamenta pode doar sangue?",
    options: ["Não", "Apenas após 12 meses do parto", "Sim, se o bebê tiver mais de 2 meses"],
    answer: "Apenas após 12 meses do parto",
  },
  {
    question: "Qual desses fatores impedem temporariamente a doação?",
    options: ["Vacina recente", "Tomar café", "Ter colesterol alto"],
    answer: "Vacina recente",
  },
  {
    question: "Homens e mulheres têm o mesmo limite de doações ao ano?",
    options: ["Sim", "Não", "Depende do peso"],
    answer: "Não",
  },
  {
    question: "É necessário estar em jejum para doar sangue?",
    options: ["Sim", "Não, deve-se estar alimentado", "Apenas líquidos são permitidos"],
    answer: "Não, deve-se estar alimentado",
  },
  {
    question: "Por que o sangue doado é testado antes do uso?",
    options: ["Para descobrir o tipo sanguíneo", "Para detectar doenças infecciosas", "Para medir o colesterol"],
    answer: "Para detectar doenças infecciosas",
  },
  {
    question: "Quem fez endoscopia pode doar sangue?",
    options: ["Sim, após 6 meses", "Não pode nunca", "Somente após 1 ano"],
    answer: "Sim, após 6 meses",
  },
  {
    question: "Quem teve COVID-19 pode doar sangue após quanto tempo?",
    options: ["15 dias após recuperação", "1 mês", "Nunca mais"],
    answer: "15 dias após recuperação",
  },
  {
    question: "Doar sangue pode transmitir doenças para o doador?",
    options: ["Sim, pode", "Não, é seguro", "Só se estiver gripado"],
    answer: "Não, é seguro",
  }
];

const prizes = [
  { label: "Nada desta vez...", weight: 8 },                     // 8.1%
  { label: "Pacotinho de doces", weight: 35 },                               // 35.4%
  { label: "2 Pacotinhos de docinhos", weight: 20 },          // 20.2%
  { label: "1 chance de rodar novamente!", weight: 15 },         // 15.2%
  { label: "Mini Ecobag BloodLink.", weight: 3 },                     // 3.0%
  { label: "Pelúcia de coração (pequeno)", weight: 2 },          // 2.0%
  { label: "Pelúcia de coração (médio)", weight: 1 },            // 1.0%
  { label: "Potinho de chocolate Blood", weight: 15 },                                // 15.2%
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

  useEffect(() => {
    if (containerRef.current && wheelRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
      if (wheelRef.current.children.length > 0)
        setSliceWidth(wheelRef.current.children[0].offsetWidth);
    }
  }, [started, finished]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleConfirm = () => {
    if (!selected || isTransitioning) return;
    setIsTransitioning(true); // Evita múltiplos cliques

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

      setIsTransitioning(false); // Libera novamente após transição
    }, 1620);
  };

  const spinWheel = () => {
    if (isSpinning || !sliceWidth || !containerWidth) return;

    // Se já girou antes e NÃO caiu na chance de repetir, não deixa girar de novo
    if (hasSpun && selectedPrize !== "1 chance de rodar novamente!") return;

    const prizeIndex = getWeightedRandomIndex(prizes);

    const EXTEND_FACTOR = 10;
    const extendedPrizes = Array.from({ length: EXTEND_FACTOR }, () => prizes).flat();

    const stopAtIndex = prizes.length * 4 + prizeIndex;
    const baseOffset = xPos; // começa de onde parou
    const targetOffset = -(stopAtIndex * sliceWidth + sliceWidth / 2 - containerWidth / 2);

    setIsSpinning(true);
    setHasSpun(true);
    setSelectedPrize(null);

    setXPos(baseOffset); // mantém posição atual
    setTimeout(() => {
      setXPos(targetOffset);
    }, 50);

    setTimeout(() => {
      setIsSpinning(false);
      setTimeout(() => {
        setSelectedPrize(prizes[prizeIndex].label);

        if (prizes[prizeIndex].label === "1 chance de rodar novamente!") {
          // Quando for o prêmio de girar de novo:
          setTimeout(() => {
            setHasSpun(false); // libera o botão para girar de novo
            setSelectedPrize(null); // limpa a mensagem
            setXPos(0); // reseta a posição da roleta para o começo
          }, 3000); // espera 3 segundos antes de resetar e liberar
        }
      }, 700);
    }, 4300);

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
            Responda as 3 perguntas organizadas por Linky para ter a chance de girar a super roleta!
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

            <div ref={containerRef} className="wheel-container">
              <motion.div
                ref={wheelRef}
                className={`wheel ${isSpinning ? "spinning" : ""}`}
                animate={{ x: xPos }}
                transition={{ duration: 4.3, ease: "easeOut" }}
              >
                {Array.from({ length: 10 }, () => prizes).flat().map((prize, i) => (
                  <div key={i} className="wheel-slice">
                    {prize.label}
                  </div>
                ))}
              </motion.div>

              <div className="wheel-pointer">▼</div>
            </div>

            <button
              onClick={spinWheel}
              disabled={hasSpun || isSpinning}
              className="spin-button"
            >
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
                <img src={isCorrect ? LinkyHappy : LinkySad} alt="Linky" className="linky-mini" />
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