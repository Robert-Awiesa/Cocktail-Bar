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
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-manual">
      <img src={slides[current]} alt="Slide" />
    </div>
  );
}
export default SliderManual;