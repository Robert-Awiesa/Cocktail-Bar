import { useState, useEffect } from "react";
const slides = [
  "src/assets/images/slide-1.jpg",
  "src/assets/images/slide-2.jpg",
  "src/assets/images/slide-3.jpg"
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