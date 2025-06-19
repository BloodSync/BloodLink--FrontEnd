import React from 'react';
import './AboutUs.css';
import { FaBullseye, FaEye, FaHandshake, FaBalanceScale } from 'react-icons/fa';
import { MdSettingsAccessibility } from "react-icons/md";
import { TbHeartHandshake } from "react-icons/tb";
import { FaPeopleArrows } from "react-icons/fa6";
import { PiHeartbeatFill } from "react-icons/pi";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { IoBulb } from "react-icons/io5";
import Footer from '../../components/Footer/Footer';
import logoImageWhite from '../../assets/logo-white.png';
import { Link } from 'react-router-dom';
import Time from '../../assets/avatar.jpg';

function AboutUs() {
    return (
        <>
            <div className="about-page">

                <header className="about-hero">
                    <div className="overlay">
                        <div className="top-bar">
                            <img src={logoImageWhite} alt="BloodLink" className="logo" />
                            <nav className="nav-bar-AboutUs">
                                <Link to="/" className="nav-link">Home</Link>
                                <Link to="/Login" className="nav-link">Central de Informações</Link>
                            </nav>
                        </div>

                        <div className="hero-center-content">
                            <h1>Sobre nós</h1>
                            <p>Por trás de cada gota, existe uma história. Conectamos quem doa com quem precisa viver.</p>
                        </div>
                    </div>
                </header>

                <div className="AboutUs-BgHide">

                    <section className="about-belief">
                        <h4>EM QUE ACREDITAMOS</h4>
                        <p>
                            Acreditamos que cada pessoa tem o poder de <strong>salvar vidas</strong>.
                            Acreditamos na força da empatia, na conexão entre desconhecidos, e em como a tecnologia pode unir
                            corações por uma causa maior. Acreditamos que doar sangue é um ato de amor — e que, com propósito, podemos transformar esse gesto em um movimento.
                        </p>
                    </section>
                </div>

                <section className="about-mission-vision">
                    <div className="mission">
                        <FaBullseye className="icon" />
                        <h3>Missão</h3>
                        <p>
                            Promover a doação de sangue de forma acessível, humana e engajada, conectando doadores a quem mais precisa por meio de uma plataforma intuitiva, gamificada e empática.
                        </p>
                    </div>

                    <div className="vision">
                        <FaEye className="icon" />
                        <h3>Visão</h3>
                        <p>
                            Ser a maior e mais confiável ponte entre doadores e hospitais no Brasil, inspirando uma cultura de solidariedade contínua ao envolver milhões de vidas com inovação e humanidade.
                        </p>
                    </div>
                </section>

                <div className="AboutUs-Vetor" />
                <div className="AboutUs-fixedBg" />
                <div className="AboutUs-Vetor2" />
                <section className="about-values">
                    <h2 className="Values-text">Valores</h2>
                    <div className="values-grid">
                        <div><MdSettingsAccessibility /> <p>Acessibilidade</p></div>
                        <div><TbHeartHandshake /><p>Transparência</p></div>
                        <div><FaPeopleArrows /><p>Cooperação</p></div>
                        <div><PiHeartbeatFill /><p>Respeito</p></div>
                        <div><LiaUserFriendsSolid /><p>Empatia</p></div>
                        <div><IoBulb /><p>Liberdade</p></div>
                    </div>
                </section>
                <div className="AboutUs-BgHide">

                    <section className="about-team">
                        <h5>Conheça a equipe</h5>
                        <h2>Quem deu vida à BloodLink?</h2>

                        <div className="team-grid">
                            <div className="team-card">
                                <img src={Time} alt="BloodLink" div className="img-placeholder" />
                                <p className="team-name">André</p>
                                <p className="team-role">Project Owner</p>
                                <p className="team-role">Fullstack</p>
                            </div>

                            <div className="team-card">
                                  <img src={Time} alt="BloodLink" div className="img-placeholder" />
                                <p className="team-name">Ingrid Bassi </p>
                                <p className="team-role">Scrum Master</p>
                                <p className="team-role">Fullstack</p>
                            </div>

                            <div className="team-card">
                                <img src={Time} alt="BloodLink" div className="img-placeholder" />
                                <p className="team-name">Ana Julia</p>
                                <p className="team-role">Social Manager </p>
                                <p className="team-role">Front-End</p>
                            </div>

                            <div className="team-card">
                                <img src={Time} alt="BloodLink" div className="img-placeholder" />
                                <p className="team-name">Guilherme Loures </p>
                                <p className="team-role">Dev</p>
                                <p className="team-role">Fullstack</p>
                            </div>

                            <div className="team-card">
                              <img src={Time} alt="BloodLink" div className="img-placeholder" />
                                <p className="team-name">Jonas Henrique</p>
                                <p className="team-role">Dev</p>
                                <p className="team-role">Front-End</p>
                            </div>

                            <div className="team-card">
                                 <img src={Time} alt="BloodLink" div className="img-placeholder" />
                                <p className="team-name">Gabriel de Souza </p>
                                <p className="team-role">Dev</p>
                                <p className="team-role">Back-End</p>
                            </div>
                        </div>
                    </section>

                </div>

                <div className="AboutUs-BgHide">
                    <div className="part-seven-vetor" />

                    <Footer />
                </div>  </div>
        </>
    );
}

export default AboutUs;
