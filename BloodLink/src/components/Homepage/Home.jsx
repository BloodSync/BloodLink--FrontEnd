// pages/index.jsx
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; //Biblioteca da seta
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGlobe } from "react-icons/fa"; //Icon Linguagem
import "../Homepage/Home.css";
import { enableLogoTiltEffect } from "../Homepage/teste.js"; //Animação logo parceiros
import '../Homepage/Linguagens.js';
import logo from '../../assets/logo2.png';
import LinkyIcon from '../../assets/Linky-Icon.png';
import BloomiiIcon from '../../assets/Bloomii-Icon.png';
import PartnersLogo from '../../assets/partners.png';
import { Link } from 'react-router-dom'; //router
import Plans from "./Plans/PlansPrice.jsx";
import Bloomii1 from '../../assets/fraquinha.gif';
import Bloomii2 from '../../assets/normalzinha.gif';
import Bloomii3 from '../../assets/fortinha.gif';

//Animações scroll
const Section = ({ children, animation = "fadeInUp" }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

};


function Home() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }
  //Efeito on hover
  useEffect(() => {
    enableLogoTiltEffect();
  }, []);

  // Animação da seta
  const nextAvatar1 = () => {
    setAvatarIndex((prev) => (prev + 1) % avatars.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextAvatar1();
    }, 3000); // troca a cada 3 segundos


    return () => clearInterval(interval);
  }, []);

  //Avatar setinha
  const [avatarIndex, setAvatarIndex] = useState(1);
  const avatars = [Bloomii1, Bloomii2, Bloomii3];

  const prevAvatar = () => {
    setAvatarIndex((prev) => (prev - 1 + avatars.length) % avatars.length);
  };

  const nextAvatar = () => {
    setAvatarIndex((prev) => (prev + 1) % avatars.length);
  };

  return (
    <div className="container">

      {/* Nav Bar */}
      <div className={darkMode ? 'dark-mode' : ''}>
        <header className="header">

          <Link to="/" className="logo-container">
            <img
              src={logo}
              alt="Logotipo de uma fênix vermelha estilizada, com asas amplas e penas vermelhas, voltada para a direita. O corpo da ave é simplificado, com um longo pescoço curvado e um bico pontiagudo. Uma longa cauda curva e ondulada se estende para trás, também com um design formando uma gota. Representando renascimento e poder."
              className="logo-nav"
            />
            <span className="logo-nav-text">BloodLink </span>
          </Link>
          <div className="nav-wrapper">
            <button className="modeButton" onClick={toggleDarkMode}>
              <img
                src={darkMode ? "/img/white.png" : "/img/dark.png"}
                alt="Alternar tema"
                className="modeToggle"
              />
            </button>
            <nav className="nav">
              <a href="#">Sobre nós</a>
              <a href="#">Contato</a>
              <a href="#">Ajuda</a>
            </nav>
            <span className="nav-divider">|</span>
            <div className="nav-distance">
              <div className="language-container">
                <FaGlobe className="language-icon" />
                <select className="language-select">
                  <option value="pt" selected>🇧🇷 PT-BR</option>
                  <option value="en">🇺🇸 EN-US</option>
                  <option value="es">🇪🇸 ES-ES</option>
                </select>
              </div>
              <Link to="login"> <button className="register-btn">Entrar</button> </Link>
            </div>
          </div>
        </header>
      </div>

      <main className="main">

        <div className={darkMode ? 'dark-mode' : ''}>
          <div className="esconde-background-parceiros">
            {/* Parte 1 da Home - Introdução*/}
            <div className="part-one">
              <div className="text-content-part-one">
                <p>| Conecte vidas, doe sangue.</p>
                <h2>
                  Uma única doação pode ajudar até <span className="highlight-part-one"><br />quatro pessoas</span>
                </h2>
              </div>
              <img
                src="img/header.png" alt="Mão segurando uma grande gota de sangue vermelha com um fundo azul claro. Dentro da gota há um símbolo de cruz branca, representando ajuda médica ou doação de sangue. A imagem transmite solidariedade, cuidado e saúde!" className="part-one-img" />
            </div>
            <div className="part-one-vector" />

            {/* Parte 2 da Home - Descrição */}

            <section className="part-two">
              <img src="/img/drop.png" alt="Ícone composto por duas gotas de sangue estilizadas sobrepostas. A gota da esquerda é vermelha e está parcialmente coberta por outra gota rosa à direita. O fundo é branco. O design simples e moderno remete à doação de sangue ou à saúde." />
              <div className="text-content-part-two">
                <p>
                  A <strong>BloodLink</strong> é uma plataforma que conecta doadores e hospitais e transforma a doação de sangue em uma experiência gamificada, solidária e contínua.
                </p>
              </div>
            </section>
            {/* Parte 3 da Home - Bloomii */}
            {/* Parte 3 da Home - Carrossel */}
            <div className="avatar-controls">
              <button onClick={prevAvatar}><ChevronLeft /></button>

              <div className="avatar-list">
                {avatars.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt={`Avatar ${index + 1}`}
                    className={`avatar ${index === avatarIndex ? "active" : "inactive"}`}
                  />
                ))}
              </div>

              <button onClick={nextAvatar}><ChevronRight /></button>
            </div>
            <section className="part-three">
              <h3>
                Cuide de sua saúde enquanto <span className="highlight-part-three">você</span> salva vidas.
              </h3>
              <p>
                Doe sangue, cuide da sua saúde e veja seu personagem evoluir com você. Com missões e rankings, a doação se torna uma experiência divertida e engajadora!
              </p>
            </section>



            {/* Parte 4 da Home - Ranking */}
            <div className="part-four-vector" />
            <section className="part-four-ranking">
              <h3>Ranking Blooders - SP</h3>
              <ul className="ranking-list">

                <li className="ranking-top1">
                  <div className="ranking-container">
                    <span className="ranking-crown">👑</span>
                    <img src={LinkyIcon} alt="Avatar personalizados por jogador de posição: 1º lugar, ordenados por experiência adquirida" className="ranking-avatar" />
                    <span>🥇 Linky <span className="ranking-title-home">| Super</span></span>
                  </div>
                  <div className="ranking-xp-area">
                    <div className="ranking-line" />
                    <span>7000XP</span>
                  </div>
                </li>

                <li className="ranking-top2">
                  <div className="ranking-container">
                    <span className="ranking-crown">👑</span>
                    <img src={BloomiiIcon} alt="Avatar personalizados por jogador de posição: 2º lugar, ordenados por experiência adquirida" className="ranking-avatar" />
                    <span>🥈 Bloomiinky <span className="ranking-title-home">| Lendário</span></span>
                  </div>
                  <div className="ranking-xp-area">
                    <div className="ranking-line" />
                    <span>2500XP</span>
                  </div>
                </li>

                <li className="ranking-top3">
                  <div className="ranking-container">
                    <span className="ranking-crown">👑</span>
                    <img src={BloomiiIcon} alt="Avatar personalizados por jogador de posição: 3º lugar, ordenados por experiência adquirida" className="ranking-avatar" />
                    <span>🥉 Bloomii <span className="ranking-title-home">| Guardião</span></span>
                  </div>
                  <div className="ranking-xp-area">
                    <div className="ranking-line" />
                    <span>2000XP</span>
                  </div>
                </li>

              </ul>
            </section>
          </div>
        </div>

        <div className="part-five-vector" />
        <div className="partners-section-bg" />

        {/* Parte 5 da Home - Parceiros */}
        <section className="part-five-partners">
          <h3>EMPRESAS PARCEIRAS</h3>
          <div className="partners-logos">
            <img src={PartnersLogo} alt="Parceiro 1" />
            <img src={PartnersLogo} alt="Parceiro 2" />
            <img src={PartnersLogo} alt="Parceiro 3" />
          </div>
          <a href="#">
            <button className="become-partner-btn">Seja parceiro</button>
          </a>
        </section>

        <div className={darkMode ? 'dark-mode' : ''}>
          <div className="part-six-vector" />

          <div className="esconde-background-parceiros">
            <Plans />
            <div className="part-seven-vetor" />
            {/* Parte 8 da Home - Footer */}
            <footer class="footer">
              <div class="footer-container">

                <div class="footer-brand">
                  <div class="logo-container-footer">
                    <a href="#"><img src="/public/img/logo.png" alt="BloodLink Logo" className="footer-logo" /></a>
                    <span className="logo-nav-text">BloodLink </span>
                  </div>
                  <p class="footer-description">
                    Conectamos doadores a quem mais precisa, tornando a doação de sangue acessível e engajadora.
                  </p>
                </div>
                <div class="footer-content">
                  <div class="footer-column">
                    <h4>Projeto BloodLink</h4>
                    <ul>
                      <li><a href="#">Sobre nós </a></li>
                      <li><a href="#">Apoie o BloodLink</a></li>
                      <li><a href="#">Termos e condições</a></li>
                      <li><a href="#">Privacidade</a></li>
                    </ul>
                  </div>

                  <div class="footer-column">
                    <h4>Central de informações</h4>
                    <ul>
                      <li><a href="#">Como funciona a doação?</a></li>
                      <li><a href="#">Requisitos para doar</a></li>
                      <li><a href="#">Quem Precisa de sangue?</a></li>
                      <li><a href="#">Desafios e recompensas</a></li>
                    </ul>
                  </div>

                  <div class="footer-column">
                    <h4>Fale com a gente</h4>
                    <ul>
                      <li><a href="#">Email: doei@bloodsync.com</a></li>
                      <li><a href="#">SAC: (11) 99999-0000</a></li>
                      <li><a href="#">WhatsApp: (11) 98888-1234</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <hr />
              <div class="footer-bottom">
                <p>&copy; 2025 BloodLink. Todos os direitos reservados.</p>
              </div>
            </footer>

          </div>
        </div>
      </main>
    </div >

  );

}
export default Home
