import './Register.css';
import logoImage from '../../assets/logo2.png';
import logoGoogle from '../../assets/Logo-Google.png';
import { Link } from 'react-router-dom'; //router

function Cadastro() {
    return (
        <div className="RegisterBg">
            <div className="Register">
                <Link to="/">
                    <div className="logoRegister">
                        <img src={logoImage} alt="Logotipo de uma fênix vermelha estilizada, com asas amplas e penas vermelhas, voltada para a direita. O corpo da ave é simplificado, com um longo pescoço curvado e um bico pontiagudo. Uma longa cauda curva e ondulada se estende para trás, também com um design formando uma gota. Representando renascimento e poder." />
                        <h1>
                            <span>Blood</span> <span>Link</span>
                        </h1>
                    </div>
                </Link>

                <h2>Registrar-se</h2>

                <form className='label-info-register'>

                    <label>E-mail</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Exemplo@hotmail.com"
                    />

                    <label>Nome completo</label>
                    <input
                        type="text"
                        name="nome"
                        placeholder="Digite seu nome"
                    />

                    <div className="inline-inputs">

                        <div className="input-group">
                            <label>Data de nascimento</label>
                            <input
                                type="date"
                                name="nascimento"
                                placeholder="00/00/0000"
                            />
                        </div>

                        <div>


                            <label>Nome de Usuário</label>
                            <div className="username-wrapper">
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="@Exemplo"
                                />
                            </div>

                        </div>
                    </div>

                    <label>Senha</label>
                    <input
                        type="password"
                        name="senha"
                        placeholder="Digite sua senha"
                    />

                    <label>Confirme a senha</label>
                    <input
                        type="password"
                        name="confirmarSenha"
                        placeholder="Digite sua senha novamente"
                    />

                    <div class="containerGoogle">
                        <button className="register-Google-button" type="button">
                            <img src={logoGoogle} alt="Logo Google" />
                            <span>Registrar com Google</span>
                        </button>
                    </div>

                    <Link to="/cadastroinfo">
                        <button type="submit" className="continuar-btn">
                            Continuar
                        </button>
                    </Link>
                    <a href="/login" className="voltar-home">
                        &lt; Voltar para entrar
                    </a>

                </form>
            </div>
        </div>
    );
}

export default Cadastro;
