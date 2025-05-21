import { Button } from './components/Button/Button'
import UserProfile from './components/Perfil/UserProfile'
import './App.css'
import Input from './components/Input/Input'
import Navbar from './components/Sidebar/Sidebar'
import Logo from './assets/logo.png'
import { useState } from "react"
import Cadastro from './components/Cadastro/cadastro'



function App() {

      const [showNav, setShowNav] = useState(false)
  return (
    <>
    <img className='logo' src={Logo} alt="Logo" onClick={()=> setShowNav(!showNav) }/>
<Cadastro></Cadastro>
<Navbar show={showNav}/>
 <div style={{ padding: "40px", display: "flex", gap: "20px" }}>
      <Button type="primary" onClick={() => alert("Doar Agora!")}>
        Doar Agora
      </Button>

      <Button type="secondary" onClick={() => alert("Ver Campanhas")}>
        Ver Campanhas
      </Button>

      <Button disabled>
        Aguarde...
      </Button>
    </div>


    <div>
      <UserProfile />
    </div>
  </>
)
}

export default App
