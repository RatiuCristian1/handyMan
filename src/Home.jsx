import React, { useState } from 'react';
import Products from './assets/Products';

export default function Home() {
  const images = ["intro1.jpg", "intro2.jpg", "intro3.jpg", "intro4.jpg", "intro5.jpg"];
  const texts = ["Get your best power tools at HandyMan.com", "", "Text for Image 3", "Text for Image 4", "Text for Image 5"];
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
    <>
      <div className="container">
        <button className='header--intro--button--left' onClick={previousImage}>
          <span className="material-symbols-outlined right--arrow">arrow_circle_left</span>
        </button>
        <div className="image-container">
          <img className="carousel-image" src={images[currentIndex]} />
          <div className="text-overlay">{texts[currentIndex]}</div>
        </div>
        <button className='header--intro--button--right' onClick={nextImage}>
          <span className="material-symbols-outlined left--arrow">arrow_circle_right</span>
        </button>
      </div>
      <div className='home--products--container'>
        <div className='home--angel--grinder--container'>
          <div>
            <p className='home--products--name'>Bosch AG50-10125 Angle Grinder</p>
            <img className='home--products--images' src="Bosch AG50-10125 Angle Grinder.webp" alt="" />
          </div>

          <div>
            <p className='home--products--name'>AEG-Angel-Grinder 230</p>
            <img className='home--products--images' src="AEG-Angel-Grinder 230.webp" alt="AEG-Angel-Grinder" />
          </div>

          <div>
            <p className='home--products--name'>DeWalt-Angel-Grinder125</p>
            <img className='home--products--images' src="DeWalt-Angel-Grinder125.webp" alt="DeWalt-Angel-Grinder" />
          </div>

        </div>
        <div className='home--power--drill--container'>
          <div>
            <p className='home--products--name'>Bosch600</p>
            <img className='home--products--images' src="Bosch600.jpg" alt="" />
          </div>

          <div>
            <p className='home--products--name'>Bosch1200</p>
            <img className='home--products--images' src="Bosch1200.jpg" alt="" />
          </div>

          <div>
            <p className='home--products--name'>Ryobi800</p>
            <img className='home--products--images' src="Ryobi800.webp" alt="" />
          </div>
          
        </div>
      </div>
    </>
  );
}