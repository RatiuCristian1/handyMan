import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header({ openCartModal, cartItemsCount }) {

  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Adjust the value (e.g., 200) based on when you want the header to become fixed
      setIsHeaderFixed(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header className={`header--container ${isHeaderFixed ? 'fixed' : ''}`}>
        <Link className="site--logo" to="/">
          <div className="site--logo--container">
            <img className="site--logo--image" src="HandyManLogo.png" alt="Logo" />
          </div>
        </Link>
        <nav className="navigation--el">
          <Link className="header--home" to="/">
            Home
          </Link>
          <Link className="header--home" to="/products">
            Products
          </Link>
          <button className="cart--icon" onClick={openCartModal}>
            🛒 {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>}
          </button>
        </nav>
      </header>
    </div>
  );
}
