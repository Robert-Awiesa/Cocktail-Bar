import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import cartIcon from '../assets/cart.avif';
import { useCart } from '../context/CartContext';
import './NavBar.css';

function NavBar() {
const {totalItems} = useCart();
  return(
    <header className="header">
      <img src={logo} alt="Tropical Sips Logo" />

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">
          <img src={cartIcon} alt="Cart" className='cart-img' />
          <p className='cart-count'>{totalItems || 0}</p>
        </Link>
      </nav>
    </header>
  )
}

export default NavBar;
