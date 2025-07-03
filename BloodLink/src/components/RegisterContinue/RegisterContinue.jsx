import './Registercontinue.css';
import logoImage from '../../assets/logo2.png';
import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function CadastroInfo() {
    const [tipoSanguineo, setTipoSanguineo] = useState('');
  const [acaoSangue, setAcaoSangue] = useState('');
  const [sexo, setSexo] = useState('');
  const navigate = useNavigate();

    const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = localStorage.getItem('userId'); // ID salvo após o POST inicial no cadastro

    if (!userId) {
      alert('Usuário não identificado. Por favor, faça o cadastro novamente.');
      navigate('/cadastro');
      return;
    }

    try {
      await axios.put(`http://localhost:5287/api/usuario/${userId}`, {
  id: parseInt(userId),
  nome: localStorage.getItem('nome'),
  email: localStorage.getItem('email'),
  dataNascimento: localStorage.getItem('dataNascimento'),
  cpf: localStorage.getItem('cpf') || null,
  telefone: localStorage.getItem('telefone') || null,
  endereco: localStorage.getItem('endereco') || null,
  cep: localStorage.getItem('cep') || null,
  tipoSanguineo,
  sexo,
  acaoSangue,
  ativo: true,
  moedas: 0
});


      alert('Cadastro concluído com sucesso!');
      navigate('/PersonalizarBloomii');
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      alert('Erro ao finalizar cadastro.');
    }
  };




    return (
        <div className="RegisterContinueBg">
            <div className="RegisterContinue">
                <Link to="/">
                    <div className="logoRegisterContinue">
                        <img src={logoImage} alt="Logotipo de uma fênix vermelha estilizada, com asas amplas e penas vermelhas, voltada para a direita. O corpo da ave é simplificado, com um longo pescoço curvado e um bico pontiagudo. Uma longa cauda curva e ondulada se estende para trás, também com um design formando uma gota. Representando renascimento e poder." />
                        <h1>
                            <span>Blood</span><span>Link</span>
                        </h1>
                    </div>
                </Link>

                <h2>Informações de usuário</h2>

                <form className="form-register-continue" onSubmit={handleSubmit}>
                    <div className="input-bloodtype">
                        <label>Qual seu tipo sanguíneo?</label>
                        <div className="button-group">
                            {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-", "Não sei"].map((tipo) => (
                                <button
                                    key={tipo}
                                    type="button"
                                    className={tipoSanguineo === tipo ? "active" : ""}
                                    onClick={() => setTipoSanguineo(tipo)}
                                >
                                    {tipo}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="input-donate">
                        <label>Você está aqui para doar ou receber sangue?</label>
                        <div className="button-group">
                            {["Doar", "Receber", "Não posso doar"].map((acao) => (
                                <button
                                    key={acao}
                                    type="button"
                                    className={acaoSangue === acao ? "active" : ""}
                                    onClick={() => setAcaoSangue(acao)}
                                >
                                    {acao}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="input-sex">
                        <label>Qual seu sexo?</label>
                        <div className="button-group">
                            {["Feminino", "Masculino"].map((s) => (
                                <button
                                    key={s}
                                    type="button"
                                    className={sexo === s ? "active" : ""}
                                    onClick={() => setSexo(s)}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    <div className="checkbox-group">
                        <input type="checkbox" id="agree" />
                        <label htmlFor="agree">
                            Li e concordo com o{" "}
                            <a href="/Terms" target="_blank" rel="noopener noreferrer" className="red-text">
                                <span className="red-text">Termo de uso e Política de Privacidade</span></a>
                        </label>
                    </div>

                    {/* Recaptcha Falso*/}
                    <div className="recaptcha-mock">
                        <span className="checkmark">✔</span> 
                        <p className="recaptcha-txt"> Não sou um robô </p>
                        <div className="recaptcha-logo"></div>
                    </div>

                   <button type="submit" className="continuar-btn">
  Registrar-se
</button>


                    <a href="cadastro" className="voltar-cadastro">
                        &lt; Voltar
                    </a>
                </form>
            </div>
        </div>
    );
}

export default CadastroInfo;