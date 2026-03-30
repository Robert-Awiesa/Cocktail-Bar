import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CocktailDetails from './components/CocktailDetails';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import { useCart } from "./context/CartContext";
import About from './pages/About';
import Contact from './pages/Contact';
import CheckoutForm from './components/CheckOutForm';
import OrderTracking from './components/OrderTracking';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const { cart, total } = useCart();
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:id" element={<CocktailDetails />} />
        <Route path="/cart" element={ <Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact"  element={<Contact />}/>
        <Route path="/checkout" element={<CheckoutForm cartItems={cart} totalAmount={total} />} />
        <Route path="/juice-bar-dashboard" element={<AdminDashboard />} />
        <Route path="/track/:orderId" element={<OrderTracking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
