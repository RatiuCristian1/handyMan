// CartModal.js
import React from "react";

const CartModal = ({ cartItems, onClose, onDeleteItem }) => {
  return (
    <div className="cart-modal">
      <div className="cart-modal-content">
        <span className="modal-close--cart" onClick={onClose}>
          &times;
        </span>
        <h2 className="cart--header">Your Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          <div>
            {cartItems.map((item, index) => (
              <div key={index} className="cart--item--container">
                <div className="cart--item">
                  <img className="cart--image" src={item.imageUrl} alt="" />
                  <p className="item--name">{item.name}</p>
                </div>
                <p>Quantity: {item.quantity}</p>
              </div>
            ))}
            <button className="delete--cart--button" onClick={onDeleteItem}>
              Delete All Items
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;

