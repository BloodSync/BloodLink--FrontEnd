import './Card.css';
import Info from '../../assets/Information.png';
import Mission from '../../assets/Mission.png';
import Rank from '../../assets/Rank.png';
import Meta from '../../assets/Objectives.png';
import { Link } from 'react-router-dom';

export default function CardCarousel() {
  return (
    <>

      <div class="gallery">
        <div className="image-box">
          <p>Central de Informações </p>
           <Link to="/InformationCenter">
            <img src={Info} alt="Um close-up das mãos de uma pessoa com unhas escuras, segurando um smartphone preto verticalmente. A pessoa veste uma blusa ou casaco felpudo de cor creme." className="Dashboard-photo" />
          </Link>

        </div>
        <div className="image-box">
          <p>Missões</p>

          <Link to="/Vitalink" >
            <img src={Mission} alt="As pernas e pés de duas pessoas correndo. Uma pessoa veste calças esportivas escuras e tênis cinza, com parte de uma blusa amarela visível. A outra pessoa, mais ao fundo, também está em movimento, com uma blusa amarela e calças escuras. O fundo é esmaecido e em tons de marrom-claro, sugerindo um ambiente externo nebuloso ou à distância." className="Dashboard-photo" />
          </Link>

        </div>
        <div className="image-box">
          <p>Ranking</p>

          <Link to="/Vitalink" >
            <img src={Rank} alt=" Uma imagem abstrata e borrada de pessoas em movimento, possivelmente correndo ou dançando. A cena é dominada por tons vibrantes de laranja e vermelho, com um brilho rosa/roxo na parte superior direita, criando uma sensação de energia e dinamismo." className="Dashboard-photo" />
          </Link>
        </div>
        <div className="image-box">
          <p>Definir novas metas </p>

          <Link to="/Vitalink" >
            <img src={Meta} alt=" Uma cena de trabalho ou estudo com documentos e materiais de escritório. Em primeiro plano, um gráfico de barras em tons de laranja e azul está visível em um papel. Um lápis laranja e um tablet (ou caderno) estão posicionados sobre o papel. O fundo é suavemente colorido em tons de rosa e azul, desfocado." className="Dashboard-photo" />
          </Link>
          
        </div >
      </div >
    </>
  );
}
