import { useNavigate } from "react-router-dom";
import Menu from "../pages/Menu";
import "./AboutHero.css";

function AboutHero() {
  const navigate = useNavigate();
  return (
    <section className="about-hero">
      <div className="about-hero-overlay">
        <div className="about-hero-content">
          <h1>Fresh. Natural. Energizing.</h1>
          <p>
            At Tropical Sips, we craft every juice with fresh fruits and real
            ingredients — no shortcuts, no preservatives, just pure refreshment.
          </p>
          <button className="about-hero-btn" onClick={() => navigate("/Menu")}>Explore Our Menu</button>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
