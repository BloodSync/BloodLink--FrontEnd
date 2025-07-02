import './perfilUsuario.css';
import LinkyFenix from '../../assets/Linky-Fenix.png';
import meuBloomii from '../../assets/Bloomii-Setgamer.gif';
import Conquistas from '../../assets/Conquista.png';
import { BsPencilFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

function UserProfile() {
  return (
    <>
      <div className='userProfileBg'>
        <div className="userprofile-page1">
          <div className="user-cover-photo">
            <h2>@Usuário</h2>

            <div className="userprofile-bottom-line">
              <div className="userprofile-info">
                <p className="userprofile-title">| Lobo Solitário</p>
                <p className="userprofile-bio">
                  Nem todos os segredos estão escondidos. Alguns apenas sabem onde não olhar.
                </p>
              </div>

              <div className="userprofile-type">
                <p>Tipo sanguíneo</p>
                <strong>A+</strong>
              </div>

              <div className="userprofile-avatarpic">
                <img src={LinkyFenix} alt="A imagem apresenta um ícone de perfil em pixel art, destacando a parte superior da personagem Linky. Ela possui pele em tom marrom claro, cabelos pretos com franja lisa e usa uma fita vermelha amarrada na cabeça. Seus óculos retangulares de armação fina emolduram olhos verdes semicerrados, transmitindo uma expressão serena e alegre. Um sorriso discreto revela parte dos dentes superiores, reforçando sua simpatia. Sobre seu ombro direito, repousa uma pequena fênix vermelha, adicionando um toque mágico e carismático à cena." className="userprofile-pic" />
                <p className="userprofile-usernamep">Usuário</p>
              </div>
            </div>
            <Link to="/EditProfile">
              <button className="userprofile-editbutton">Editar perfil</button>
            </Link>
          </div>

          <div className="userprofile-content">
            <div className="userprofile-bloomii-card">
              <div className="bloomii-content">
                <div className="bloomii-text">
                  <div className="bloomii-header">
                    <h3>Bloomii</h3>
                    <Link to="/personalizarBloomii">
                      <BsPencilFill /> </Link>
                  </div>
                  <p>Personalize seu Bloomii e veja seus status.</p>
                  <ul>
                    <li>+ Vitalidade 10</li>
                    <li>+ Sabedoria 10</li>
                    <li>+ Influência 50</li>
                  </ul>
                </div>
                <div className="bloomii-sprite-area">
                  <img src={meuBloomii} alt="Seu Bloomii estilizado do seu jeito!" className="userprofile-bloomii-sprite" />
                </div>
              </div>
            </div>


            <div className="userprofile-ranking-card">
              <Link to="/FriendsList">
                <h3>
                  Ranking <span className="ranking-pos">› 103º</span>
                </h3>
              </Link>
              <Link to="/Achievements">
                <h3>
                  Conquistas <span className="ranking-pos"> 06</span>
                </h3>
              </Link>
              <ul className="userprofile-achievements" >
                <li><img src={Conquistas } alt="A imagem mostra um ícone pixelizado de um troféu dourado em um fundo preto escuro. O troféu tem um corpo largo, uma base menor e duas alças curvadas para cima em cada lado. Há uma faixa vertical escura na frente do troféu. Acima e em ambos os lados do troféu, há quatro pequenas cruzes pixelizadas que representam brilho ou estrelas." className="achievements-icon" /></li>
                <li><img src={Conquistas } alt="A imagem mostra um ícone pixelizado de um troféu dourado em um fundo preto escuro. O troféu tem um corpo largo, uma base menor e duas alças curvadas para cima em cada lado. Há uma faixa vertical escura na frente do troféu. Acima e em ambos os lados do troféu, há quatro pequenas cruzes pixelizadas que representam brilho ou estrelas." className="achievements-icon" /></li>
                <li><img src={Conquistas } alt="A imagem mostra um ícone pixelizado de um troféu dourado em um fundo preto escuro. O troféu tem um corpo largo, uma base menor e duas alças curvadas para cima em cada lado. Há uma faixa vertical escura na frente do troféu. Acima e em ambos os lados do troféu, há quatro pequenas cruzes pixelizadas que representam brilho ou estrelas." className="achievements-icon" /></li>
                <li><img src={Conquistas } alt="A imagem mostra um ícone pixelizado de um troféu dourado em um fundo preto escuro. O troféu tem um corpo largo, uma base menor e duas alças curvadas para cima em cada lado. Há uma faixa vertical escura na frente do troféu. Acima e em ambos os lados do troféu, há quatro pequenas cruzes pixelizadas que representam brilho ou estrelas." className="achievements-icon" /></li>
                <li><img src={Conquistas } alt="A imagem mostra um ícone pixelizado de um troféu dourado em um fundo preto escuro. O troféu tem um corpo largo, uma base menor e duas alças curvadas para cima em cada lado. Há uma faixa vertical escura na frente do troféu. Acima e em ambos os lados do troféu, há quatro pequenas cruzes pixelizadas que representam brilho ou estrelas." className="achievements-icon" /></li>
              </ul>
              <Link to="/FriendsList">
                <h3>
                  Amigos <span className="ranking-pos"> 05 </span>
                </h3>
              </Link>
              <ul className="userprofile-friend-list2">
                <li>
                  <img src={LinkyFenix} alt="A imagem apresenta um ícone de perfil em pixel art, destacando a parte superior da personagem Linky. Ela possui pele em tom marrom claro, cabelos pretos com franja lisa e usa uma fita vermelha amarrada na cabeça. Seus óculos retangulares de armação fina emolduram olhos verdes semicerrados, transmitindo uma expressão serena e alegre. Um sorriso discreto revela parte dos dentes superiores, reforçando sua simpatia. Sobre seu ombro direito, repousa uma pequena fênix vermelha, adicionando um toque mágico e carismático à cena." />
                  <div>
                    <p>Kadu</p>
                    <p>Streak 50 dias</p>
                  </div>
                </li>
                <li>
                  <img src={LinkyFenix} alt="A imagem apresenta um ícone de perfil em pixel art, destacando a parte superior da personagem Linky. Ela possui pele em tom marrom claro, cabelos pretos com franja lisa e usa uma fita vermelha amarrada na cabeça. Seus óculos retangulares de armação fina emolduram olhos verdes semicerrados, transmitindo uma expressão serena e alegre. Um sorriso discreto revela parte dos dentes superiores, reforçando sua simpatia. Sobre seu ombro direito, repousa uma pequena fênix vermelha, adicionando um toque mágico e carismático à cena." />
                  <div>
                    <p>Guilherme</p>
                    <p>Streak 10 dias</p>
                  </div>
                </li>
                <li>
                  <img src={LinkyFenix} alt="A imagem apresenta um ícone de perfil em pixel art, destacando a parte superior da personagem Linky. Ela possui pele em tom marrom claro, cabelos pretos com franja lisa e usa uma fita vermelha amarrada na cabeça. Seus óculos retangulares de armação fina emolduram olhos verdes semicerrados, transmitindo uma expressão serena e alegre. Um sorriso discreto revela parte dos dentes superiores, reforçando sua simpatia. Sobre seu ombro direito, repousa uma pequena fênix vermelha, adicionando um toque mágico e carismático à cena." />
                  <div>
                    <p>Sergio</p>
                    <p>Streak 5 dias</p>
                  </div>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
