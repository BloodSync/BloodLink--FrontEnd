import React, { useEffect, useState } from "react";
import logoImageWhite from "../../assets/logo-white.png";
import "./Termos.css";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

function TermsPage() {
  const [activeSection, setActiveSection] = useState("");
  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollY = window.scrollY;

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY = window.scrollY;

      const sections = ["termos", "servico", "pagamento", "privacidade", "uso"];
      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="TermsBg">
        <nav className={`navbar ${showNavbar ? "" : "navbar-hidden"}`}>
          <div className="navbar-left">
            <img src={logoImageWhite} alt="BloodLink" className="navbar-logo" />
            <span className="navbar-title">BloodLink</span>
          </div>
          <div className="navbar-right">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/Login" className="nav-link">
              Login
            </Link>
          </div>
        </nav>
        <div className="page-wrapper">
          <div className="terms-container">
            <aside className="sidebar">
              <ul>
                <li
                  className={activeSection === "termos" ? "active-link" : ""}
                  onClick={() => scrollToSection("termos")}
                >
                  Termos de uso
                </li>
                <li
                  className={activeSection === "pagamento" ? "active-link" : ""}
                  onClick={() => scrollToSection("pagamento")}
                >
                  Termos de pagamento
                </li>
                <li
                  className={
                    activeSection === "privacidade" ? "active-link" : ""
                  }
                  onClick={() => scrollToSection("privacidade")}
                >
                  Política de privacidade
                </li>
                <li
                  className={activeSection === "servico" ? "active-link" : ""}
                  onClick={() => scrollToSection("servico")}
                >
                  Termos de serviço
               </li>
              </ul>
            </aside>

            <main className="terms-content">
              <p className="intro">
                Estes Termos de Serviço regem o acesso e uso da plataforma
                digital BloodLink, disponível por meio de aplicativo ou site,
                cujo objetivo é conectar doadores de sangue a hemocentros de
                forma facilitada, incentivando a doação voluntária por meio de
                gamificação, engajamento social e recompensas simbólicas.
              </p>
              <section id="termos">
                <p className="updated">
                  {" "}
                  Última atualização: 19 de junho de 2025
                </p>
                <h2>Termos de Uso</h2>

                <p>
                  1. Aceitação dos Termos
                  <br />
                  Ao acessar ou usar a plataforma BloodLink, você concorda com
                  estes Termos de Uso. Caso não concorde, não utilize os
                  serviços.
                  <br />
                  <br />
                  2. Objetivo da Plataforma
                  <br />
                  A BloodLink é uma plataforma que conecta doadores de sangue,
                  hemocentros, empresas e instituições interessadas em campanhas
                  de doação.
                  <br />
                  Nosso objetivo é facilitar o acesso à informação e incentivar
                  a cultura da doação voluntária.
                  <br />
                  <br />
                  3. Cadastro e Responsabilidades do Usuário
                  <br />
                  O usuário deve fornecer informações verídicas e manter seus
                  dados atualizados. Cada usuário é responsável por sua conta e
                  pelas ações realizadas dentro da plataforma.
                  <br />
                  <br />
                  4. Condutas Proibidas
                  <br />
                  É proibido: Utilizar a plataforma para fins ilegais ou não
                  autorizados; Falsificar identidade ou informações de cadastro;
                  Praticar qualquer forma de discriminação ou discurso de ódio;
                  Interferir no funcionamento da plataforma.
                  <br />
                  <br />
                  5. Direitos de Propriedade
                  <br />
                  Todo o conteúdo, marcas, logotipos e elementos da plataforma
                  são de propriedade da BloodLink ou de seus parceiros e estão
                  protegidos por leis de propriedade intelectual.
                  <br />
                  <br />
                  6. Limitação de Responsabilidade
                  <br />
                  A BloodLink não se responsabiliza por dados incorretos
                  fornecidos por usuários, nem por indisponibilidades
                  temporárias da plataforma. A doação de sangue é um ato
                  voluntário e deve ser feita com responsabilidade, seguindo
                  orientações médicas.
                  <br />
                  <br />
                  7. Modificações dos Termos
                  <br />
                  Reservamo-nos o direito de alterar estes termos a qualquer
                  momento. As mudanças entrarão em vigor a partir da publicação.
                  <br />
                  <br />
                  8. Contato
                  <br />
                  Dúvidas sobre os termos podem ser enviadas para:
                  suporte@bloodlink.com.br
                </p>
              </section>

              <section id="pagamento">
                <h2>Termos de pagamento</h2>
                <p>
                  A BloodLink possui funcionalidades gratuitas e recursos
                  opcionais que podem ser adquiridos com moedas fictícias
                  acumuladas por engajamento ou, por meio de pagamento real.
                  <br />
                  <br />
                  1. MOEDA VIRTUAL
                  <br />
                  Os usuários podem obter moedas virtuais ("Mon”) ao realizarem
                  missões, desafios ou contribuírem com a comunidade. Em versões
                  futuras, a plataforma poderá disponibilizar a compra de moedas
                  virtuais com dinheiro real, exclusivamente para aquisição de
                  itens cosméticos. As Mon não possuem valor financeiro, não são
                  transferíveis para o mundo real, e não podem ser convertidas
                  em dinheiro.
                  <br />
                  <br />
                  2. ITENS E COMPRAS VIRTUAIS
                  <br />
                  Os itens disponíveis na loja são puramente cosméticos e servem
                  para personalização do perfil ou do avatar. Nenhum item
                  cosmético confere vantagem funcional, clínica ou técnica ao
                  usuário. Compras de moedas e itens virtuais são definitivas e
                  não reembolsáveis, salvo falhas técnicas devidamente
                  comprovadas.
                  <br />
                  <br />
                  3. CANCELAMENTO E SUSPENSÃO
                  <br />
                  Em caso de violação dos Termos de Serviço, a conta poderá ser
                  suspensa ou encerrada sem restituição das moedas ou itens
                  adquiridos. A plataforma reserva-se o direito de revogar ou
                  ajustar preços e itens a qualquer momento, mediante aviso
                  prévio.
                </p>
              </section>

              <section id="privacidade">
                <h2>Política de privacidade</h2>
                <p>
                  A sua privacidade é importante para nós. Esta Política
                  descreve como a BloodLink coleta, armazena, utiliza e protege
                  seus dados pessoais.
                  <br />
                  <br />
                  1. DADOS COLETADOS Ao utilizar a plataforma, podemos coletar
                  as seguintes informações:
                  <br />
                  a) Dados fornecidos pelo usuário: Nome completo, e-mail, CPF
                  (opcional), data de nascimento; CEP ou geolocalização
                  (mediante autorização); Informações de saúde voluntariamente
                  compartilhadas (ex: tipo sanguíneo); Imagens de perfil e
                  preferências de avatar.
                  <br />
                  b) Dados de uso: Histórico de login, interações com a
                  plataforma; Agendamentos realizados, número de doações;
                  Informações sobre navegação, dispositivo e sistema
                  operacional.
                  <br />
                  <br />
                  2. FINALIDADES DO USO DOS DADOS
                  <br />
                  Utilizamos os dados para: Operar e personalizar sua
                  experiência na Plataforma;
                  <br />
                  Conectar você a hemocentros próximos e permitir agendamento de
                  doações;
                  <br />
                  Implementar recursos de gamificação e personalização;
                  <br />
                  Gerar estatísticas internas e relatórios anônimos de uso;
                  <br />
                  Garantir segurança, prevenir fraudes e cumprir obrigações
                  legais.
                  <br />
                  <br />
                  3. COMPARTILHAMENTO DE DADOS Seus dados podem ser
                  compartilhados com: Hemocentros parceiros, exclusivamente para
                  fins de agendamento e gestão de doações;
                  <br />
                  Serviços de infraestrutura tecnológica (ex: servidores, APIs
                  de geolocalização);
                  <br />
                  Autoridades legais, caso haja exigência legal ou judicial.
                  Nunca vendemos ou alugamos seus dados a terceiros.
                  <br />
                  <br />
                  4. ARMAZENAMENTO E SEGURANÇA
                  <br />
                  Os dados são armazenados em servidores seguros, com
                  criptografia e acesso restrito. Aplicamos boas práticas de
                  segurança da informação, incluindo backups e firewalls. O
                  usuário é responsável por manter sua senha em sigilo e não
                  compartilhá-la com terceiros.
                  <br />
                  <br />
                  5. DIREITOS DO USUÁRIO
                  <br />
                  Você poderá, a qualquer momento:
                  <br />
                  Solicitar acesso, correção ou exclusão dos seus dados; Revogar
                  consentimentos previamente concedidos;
                  <br />
                  Solicitar a portabilidade dos dados em conformidade com a LGPD
                  (Lei Geral de Proteção de Dados).
                  <br />
                  Para exercer seus direitos, entre em contato através do
                  e-mail: privacidade@bloodlink.com.br
                  <br />
                  <br />
                  6. COOKIES E TECNOLOGIAS DE RASTREAMENTO
                  <br />
                  A plataforma utiliza cookies e tecnologias similares para:
                  Lembrar suas preferências;
                  <br />
                  Realizar análise de uso da plataforma;
                  <br />
                  Melhorar a performance e segurança. Você pode gerenciar o uso
                  de cookies diretamente em seu navegador.
                  <br />
                  <br />
                  7. ALTERAÇÕES NA POLÍTICA
                  <br />
                  Reservamo-nos o direito de alterar esta Política de
                  Privacidade a qualquer momento. Mudanças significativas serão
                  comunicadas por e-mail ou pela própria plataforma.
                </p>
              </section>

              <section id="servico">
                <h2>Termos de serviço</h2>
                <p>
                  Estes Termos de Serviço regem o acesso e uso da plataforma
                  digital BloodLink, disponível por meio de aplicativo ou site,
                  cujo objetivo é conectar doadores de sangue a hemocentros de
                  forma facilitada, incentivando a doação voluntária por meio de
                  gamificação, engajamento social e recompensas simbólicas.
                  <br />
                  Ao criar uma conta ou utilizar qualquer funcionalidade da
                  Plataforma, você concorda integralmente com os presentes
                  Termos.
                  <br />
                  <br />
                  1. OBJETIVO E FUNCIONALIDADES
                  <br />
                  A BloodLink atua como uma ferramenta intermediadora entre
                  doadores e hemocentros, oferecendo funcionalidades como:
                  <br />
                  Localização de hemocentros por CEP ou geolocalização;
                  <br />
                  Agendamento de doações e histórico do usuário;
                  <br />
                  Perfil com avatar personalizável, conquistas, desafios e loja
                  virtual com itens cosméticos;
                  <br />
                  Ranking de doadores e gamificação;
                  <br />
                  Área administrativa para hemocentros gerenciarem estoques e
                  demandas.
                  <br />
                  A Plataforma não realiza a coleta de sangue, nem responde por
                  questões clínicas ou médicas relacionadas ao processo de
                  doação.
                  <br />
                  <br />
                  2. CADASTRO E CONTA DO USUÁRIO
                  <br />
                  Para acessar recursos restritos, o usuário deve criar uma
                  conta pessoal, fornecendo informações verdadeiras, atualizadas
                  e completas. É de sua responsabilidade manter a
                  confidencialidade de seu login e senha. A conta pode ser
                  suspensa ou encerrada em caso de: Fornecimento de informações
                  falsas; Uso indevido da plataforma; Práticas abusivas,
                  fraudulentas ou ilegais.
                  <br />
                  <br />
                  3. CONDUTA DO USUÁRIO
                  <br />
                  Ao utilizar a plataforma, o usuário se compromete a:
                  <br />
                  Respeitar os demais usuários e hemocentros;
                  <br />
                  Não utilizar a Plataforma para fins ilícitos, ofensivos ou que
                  possam prejudicar terceiros;
                  <br />
                  Não tentar invadir, corromper ou prejudicar o funcionamento da
                  Plataforma. Qualquer violação poderá resultar em sanções,
                  incluindo exclusão da conta e denúncia às autoridades
                  competentes.
                  <br />
                  <br />
                  4. CONTEÚDOS E PROPRIEDADE INTELECTUAL
                  <br />
                  Todos os direitos de propriedade intelectual sobre a
                  plataforma, incluindo layout, marcas, logotipos, textos e
                  elementos visuais, são de titularidade exclusiva da BloodLink
                  ou de seus licenciadores. Ao enviar conteúdo (ex: foto de
                  perfil, nome, comentários), o usuário garante que tem os
                  direitos necessários e autoriza a exibição na plataforma.
                  <br />
                  <br />
                  5. LIMITAÇÃO DE RESPONSABILIDADE
                  <br />
                  A BloodLink não garante que todos os hemocentros cadastrados
                  estejam disponíveis, atualizados ou em funcionamento.
                  <br />
                  A BloodLink não se responsabiliza por: Comparecimento ou não
                  do usuário à doação; Aprovação clínica para a doação;
                  Procedimentos realizados pelos hemocentros; Problemas
                  técnicos, falhas de rede ou indisponibilidades momentâneas.
                  <br />
                  <br />
                  6. MODIFICAÇÕES NOS TERMOS
                  <br />
                  Estes termos podem ser atualizados a qualquer momento. Quando
                  isso ocorrer, notificaremos os usuários e disponibilizaremos a
                  nova versão. O uso contínuo da Plataforma após as atualizações
                  implica na aceitação dos novos termos.
                </p>
              </section>
            </main>
          </div>
        </div>
        <div className="part-seven-vetor" />
        <Footer />
      </div>
    </>
  );
}

export default TermsPage;
