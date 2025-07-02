import "../Footer/Footer.css";
import logo from '../../assets/logo2.png';
import footerVector from '../../assets/footer-vector.png';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <img src={footerVector} alt="Curva azul do rodapé" className="footer-vector" />
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo-link">
                            <div className="logo-container-footer">
                                <img src={logo} alt="Logotipo de uma fênix..." className="footer-logo" />
                                <h2 className="footer-text">
                                    <span className="blood-red">Blood</span><span className="link-highlight">Link</span>
                                </h2>
                            </div>
                        </Link>
                        <p className="footer-description" data-i18n="footerDescription">
                            Conectamos doadores a quem mais precisa, tornando a doação de sangue acessível e engajadora.
                        </p>
                    </div>

                    <div className="footer-content">
                        <div className="footer-column">
                            <h4 data-i18n="footerProject">Projeto BloodLink</h4>
                            <ul>
                                <li><Link to="/AboutUs" data-i18n="footerAbout">Sobre nós</Link></li>
                                <li><Link to="/Pay" data-i18n="footerSupport">Apoie o BloodLink</Link></li>
                                <li><Link to="/Terms" data-i18n="footerTerms">Termos e condições</Link></li>
                                <li><a href="https://heyzine.com/flip-book/216439937c.html" data-i18n="footerDossier">Dossiê</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4 data-i18n="footerInfo">Central de informações</h4>
                            <ul>
                                <li><Link to="/InformationCenter" data-i18n="footerHow">Como funciona a doação?</Link></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4 data-i18n="footerContact">Fale com a gente</h4>
                            <ul>
                                <li><a href="mailto:doei@bloodsync.com" data-i18n="footerEmail">Email: doe@bloodsync.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="footer-bottom">
                    <p data-i18n="footerRights">&copy; 2025 BloodLink. Todos os direitos reservados.</p>
                </div>
            </footer>

        </>
    );
}

export default Footer;
