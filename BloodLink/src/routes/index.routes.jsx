import { Routes, Route } from 'react-router-dom';
import Home from '../components/Homepage/Home.Jsx';
import Login from '../pages/Login/LoginUser';
import Cadastro from '../pages/Cadastro/Register';
import CadastroInfo from '../components/RegisterContinue/RegisterContinue';
import Bloomii from '../pages/PersonalizarBloomii/PersonalizarBloomii';
import Doacao from '../pages/Doacao';
import Perfil from '../pages/Perfil/PerfilUsuario';
import Mapa from '../pages/HemocentrosPertos';
import Layout from '../components/Layout/Layout';
import Home1 from '../pages/UserDashboard/UserDashboard';
import Loja from '../pages/Loja/loja';
import Vitalink from '../pages/Vitalink/vitalink';
import Configuracao from '../pages/Configuracoes/settings';
import TermsPage from '../pages/Termos/Termos';
import AboutUs from '../pages/SobreNos/AboutUs';
import ItemPage from '../components/LojaItem/LojaCompra';
import EditProfileTab from '../pages/EditProfileInfo/EditProfileUser';
import InfoCenter from '../pages/Information/CentralInfo';
import FriendsSideTab from '../pages/Amigos/FriendList';

export function Router() {
  return (
    <Routes>

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="cadastro" element={<Cadastro />} />
        <Route path="cadastroInfo" element={<CadastroInfo />} />
        <Route path="login" element={<Login />} />
        <Route path="PersonalizarBloomii" element={<Bloomii />} />

        <Route path="UserDashboard" element={<Home1 />} />
        <Route path="hemocentrosPerto" element={<Mapa />} />

        <Route path="UserProfile" element={<Perfil />} />
        <Route path="EditProfile" element={<EditProfileTab />} />
        <Route path="FriendsList" element={<FriendsSideTab />} />

        <Route path="UserDonate" element={<Doacao />} />
        <Route path="UserStore" element={<Loja />} />
        <Route path="LojaItem" element={<ItemPage />} />
        <Route path="Vitalink" element={<Vitalink />} />
        <Route path="Settings" element={<Configuracao />} />

        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="Terms" element={<TermsPage />} />
        <Route path="InformationCenter" element={<InfoCenter />} />
      </Route>
    </Routes>
  );
}        