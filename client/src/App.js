import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Spots from './Pages/Spots';
import Autor from './Pages/Autor';
import Valise from './Pages/Valise';
import ScrollToTop from './Components/ScrollToTop';
function App() {
  return (
    <div className='App'>
      <Router>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/spots/:id' element={<Spots />} />
            <Route path='/autor' element={<Autor />} />
            <Route path='/valise' element={<Valise />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
