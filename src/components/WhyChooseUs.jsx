import React from "react";
import "./WhyChooseUs.css";
import freshIcon from "../assets/fresh-ing.jpg";
import creativeIcon from "../assets/creative.webp";
import communityIcon from "../assets/community.jpg";
import fruitBg1 from "../assets/fresh.png";
import fruitBg2 from "../assets/creative.webp";

function WhyChooseUs() {
  const features = [
    {
      icon: freshIcon,
      title: "Fresh Ingredients",
      description: "Only the freshest fruits, herbs, and natural ingredients make it into our drinks."
    },
    {
      icon: creativeIcon,
      title: "Creative Mixology",
      description: "Our mixologists craft innovative cocktails and juices to delight every palate."
    },
    {
      icon: communityIcon,
      title: "Vibrant Community",
      description: "A welcoming space for friends, family, and all who love good vibes."
    }
  ];

  return (
    <section className="why-choose-us-tropical">
      <img src={fruitBg1} alt="Fruit background" className="fruit-bg top-left"/>
      <img src={fruitBg2} alt="Fruit background" className="fruit-bg bottom-right"/>
      <div className="container">
        <h2>Why Choose Us</h2>
        <div className="cards">
          {features.map((feature, index) => (
            <div className="card" key={index}>
              <div className="icon-wrapper">
                <img src={feature.icon} alt={feature.title} className="icon"/>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
