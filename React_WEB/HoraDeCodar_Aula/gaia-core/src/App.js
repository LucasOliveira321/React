import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.js';
import Contato from './pages/Contato.js';
import Empresa from './pages/Empresa.js';
import NavBar from './components/layout/NavBar.js';
import Footer from './components/layout/Footer.js';

function App() {
  return (
    <Router>

      <NavBar/>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/empresa' element={<Empresa/>} />
        <Route path='/contato' element={<Contato/>} />
      </Routes>

      <Footer/>

    </Router>
    
  );
}

export default App;
