import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import cartIcon from "../assets/cart.avif";
import { useCart } from "../context/CartContext";
import "./NavBar.css";

function NavBar() {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeOrder, setActiveOrder] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const savedId = localStorage.getItem("lastOrderId");
    if (savedId) {
      setActiveOrder(savedId);
    }
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-container" onClick={closeMenu}>
          <img src={logo} alt="Tropical Sips Logo" />
        </Link>

        {/* Hamburger Icon - Visible only on mobile */}
        <div
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Wrapper */}
        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <div className="nav-links">
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/menu" onClick={closeMenu}>
              Menu
            </Link>
            <Link
              to={`/track/${activeOrder}`}
              className="track-link"
              onClick={closeMenu}
            >
              Track My Order
            </Link>
            <Link to="/about" onClick={closeMenu}>
              About Us
            </Link>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </div>

          <Link to="/cart" className="cart-container" onClick={closeMenu}>
            <img src={cartIcon} alt="Cart" className="cart-img" />
            <span className="cart-count">{totalItems || 0}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
