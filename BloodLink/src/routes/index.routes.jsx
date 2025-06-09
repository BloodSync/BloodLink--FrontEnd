import { Routes, Route } from 'react-router'
import UserDashboard from '../pages/UserDashboard'
import Doacao from '../pages/Doacao'
import Login from '../pages/Login'
import Cadastro from '../pages/Cadastro'
import Perfil from '../pages/Perfil'
import Navbar from '../components/Sidebar'
import Hemocentros from '../pages/HemocentrosPertos'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={Navbar()}>
        <Route path="/" element={UserDashboard()} />
        <Route path="/login" element={Login()} />
        <Route path="/cadastro" element={Cadastro()} />
        <Route path="/doacao" element={Doacao()}/>
        <Route path="/perfil" element={Perfil()}/>
        <Route path='/hemocentrosPerto' element={Hemocentros()}>
        </Route>
      </Route>
    </Routes>
  )
}
