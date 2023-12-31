import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const images = ["intro1.jpg", "introC.jpg", "intro3.jpg", "intro5.jpg"];
  const texts = ["Transforming Spaces, One Project at a Time.", "", "Crafting Comfort: Your Trusted HandyMan Partner"];
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
          <div className="text-overlay">
            {currentIndex === 0 && <div className="first-text">{texts[currentIndex]}</div>}
            {currentIndex === 2 && <div className="third-text">{texts[currentIndex]}</div>}
          </div>
        </div>
        <button className='header--intro--button--right' onClick={nextImage}>
          <span className="material-symbols-outlined left--arrow">arrow_circle_right</span>
        </button>
      </div>

      <div className='backgroung--home--banner'></div>
      <h1 className="product--title">Check out the Products</h1>
      
      <div className='home--products--container'>


        <div className='home--angel--grinder--container'>
          <Link className='home--product--link' to="/products">
            <div>
              <p className='home--products--name'>Bosch AG50 Angle Grinder</p>
              <img className='home--products--images' src="Bosch AG50-10125 Angle Grinder.webp" alt="" />
            </div>
          </Link>

          <Link className='home--product--link' to="/products">
            <div>
              <p className='home--products--name'>AEG Angel-Grinder 230</p>
              <img className='home--products--images' src="AEG-Angel-Grinder 230.webp" alt="AEG-Angel-Grinder" />
            </div>
          </Link>

          <Link className='home--product--link' to="/products">
            <div>
              <p className='home--products--name'>DeWalt Angel-Grinder125</p>
              <img className='home--products--images' src="DeWalt-Angel-Grinder125.webp" alt="DeWalt-Angel-Grinder" />
            </div>
          </Link>
        </div>

        <div className='home--power--drill--container'>
          <Link className='home--product--link' to="/products">
            <div>
              <p className='home--products--name'>Bosch600</p>
              <img className='home--products--images' src="Bosch600.jpg" alt="" />
            </div>
          </Link>

          <Link className='home--product--link' to="/products">
            <div>
              <p className='home--products--name'>Bosch1200</p>
              <img className='home--products--images' src="Bosch1200.jpg" alt="" />
            </div>
          </Link>

          <Link className='home--product--link' to="/products">
            <div>
              <p className='home--products--name'>Ryobi800</p>
              <img className='home--products--images' src="Ryobi800.webp" alt="" />
            </div>
          </Link>  
        </div>

        <div className='home--cordless--drill--container'>
          <Link className='home--product--link' to="/products">
            <div>
              <p className='home--products--name'>Bosch-cordless18</p>
              <img className='home--products--images' src="Bosch-cordless18.webp" alt="" />
            </div>
          </Link>

          <Link className='home--product--link' to="/products">
            <div>
              <p className='home--products--name'>DeWalt-cordless20</p>
              <img className='home--products--images' src="DeWalt-cordless20.webp" alt="" />
            </div>
          </Link>

          <Link className='home--product--link' to="/products">
            <div>
              <p className='home--products--name'>Makita-cordless18 Pack</p>
              <img className='home--products--images' src="i_013c3c259c058f87174967811c3a56ea-w-800h-800f-1c-ffffffo-q-80.jpg" alt="" />
            </div>
          </Link>  
        </div>

        <div className='home--hand--tools--container'>
          <Link className='home--product--link' to="/products">
            <div>
              <p className='home--products--name'>Bosch-cordless18</p>
              <img className='home--products--images' src="screwdriver-set-stanley.jpg" alt="" />
            </div>
          </Link>

          <Link className='home--product--link' to="/products">  
            <div>
              <p className='home--products--name'>DeWalt-cordless20</p>
              <img className='home--products--images' src="industrial-leather-hand-gloves.jpg" alt="" />
            </div>
          </Link>  

          <Link className='home--product--link' to="/products">
            <div>
              <p className='home--products--name'>Makita-cordless18 Pack</p>
              <img className='home--products--images' src="pliers-stanley.jpg" alt="" />
            </div>
          </Link>
        </div>
      </div>

      <div className='home--banner'>
        <img src="construction111.jpg" alt="" />
        <img className='home--banner2' src="construction1.jpg" alt="" />
        {/* <img className='' src="construction1.jpg" alt="" /> */}
      </div>
      <div className='wrench--banner'></div>
      <div className='deal--banner--container'>
        <img className='deal--banner' src="deal--banner.png" alt="" />
        <img className='deal--plumer' src="plumer.webp" alt="" />
        <img className='deal--banner1' src="deal--banner1.jpg" alt="" />
      </div>
    </>
  );
}