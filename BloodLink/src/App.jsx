import './App.css';
import { BrowserRouter } from 'react-router-dom'; // CORRETO!
import { Router } from './routes/index.routes';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
