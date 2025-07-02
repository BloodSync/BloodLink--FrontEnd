import React from "react";
import logoImage from '../../assets/logo2.png';
import logoGoogle from '../../assets/Logo-Google.png';
import './LoginUser.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="loginBg">
      <div className="LogIn">
        <Link to="/">
          <div className="logologin">
            <img src={logoImage} alt="Logotipo de uma fênix vermelha estilizada, com asas amplas e penas vermelhas, voltada para a direita. O corpo da ave é simplificado, com um longo pescoço curvado e um bico pontiagudo. Uma longa cauda curva e ondulada se estende para trás, também com um design formando uma gota. Representando renascimento e poder." />
            <h1>
              <span>Blood</span> <span>Link</span>
            </h1>
          </div>
        </Link>

        <h2>Entrar</h2>

        <form className="label-login">

          <label>E-mail</label>
          <input
            type="email"
            name="email"
            placeholder="Exemplo@hotmail.com"
          />

          <label>Senha</label>
          <input
            type="password"
            name="senha"
            placeholder="Digite sua senha"
          />


          <div class="containerGoogle-Login">
            <button className="login-Google-button" type="button">
              <img src={logoGoogle} alt="Logo Google" />
              <span>Entrar com Google</span>
            </button>
          </div>
          <div className="buttons-login">
            <div className="buttons-row">
              <Link to="/UserDashboard">
                <button type="submit" className="continuar-btn">Entrar</button>
              </Link>
              <Link to="/cadastro">
                <button type="submit" className="continuar-btn">Registrar-se</button>
              </Link>
            </div>
            <a href="/" className="voltar-home">
              &lt; Voltar para home
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;