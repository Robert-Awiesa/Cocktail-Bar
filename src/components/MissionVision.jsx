import React from "react";
import "./MissionVision.css";
import missionImage from "../assets/images/slide-2.jpg"; // replace with your image
import visionImage from "../assets/images/slide-1.jpg";   // replace with your image

function MissionVision() {
  return (
    <section className="mission-vision-section">
      <div className="container">

        <div className="mission">
          <div className="text">
            <h2>Our Mission</h2>
            <p>
              To delight every guest with fresh, natural, and creative beverages 
              that energize the body and lift the spirit, served with care and passion.
            </p>
          </div>
          <div className="image">
            <img src={missionImage} alt="Mission" />
          </div>
        </div>

        <div className="vision">
          <div className="image">
            <img src={visionImage} alt="Vision" />
          </div>
          <div className="text">
            <h2>Our Vision</h2>
            <p>
              To be the go-to destination for vibrant, healthful, and innovative drinks,
              where people come together to enjoy life, flavor, and community.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default MissionVision;
