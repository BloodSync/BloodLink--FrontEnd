import logoImage from '../../assets/logo.png'; // Importe a imagem
import './styles.css';

function Login() {
    return (      
      <div className="login-container">
        <div className="login-form">
            <div className="logo">
                <img src={logoImage} alt="Logo BloodLink" style={{ width: '80px', marginBottom: '10px' }} />
                <h1>BloodLink</h1>
            </div>

          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="Digite seu Email" />
          </div>

          <div className="input-group">
            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" placeholder="Digite sua senha" />
          </div>

          <div className="password">
            <a href="#">Esqueceu sua senha?</a>
          </div>

          <div className="buttons">
            <button type="submit" className="login-button">Login</button>
            <button className="register-button">Registrar-se</button>
          </div>

          <div className="back-home">
            <a href="#">&lt; Voltar para home</a>
          </div>
        </div>
      </div>
    );
}
 export default Login;