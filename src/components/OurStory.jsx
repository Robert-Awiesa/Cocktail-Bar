import "./OurStory.css";
import storyImage from "../assets/fresh.png";

function OurStory() {
  return (
    <section className="our-story">
      <div className="our-story-container">
        
        <div className="our-story-image">
          <img src={storyImage} alt="Fresh fruits and juice preparation" />
        </div>

        <div className="our-story-content">
          <h2>Our Story</h2>
          <div className="story-underline"></div>

          <p>
            Tropical Sips was born from a simple belief — that healthy living
            should never feel boring. What started as a small passion for fresh
            blends quickly became a mission to create juices that energize the
            body and uplift the spirit.
          </p>

          <p>
            We carefully select every fruit, focusing on freshness, quality,
            and natural sweetness. No artificial flavors. No preservatives.
            Just real ingredients crafted with care.
          </p>

          <p>
            Today, Tropical Sips is more than a juice and Cocktail bar — it’s a community of
            people choosing better, fresher, and more vibrant living.
          </p>
        </div>

      </div>
    </section>
  );
}

export default OurStory;
