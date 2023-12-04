import React from "react";

const CartModal = ({ cartItems, onClose, onDeleteItem }) => {
  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-modal">
        {/* <span className="modal-close--cart" onClick={onClose}>
          &times;
        </span> */}
      <div className="cart-modal-content">
        <span className="modal-close--cart" onClick={onClose}>
          &times;
        </span>
        <h2 className="cart--header">Your Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          <div>
            <div className="cart--item--container">
              {cartItems.map((item, index) => (
                <div key={index}>
                  <div className="cart--item">
                    <img className="cart--image" src={item.imageUrl} alt="" />
                    <p className="item--name">{item.name}</p>
                  </div>
                  <p>Quantity: {item.quantity}</p>
                  <p className="cart--price">Item Price: ${item.price}</p>
                  {/* <button className="delete--cart--button" onClick={() => onDeleteItem(index)}>
                    Delete Item
                  </button> */}
                  <button className="button-82-pushable" onClick={() => onDeleteItem(index)} role="button">
                    <span className="button-82-shadow"></span>
                    <span className="button-82-edge"></span>
                    <span className="button-82-front text">
                      Delete Item
                    </span>
                  </button>
                </div>
              ))}
            </div>
            <div>
              <p className="total-price">Total Price: ${totalPrice.toFixed(2)}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
