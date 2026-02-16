import { Link } from 'react-router-dom';
import './CTAButton.css';
function CTAButton() {
  return(
  <div className="cta-button">
    <Link to="/menu">
      <button> Place an order </button>
    </Link>
    <Link to="/contact">
    <button> Contact Us </button>
      </Link>
  </div>
  )
}
export default CTAButton;