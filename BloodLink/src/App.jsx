import './App.css'
import Home from './components/Homepage/Home.Jsx'
import ChatBot from './components/LinkyBot/LinkyBot.jsx';
import { BrowserRouter } from 'react-router';
import { Router } from './routes/index.routes';

function App() {

  return (

    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

    </>
  );
}

export default App;