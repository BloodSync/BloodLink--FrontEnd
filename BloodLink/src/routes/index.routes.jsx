import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../components/Homepage/Home.jsx';
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
import Conquistas from '../pages/ConquistasUser/Conquistas';
import PaymentWizard from '../pages/Pagamento/Pagamento';
import QuizGame from '../pages/Linkizz/Linkizz';

import PrivateRoute from '../components/PrivateRoute/PrivateRoute.jsx';

export function Router() {

  // Rotas públicas — acessíveis para todos
  const publicRoutes = [
    { path: '/', element: <Home /> },
    { path: 'cadastro', element: <Cadastro /> },
    { path: 'cadastroInfo', element: <CadastroInfo /> },
    { path: 'login', element: <Login /> },
    { path: 'aboutUs', element: <AboutUs /> },
    { path: 'terms', element: <TermsPage /> },
    { path: 'informationCenter', element: <InfoCenter /> },
    { path: 'pay', element: <PaymentWizard /> },
  ];

  // Rotas privadas — só acessíveis para usuários autenticados
  const privateRoutes = [
    { path: '', element: <Navigate to="userdashboard" replace /> }, // Redirect da raiz
    { path: 'userdashboard', element: <Home1 /> },
    { path: 'personalizarbloomii', element: <Bloomii /> },
    { path: 'hemocentrosperto', element: <Mapa /> },
    { path: 'userprofile', element: <Perfil /> },
    { path: 'editprofile', element: <EditProfileTab /> },
    { path: 'friendslist', element: <FriendsSideTab /> },
    { path: 'achievements', element: <Conquistas /> },
    { path: 'linkizz', element: <QuizGame /> },
    { path: 'userdonate', element: <Doacao /> },
    { path: 'userstore', element: <Loja /> },
    { path: 'lojaitem/:id', element: <ItemPage /> },
    { path: 'vitalink', element: <Vitalink /> },
    { path: 'settings', element: <Configuracao /> },
  ];

  return (
    <Routes>
      {/* Renderiza rotas públicas normalmente */}
      {publicRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}

      {/* Rotas privadas protegidas pelo PrivateRoute */}
      <Route element={<PrivateRoute />}>
        {/* Todas as rotas privadas ficam dentro do Layout */}
        <Route path="/" element={<Layout />}>
          {privateRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Route>

      {/* Rota coringa (opcional): redireciona para home se não encontrar rota */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}