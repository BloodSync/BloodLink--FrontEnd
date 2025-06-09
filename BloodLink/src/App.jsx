import './App.css'
<<<<<<< HEAD
import Home from './components/Homepage/Home.Jsx'
import ChatBot from './components/LinkyBot.jsx';
=======
import { BrowserRouter } from 'react-router'
import { Router } from './routes/index.routes'
>>>>>>> 531ddda26f0e18516de15e3f6b220b495f9c822e


function App() {
  return (
    <>
<<<<<<< HEAD
       <Home/>
      <ChatBot />
    
    </>
  );
=======
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    </>
)
>>>>>>> 531ddda26f0e18516de15e3f6b220b495f9c822e
}
export default App;