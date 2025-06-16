import { Routes, Route } from 'react-router-dom';
import Home from '../components/Homepage/Home';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Doacao from '../pages/Doacao';
import Perfil from '../pages/Perfil';
import Mapa from '../pages/HemocentrosPertos';
import Layout from '../components/Layout/Layout';

export function Router() {
  return (
    <Routes>
      
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="cadastro" element={<Cadastro />} />
        <Route path="doacao" element={<Doacao />} />
        <Route path="perfil" element={<Perfil />} />
        <Route path="hemocentrosPerto" element={<Mapa />} />
      </Route>
    </Routes>
  );
}