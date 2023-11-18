import React from "react";
import { Link } from "react-router-dom";

export default function Header({ openCartModal, cartItemsCount }) {
  return (
    <div className="header--container">
      <header>
        <Link className="site--logo" to="/">
          <div className="site--logo--image">{/* Your site logo here */}</div>
        </Link>
        <nav className="navigation--el">
          <Link className="header--home" to="/">
            Home
          </Link>
          <Link className="header--home" to="/products">
            Products
          </Link>
          <button className="cart-icon" onClick={openCartModal}>
            🛒 {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>}
          </button>
        </nav>
      </header>
    </div>
  );
}
