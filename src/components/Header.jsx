import React from "react";
import { Link } from "react-router-dom";

export default function Header({ openCartModal, cartItemsCount }) {
  return (
    <div>
      <header className="header--container">
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
