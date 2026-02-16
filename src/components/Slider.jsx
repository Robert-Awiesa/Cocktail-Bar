import { useState, useEffect } from "react";
import './slider.css'
import slide1 from "../assets/images/slide-1.jpg";
import slide2 from "../assets/images/slide-2.jpg";
import slide3 from "../assets/images/slide-4.jpg";

const slides = [
  slide1, slide2, slide3
];

function SliderManual() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
  <div className="slider-manual">
    {slides.map((slide, index) => (
      <img
        key={index}
        src={slide}
        alt="Slide"
        className={index === current ? "slide active" : "slide"}
      />
    ))}

    <div className="overlay"></div>

    <div className="dots">
      {slides.map((_, index) => (
        <span
          key={index}
          className={index === current ? "dot active-dot" : "dot"}
          onClick={() => setCurrent(index)}
        ></span>
      ))}
    </div>
  </div>
);
}
export default SliderManual;