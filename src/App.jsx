import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CocktailDetails from './components/CocktailDetails';
import Menu from './pages/Menu';
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:id" element={<CocktailDetails />} />
        <Route path="/cart" element={ <Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
