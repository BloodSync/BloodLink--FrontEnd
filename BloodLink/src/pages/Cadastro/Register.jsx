import React, { useState } from 'react';
import './Register.css';
import logoImage from '../../assets/logo2.png';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

function Cadastro() {
  const navigate = useNavigate();

  // Login com e-mail e senha
  const [formData, setFormData] = useState({
    email: '',
    nome: '',
    nascimento: '',
    username: '',
    senha: '',
    confirmarSenha: '',
  });
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmar, setMostrarConfirmar] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCadastro = async (e) => {
    e.preventDefault();

    if (formData.senha !== formData.confirmarSenha) {
      alert('As senhas não coincidem.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5287/api/usuario', {
        email: formData.email,
        nome: formData.nome,
        dataNascimento: formData.nascimento,
        senha: formData.senha,
        // cpf: "000.000.000-00", // pode vir vazio ou ser preenchido depois
        // tipoSanguineo: "A+", // valor padrão até o cadastroInfo
        // cep: "00000-000",     // idem
      });

      console.log('Usuário criado:', response.data);
      navigate('/cadastroinfo');
    } catch (error) {
      console.error('Erro no cadastro:', error.response?.data || error.message);
      alert('Erro ao registrar. Verifique os dados.');
    }
  };

  const handleGoogleRegister = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential); // ✅ Corrigido
      console.log('Google user:', decoded);

      localStorage.setItem('google_email', decoded.email);
      localStorage.setItem('google_nome', decoded.name);

      navigate('/cadastroinfo');
    } catch (err) {
      console.error('Erro ao registrar com Google:', err);
    }
  };

  return (
    <div className="RegisterBg">
      <div className="Register">
        <Link to="/">
          <div className="logoRegister">
            <img src={logoImage} alt="Logo da BloodLink" />
            <h1>
              <span>Blood</span> <span>Link</span>
            </h1>
          </div>
        </Link>

        <h2>Registrar-se</h2>

        <form className="label-info-register" onSubmit={handleCadastro}>
          <label>E-mail</label>
          <input
            type="email"
            name="email"
            placeholder="Exemplo@hotmail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Nome completo</label>
          <input
            type="text"
            name="nome"
            placeholder="Digite seu nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />

          <div className="inline-inputs">
            <div className="input-group">
              <label>Data de nascimento</label>
              <input
                type="date"
                name="nascimento"
                value={formData.nascimento}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Nome de Usuário</label>
              <div className="username-wrapper">
                <input
                  type="text"
                  name="username"
                  placeholder="@Exemplo"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <label>Senha</label>
          <div className="senha-container">
            <input
              type={mostrarSenha ? 'text' : 'password'}
              name="senha"
              placeholder="Digite sua senha"
              value={formData.senha}
              onChange={handleChange}
              required
            />
            <span onClick={() => setMostrarSenha(!mostrarSenha)} className="icone-olho">
              {mostrarSenha ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>

          <label>Confirme a senha</label>
          <div className="senha-container">
            <input
              type={mostrarConfirmar ? 'text' : 'password'}
              name="confirmarSenha"
              placeholder="Digite sua senha novamente"
              value={formData.confirmarSenha}
              onChange={handleChange}
              required
            />
            <span onClick={() => setMostrarConfirmar(!mostrarConfirmar)} className="icone-olho">
              {mostrarConfirmar ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>
          <div className="containerGoogle">
            <GoogleLogin
              onSuccess={handleGoogleRegister}
              onError={() => console.log('Google register falhou')}
            />
          </div>

          <button type="submit" className="continuar-btn">
            Continuar
          </button>

          <a href="/login" className="voltar-home">
            &lt; Voltar para entrar
          </a>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
