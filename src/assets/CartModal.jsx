import React from "react";

const CartModal = ({ cartItems, onClose }) => {
  return (
    <div className="cart-modal">
      <div className="cart-modal-content">
        <span className="modal-close" onClick={onClose}>
          &times;
        </span>
        <h2>Your Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.imageUrl} alt="" />
              <p>{item.name}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CartModal;
