import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';
import './perfilUsuario.css';
import LinkyFenix from '../../assets/Linky-Fenix.png';
import meuBloomii from '../../assets/Bloomii-Setgamer.gif';
import Conquistas from '../../assets/Conquista.png';
import { BsPencilFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

function UserProfile() {
  const { user, token } = useAuth();
  const [perfil, setPerfil] = useState(null);
  const [vitalink, setVitalink] = useState(null);
  const [loadingPerfil, setLoadingPerfil] = useState(true);
  const [loadingVitalink, setLoadingVitalink] = useState(true);
  const [error, setError] = useState(null);

  // Busca os dados do usuário logado (exemplo simplificado)
  useEffect(() => {
    const fetchPerfil = async () => {
      if (!user?.id) return;

      setLoadingPerfil(true);
      setError(null);

      try {
        // Ajuste o endpoint conforme seu backend retorna os dados do usuário
        const res = await axios.get(`http://localhost:5287/api/usuario/${user.id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setPerfil(res.data);
      } catch (err) {
        setError("Erro ao carregar dados do perfil.");
      } finally {
        setLoadingPerfil(false);
      }
    };

    fetchPerfil();
  }, [user, token]);

  // Busca os dados do Vitalink do usuário
  useEffect(() => {
    const fetchVitalink = async () => {
      if (!user?.id) return;

      setLoadingVitalink(true);
      setError(null);

      try {
        const res = await axios.get(`http://localhost:5287/api/usuario/perfil-completo/${user.id}`, {
  headers: { Authorization: `Bearer ${token}` }
});

        setVitalink(res.data);
      } catch (err) {
        setError("Erro ao carregar dados do Vitalink.");
      } finally {
        setLoadingVitalink(false);
      }
    };

    fetchVitalink();
  }, [user, token]);

  if (loadingPerfil || loadingVitalink) return <p>Carregando perfil...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='userProfileBg'>
      <div className="userprofile-page1">
        <div className="user-cover-photo">
          <h2>@{perfil?.nome ?? "Usuário"}</h2>

          <div className="userprofile-bottom-line">
            <div className="userprofile-info">
              <p className="userprofile-title">{perfil?.titulo ?? "| Lobo Solitário"}</p>
              <p className="userprofile-bio">{perfil?.bio ?? "Nem todos os segredos estão escondidos. Alguns apenas sabem onde não olhar."}</p>
            </div>

            <div className="userprofile-type">
              <p>Tipo sanguíneo</p>
              <strong>{perfil?.tipoSanguineo ?? "A+"}</strong>
            </div>

            <div className="userprofile-avatarpic">
              {/* Se o usuário tiver avatar, use; senão, imagem padrão */}
              <img 
                src={perfil?.avatarUrl || LinkyFenix} 
                alt={`Avatar do usuário ${perfil?.nome ?? "Usuário"}`} 
                className="userprofile-pic" 
              />
              <p className="userprofile-usernamep">{perfil?.nome ?? "Usuário"}</p>
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
                    <BsPencilFill /> 
                  </Link>
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
                Ranking <span className="ranking-pos">› {perfil?.rank ?? 103}º</span>
              </h3>
            </Link>
            <Link to="/Achievements">
              <h3>
                Conquistas <span className="ranking-pos"> {perfil?.conquistasCount ?? 6}</span>
              </h3>
            </Link>
            <ul className="userprofile-achievements">
              {/* Renderize conquistas dinamicamente, aqui só placeholder */}
              {[...Array(perfil?.conquistasCount || 6)].map((_, i) => (
                <li key={i}>
                  <img src={Conquistas} alt="Ícone conquista" className="achievements-icon" />
                </li>
              ))}
            </ul>

            <Link to="/FriendsList">
              <h3>
                Amigos <span className="ranking-pos"> {perfil?.amigosCount ?? 5} </span>
              </h3>
            </Link>
            <ul className="userprofile-friend-list2">
              {/* Renderize amigos reais, aqui exemplo com placeholders */}
              {(perfil?.amigos || []).map((amigo, i) => (
                <li key={i}>
                  <img src={amigo.avatarUrl || LinkyFenix} alt={`Avatar de ${amigo.nome}`} />
                  <div>
                    <p>{amigo.nome}</p>
                    <p>Streak {amigo.streakDias} dias</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
