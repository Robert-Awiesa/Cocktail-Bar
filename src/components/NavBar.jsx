import logo from '../assets/logo.png';
import './NavBar.css';

function NavBar() {
  return(
    <header className="header">
      <img src={logo} alt="Tropical Sips Logo" />

      <nav className="nav">
        <a href="/">Home</a>
        <a href="/menu">Menu</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  )
}

export default NavBar;
