import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Main from './pages/main/Main';
import About from './pages/about/About'; // Importar la nueva página
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import '../src/styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <div className='main-screen'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='main' element={<Main />} />
          <Route path='about' element={<About />} /> {/* Nueva ruta */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
