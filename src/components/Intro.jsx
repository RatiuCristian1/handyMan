import React, { useState } from "react";

export default function Intro() {
  const images = ["coca-cola.jpg", "fanta.jpg", "bottle-of-sprite.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container">
      <button onClick={previousImage}>Previous</button>
      <img className="carusel--image" src={images[currentIndex]} />
      <button onClick={nextImage}>Next</button>
    </div>
  );
}