import React, { useState } from "react";
import logoImage from "../../assets/logo2.png";
import "./LoginUser.css";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { useAuth } from '../../context/AuthContext';
import axios from "axios";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false); //mostra a senha no olho
  // Login com e-mail e senha
  const handleFormLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5287/api/auth/login", {
        email,
        senha,
      });

      const { token, user } = response.data;

      console.log("Usuário recebido no login:", user); // ✅ Confirme se tem ID

      login(token, user);
      navigate("/userdashboard");
    } catch (error) {
      console.error("Erro no login:", error.response?.data || error.message);
      alert("Login falhou. Verifique suas credenciais.");
    }
  };


  // Login com Google
  const handleGoogleLogin = async (credentialResponse) => {
    try {
      const tokenGoogle = credentialResponse.credential;

      const response = await axios.post("http://localhost:5287/api/auth/google-login", {
        token: tokenGoogle,
      });

      const token = response.data.token;
      login(token); // salva JWT do sistema
      navigate("/userdashboard");
    } catch (error) {
      console.error("Erro no login com Google:", error.response?.data || error.message);
      alert("Login com Google falhou.");
    }
  };

  return (
    <div className="loginBg">
      <div className="LogIn">
        <Link to="/">
          <div className="logologin">
            <img src={logoImage} alt="Logotipo da BloodLink" />
            <h1><span>Blood</span> <span>Link</span></h1>
          </div>
        </Link>

        <h2>Entrar</h2>

        <form className="label-login" onSubmit={handleFormLogin}>
          <label>E-mail</label>
          <input
            type="email"
            name="email"
            placeholder="Exemplo@hotmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Senha</label>
          <div className="senha-container">
            <input
              type={mostrarSenha ? 'text' : 'password'}
              name="senha"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <span onClick={() => setMostrarSenha(!mostrarSenha)} className="icone-olho">
              {mostrarSenha ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>

          <div className="containerGoogle-Login">
            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={() => console.log("Login com Google falhou")}
            />
          </div>

          <div className="buttons-login">
            <div className="buttons-row">
              <button type="submit" className="continuar-btn">
                Entrar
              </button>
              <Link to="/cadastro">
                <button type="button" className="continuar-btn">
                  Registrar-se
                </button>
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
