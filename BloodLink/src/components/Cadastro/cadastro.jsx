import './Cadastro.css';
import logoImage from '../../assets/logo.png';

function Cadastro() {

    return (
        /* Container principal do formulário de cadastro */
        <div className="cadastro">
            
            {/* Título da página */}
            <h2>Registrar-se</h2>
            
            {/* Início do formulário */}
            <form>

                {/* Campo de e-mail */}
                <label>E-mail</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Exemplo@hotmail.com"
                />

                {/* Campo de nome */}
                <label>Digte seu nome</label>
                <input
                    type="text"
                    name="nome"
                    placeholder="Digite seu nome"
                />

                {/* Campos em linha: nascimento e nome de usuário */}
                <div className="inline-inputs">

                    {/* Data de nascimento */}
                    <div className="input-group">
                        <label>Data de nascimento</label>
                        <input
                            type="date"
                            name="nascimento"
                            placeholder="00/00/0000"
                        />
                    </div>

                    {/* Nome de usuário com borda estilizada */}
                    <div className="nome-usuario">
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

                {/* Campo de senha */}
                <label>Senha</label>
                <input
                    type="password"
                    name="senha"
                    placeholder="Digite sua senha"
                />

                {/* Campo de confirmação de senha */}
                <label>Confirme a senha</label>
                <input
                    type="password"
                    name="confirmarSenha"
                    placeholder="Digite sua senha novamente"
                />

                {/* Botão para enviar o formulário */}
                <button type="submit" className="continuar-btn">
                    Continuar
                </button>

                {/* Link para voltar pra home */}
                <a href="/" className="voltar-home">
                    &lt; Voltar para home
                </a>
            </form>
        </div>
    );
}

export default Cadastro;
