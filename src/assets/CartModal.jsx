// import React from "react";

// const CartModal = ({ cartItems, onClose, onDeleteItem }) => {
//   return (
//     <div className="cart-modal">
//       <div className="cart-modal-content">
//         <span className="modal-close--cart" onClick={onClose}>
//           &times;
//         </span>
//         <h2 className="cart--header">Your Shopping Cart</h2>
//         {cartItems.length === 0 ? (
//           <p>No items in the cart</p>
//         ) : (
//           <div>
//             {cartItems.map((item, index) => (
//               <div key={index} className="cart--item--container">
//                 <div className="cart--item">
//                   <img className="cart--image" src={item.imageUrl} alt="" />
//                   <p className="item--name">{item.name}</p>
//                 </div>
//                 <p>Quantity: {item.quantity}</p>
//                 <button className="delete--cart--button" onClick={() => onDeleteItem(index)}>
//                   Delete Item
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CartModal;


import React from "react";

const CartModal = ({ cartItems, onClose, onDeleteItem }) => {
  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

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
                <p>Item Price: ${item.price}</p>
                <button className="delete--cart--button" onClick={() => onDeleteItem(index)}>
                  Delete Item
                </button>
              </div>
            ))}
            <div className="total-price">
              <p>Total Price: ${totalPrice.toFixed(2)}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
