// pages/index.jsx
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; //Biblioteca da seta
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGlobe } from "react-icons/fa"; //Icon Linguagem
import "../Homepage/Home.css";
import { fadeInUp, fadeInLeft, fadeInRight, scaleIn } from "../Homepage/Scroll"; //Animações scroll
import { enableLogoTiltEffect } from "../Homepage/teste.js"; //Animação logo parceiros
import '../Homepage/Linguagens.js';

//Animações scroll
const Section = ({ children, animation = "fadeInUp" }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  const variantsMap = {
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    scaleIn,
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variantsMap[animation] || fadeInUp}
      className="section-wrapper"
    >
      {children}
    </motion.div>
  );
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
  //Avatar setinha
  const [avatarIndex, setAvatarIndex] = useState(1);
  const avatars = ["/img/miiTriste.gif", "/img/miiFeliz.gif", "/img/idle.gif"];

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
          <div className="logo-container">
            <a href="Home.jsx">
              <img src="/img/logo.png" alt="Logotipo de uma fênix vermelha estilizada, com asas amplas e penas vermelhas, voltada para a direita. O corpo da ave é simplificado, com um longo pescoço curvado e um bico pontiagudo. Uma longa cauda curva e ondulada se estende para trás, também com um design formando uma gota. Representando renascimento e poder." className="logo-nav" /> </a>
            <a href="Home.jsx"> <span className="logo-nav-text">BloodLink</span> </a>
          </div>
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
              <a href="#">
                <button className="register-btn">Cadastrar</button>
              </a>
            </div>
          </div>
        </header>
      </div>

      <main className="main">

        <div className={darkMode ? 'dark-mode' : ''}>
          <div className="esconde-background-parceiros">
            {/* Parte 1 da Home - Introdução*/}
            <div className="part-one">
              <Section animation="fadeInUp">
                <div className="text-content-part-one">
                  <p>| Doe sangue, doe esperança.</p>
                  <h2>
                    Uma única doação pode ajudar até <span className="highlight-part-one"><br />quatro pessoas</span>
                  </h2>
                </div>
              </Section>
              <img
                src="img/header.png" alt="Mão segurando uma grande gota de sangue vermelha com um fundo azul claro. Dentro da gota há um símbolo de cruz branca, representando ajuda médica ou doação de sangue. A imagem transmite solidariedade, cuidado e saúde!" className="part-one-img" />
            </div>
            <div className="part-one-vector" />

            {/* Parte 2 da Home - Descrição */}
            <Section animation="fadeInLeft">
              <section className="part-two">
                <img src="/img/drop.png" alt="Ícone composto por duas gotas de sangue estilizadas sobrepostas. A gota da esquerda é vermelha e está parcialmente coberta por outra gota rosa à direita. O fundo é branco. O design simples e moderno remete à doação de sangue ou à saúde." />
                <div className="text-content-part-two">
                  <p>
                    A <strong>BloodLink</strong> é uma plataforma que conecta doadores e hospitais e transforma a doação de sangue em uma experiência gamificada, solidária e contínua.
                  </p>
                </div>
              </section>
            </Section>

            {/* Parte 3 da Home - Bloomii */}
            <Section animation="scaleIn">

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
            </Section>


            {/* Parte 4 da Home - Ranking */}
            <div className="part-four-vector" />
            <section className="part-four-ranking">
              <Section animation="fadeInRight">
                <h3>Ranking Blooders - SP</h3>
                <ul className="ranking-list">

                  <li className="ranking-top1">
                    <div className="ranking-container">
                      <span className="ranking-crown">👑</span>
                      <img src="img/pfp.jpg" alt="Avatar personalizados por jogador de posição: 1º lugar, ordenados por experiência adquirida" className="ranking-avatar" />
                      <span>🥇 Kindred <span className="ranking-title">| Herói</span></span>
                    </div>
                    <div className="ranking-xp-area">
                      <div className="ranking-line" />
                      <span>1880XP</span>
                    </div>
                  </li>

                  <li className="ranking-top2">
                    <div className="ranking-container">
                      <span className="ranking-crown">👑</span>
                      <img src="img/pfp.jpg" alt="Avatar personalizados por jogador de posição: 2º lugar, ordenados por experiência adquirida" className="ranking-avatar" />
                      <span>🥈 Monegats <span className="ranking-title">| Lendário</span></span>
                    </div>
                    <div className="ranking-xp-area">
                      <div className="ranking-line" />
                      <span>1700XP</span>
                    </div>
                  </li>

                  <li className="ranking-top3">
                    <div className="ranking-container">
                      <span className="ranking-crown">👑</span>
                      <img src="img/pfp.jpg" alt="Avatar personalizados por jogador de posição: 3º lugar, ordenados por experiência adquirida" className="ranking-avatar" />
                      <span>🥉 AlineZz <span className="ranking-title">| Guardião</span></span>
                    </div>
                    <div className="ranking-xp-area">
                      <div className="ranking-line" />
                      <span>1000XP</span>
                    </div>
                  </li>

                </ul>
              </Section>
            </section>
          </div>
        </div>

        <div className="part-five-vector" />
        <div className="partners-section-bg" />

        {/* Parte 5 da Home - Parceiros */}
        <section className="part-five-partners">
          <h3>EMPRESAS PARCEIRAS</h3>
          <div className="partners-logos">
            <img src="img/empresa1.png" alt="Parceiro 1" />
            <img src="img/proa.png" alt="Parceiro 2" />
            <img src="img/empresa1.png" alt="Parceiro 3" />
          </div>
          <a href="#">
            <button className="become-partner-btn">Seja parceiro</button>
          </a>
        </section>

        <div className={darkMode ? 'dark-mode' : ''}>
          <div className="part-six-vector" />

          <div className="esconde-background-parceiros">

            {/* Parte 6 da Home - Planos */}
            <section className="part-six-plans">
              <Section animation="fadeInLeft">
                <h3>Planos para empresas</h3>

                <div className="all-plans">
                  <div className="plan blue">
                    <h4><span className="blue-color">Blue</span>Blood</h4>
                    <p className="description">
                      Anúncio sutil no site, ideal para empresas que apoiam a causa e buscam visibilidade acessível.
                    </p>
                    <div className="price">R$20<span className="unit">/mês</span></div>
                    <button>Saiba mais</button>
                    <hr className="plan-divider" />
                    <ul>
                      <li>Anúncio discreto no site</li>
                      <li>Visibilidade acessível</li>
                      <li>Apoio à causa com baixo custo</li>
                    </ul>
                  </div>

                  <div className="plan orange">
                    <h4><span className="orange-color">Orange</span>Blood</h4>
                    <p className="description">
                      Anúncios em destaque no site e nas campanhas.</p>
                    <div className="price-orange">R$40<span className="unit">/mês</span></div>
                    <button>Saiba mais</button>
                    <hr className="plan-divider" />
                    <ul>
                      <li>Anúncios em destaque</li>
                      <li>Inclusão nas campanhas</li>
                      <li>Itens exclusivos da empresa </li>
                    </ul>
                  </div>

                  <div className="plan red">
                    <h4><span className="red-color">Red</span>Blood</h4>
                    <p className="description">
                      Anúncios em destaque no site, campanhas e eventos especiais.</p>
                    <div className="price-red">R$80<span className="unit">/mês</span></div>
                    <button>Saiba mais</button>
                    <hr className="plan-divider" />
                    <ul>
                      <li>Exposição em eventos e especiais</li>
                      <li>Inclusão em campanhas</li>
                      <li>Selos personalizados</li>
                    </ul>
                  </div>

                </div>
              </Section>
            </section>

            {/* Parte 7 da Home - Feedback */}
            <div className="part-seven-vetor">
              <Section animation="fadeInUp">
                <section class="part-seven-feedback">
                  <h3>O que os nossos usuários pensam da <span class="highlight-part-seven">BloodLink</span>?</h3>

                  <div class="Feedback">
                    <div class="Feedback-user">
                      <p>“Transformei a doação em hábito com as missões da plataforma. É simples, divertido e faz a diferença!”</p>
                      <div class="user-info">
                        <img src="img/pfp.jpg" alt="Marcus" />
                        <span>Marcus<br /><span className="user-occupation">Artista</span></span>
                      </div>
                    </div>

                    <div class="Feedback-user">
                      <p>“Nossa empresa ganhou visibilidade e ainda ajuda a salvar vidas. Uma parceria que vale a pena!”</p>
                      <div class="user-info">
                        <img src="img/pfp.jpg" alt="" />
                        <span>Lola<br /><span className="user-occupation">Freelancer</span></span>
                      </div>
                    </div>

                    <div class="Feedback-user">
                      <p>“Comecei por curiosidade e hoje adoro ver meu nome no ranking. A BloodLink mudou minha rotina.”</p>
                      <div class="user-info">
                        <img src="img/pfp.jpg" alt="Lily" />
                        <span>Lily<br /><span className="user-occupation">Designer</span></span>
                      </div>
                    </div>

                    <div class="Feedback-user">
                      <p>"A ideia de missões diárias me motivou a cuidar mais da minha saúde."</p>
                      <div class="user-info">
                        <img src="img/pfp.jpg" alt="Lily" />
                        <span>Noah<br /><span className="user-occupation">Estudante</span></span>
                      </div>
                    </div>

                    <div class="Feedback-user">
                      <p>"A plataforma é intuitiva e me lembra sempre da hora de doar de novo."</p>
                      <div class="user-info">
                        <img src="img/pfp.jpg" alt="Lily" />
                        <span>Binho<br /><span className="user-occupation">Professor</span></span>
                      </div>
                    </div>
                  </div>
                </section>
              </Section>
            </div>

            {/* Parte 8 da Home - Footer */}
            <footer class="footer">
              <div class="footer-container">

                <div class="footer-brand">
                  <div class="logo-container-footer">
                    <a href="#"><img src="/public/img/logo.png" alt="BloodLink Logo" className="footer-logo" /></a>
                  </div>
                  <p class="footer-description">
                    Conectamos doadores a quem mais precisa, tornando a doação de sangue acessível e engajadora.
                  </p>
                </div>
                <div class="footer-content">
                  <div class="footer-column">
                    <h4>Projeto BloodLink</h4>
                    <ul>
                      <li><a href="#">Sobre</a></li>
                      <li><a href="#">Apoie o BloodLink</a></li>
                      <li><a href="#">Equipe</a></li>
                      <li><a href="#">Termos e condições</a></li>
                      <li><a href="#">Privacidade</a></li>
                    </ul>
                  </div>

                  <div class="footer-column">
                    <h4>Central de informações</h4>
                    <ul>
                      <li><a href="#">Como funciona a doação?</a></li>
                      <li><a href="#">Requisitos para doar</a></li>
                      <li><a href="#">Benefícios</a></li>
                      <li><a href="#">Desafios e recompensas</a></li>
                      <li><a href="#">Voluntários</a></li>
                    </ul>
                  </div>

                  <div class="footer-column">
                    <h4>Fale com a gente</h4>
                    <ul>
                      <li><a href="#">Email: doei@bloodsync.com</a></li>
                      <li><a href="#">SAC: (11) 99999-0000</a></li>
                      <li><a href="#">WhatsApp: (11) 98888-1234</a></li>
                      <li><a href="#">Chat ao vivo: 8h às 20h</a></li>
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
