import "../Footer/Footer.css";
import logo from '../../assets/logo2.png';
import { Link } from 'react-router-dom'; //router


function Footer() {
    return (
        <>
            <footer class="footer">
                <div class="footer-container">

                    <div className="footer-brand">
                        <Link to="/" className="footer-logo-link">
                            <div className="logo-container-footer">
                                <img src="/public/img/logo.png" alt="BloodLink Logo" className="footer-logo" />
                                <h2 className="footer-text">
                                    <span className="blood-red">Blood</span><span className="link-black">Link</span>
                                </h2>
                            </div>
                        </Link>
                        <p className="footer-description">
                            Conectamos doadores a quem mais precisa, tornando a doação de sangue acessível e engajadora.
                        </p>
                    </div>
                    
                    <div class="footer-content">
                        <div class="footer-column">
                            <h4>Projeto BloodLink</h4>
                            <ul>
                                <Link to="/AboutUs" >
                                    <li><a>Sobre nós </a></li>
                                </Link>
                                <li><a href="#">Apoie o BloodLink</a></li>
                                 <Link to="/Terms">
                                <li><a>Termos e condições</a></li>
                                <li><a>Privacidade</a></li>
                                 </Link>
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
        </>
    );
}
export default Footer;