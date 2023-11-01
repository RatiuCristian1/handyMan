import React, { useState } from 'react';

export default function Intro() {
  const images = ["intro1.jpg", "intro2.jpg", "intro3.jpg", "intro4.jpg", "intro5.jpg"];
  const texts = ["Text for Image 1", "Text for Image 2", "Text for Image 3", "Text for Image 4", "Text for Image 5"];
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
      <button className='header--intro--button--left' onClick={previousImage}>
        <span class="material-symbols-outlined">arrow_circle_left</span>
      </button>
      <div className="image-container">
        <img className="carousel-image" src={images[currentIndex]} />
        <div className="text-overlay">{texts[currentIndex]}</div>
      </div>
      <button className='header--intro--button--right' onClick={nextImage}>
        <span class="material-symbols-outlined">arrow_circle_right</span>
      </button>
    </div>
  );
}
