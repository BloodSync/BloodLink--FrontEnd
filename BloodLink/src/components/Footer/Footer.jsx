import "../Footer/Footer.css";
import logo from '../../assets/logo2.png';
import footerVector from '../../assets/footer-vector.png';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <img src={footerVector} alt="Curva do rodapé" className="footer-vector" />
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo-link">
                            <div className="logo-container-footer">
                                <img src={logo} alt="BloodLink Logo" className="footer-logo" />
                                <h2 className="footer-text">
                                    <span className="blood-red">Blood</span><span className="link-highlight">Link</span>
                                </h2>
                            </div>
                        </Link>
                        <p className="footer-description">
                            Conectamos doadores a quem mais precisa, tornando a doação de sangue acessível e engajadora.
                        </p>
                    </div>

                    <div className="footer-content">
                        <div className="footer-column">
                            <h4>Projeto BloodLink</h4>
                            <ul>
                                <li>   <Link to="/AboutUs"> Sobre nós </Link></li>

                                <li> <Link to="/Pay"> Apoie o BloodLink </Link></li>

                                <li><Link to="/Terms"> Termos e condições </Link> </li>

                                <li><a href="https://heyzine.com/flip-book/216439937c.html">Dossiê</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Central de informações</h4>
                            <ul>
                                <Link to="/InformationCenter">
                                    <li><a href="#">Como funciona a doação?</a></li>
                                </Link>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Fale com a gente</h4>
                            <ul>
                                    <li><a href="mailto:doei@bloodsync.com">Email: doei@bloodsync.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="footer-bottom">
                    <p>&copy; 2025 BloodLink. Todos os direitos reservados.</p>
                </div>

            </footer >
        </>
    );
}

export default Footer;
