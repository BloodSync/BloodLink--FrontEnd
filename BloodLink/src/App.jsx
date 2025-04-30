import { Button } from './components/Button/Button'
import './App.css'

function App() {

  return (
    <>
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
  
  </>
)
}

export default App
