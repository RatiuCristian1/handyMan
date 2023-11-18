// import React, { useState } from "react";

// const ProductModal = ({ product, onClose, onAddToCart }) => {
//   const [counter, setCounter] = useState(0);

//   const handleIncrement = () => {
//     setCounter(counter + 1);
//   };

//   const handleDecrement = () => {
//     if (counter > 0) {
//       setCounter(counter - 1);
//     }
//   };

//   const handleAddToCart = () => {
//     // Call the parent component's function to add the product to the cart
//     onAddToCart({ ...product, quantity: counter });
//     setCounter(0); // Reset the counter after adding to the cart
//   };

//   return (
//     <div className="modal--overlay">
//       <div className="modal--content">
//         <span className="modal--close" onClick={onClose}>
//           &times;
//         </span>
//         <img className="modal--image" src={product.imageUrl} alt={product.name} />
//         <div className="modal--info">
//           <h2 className="modal--product--name">{product.name}</h2>
//           <p>{product.power}</p>
//           <p>{product.weight}</p>
//           <p>{product.type}</p>
//           <p>{product.price}$</p>

//           <div className="counter">
//             <button onClick={handleDecrement} disabled={counter === 0}>
//               -
//             </button>
//             <p>{counter}</p>
//             <button onClick={handleIncrement}>+</button>
//           </div>

//           <button onClick={handleAddToCart}>Add to Cart</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductModal;


// ProductModal.jsx
import React, { useState } from 'react';

const ProductModal = ({ product, onClose, onAddToCart }) => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const handleAddToCart = () => {
    // Call the parent component's function to add the product to the cart
    onAddToCart({ ...product, quantity: counter });
    setCounter(0); // Reset the counter after adding to the cart
  };


  return (
        <div className="modal--overlay">
          <div className="modal--content">
            <span className="modal--close" onClick={onClose}>
              &times;
            </span>
            <img className="modal--image" src={product.imageUrl} alt={product.name} />
            <div className="modal--info">
              <h2 className="modal--product--name">{product.name}</h2>
              <p>{product.power}</p>
              <p>{product.weight}</p>
              <p>{product.type}</p>
              <p>{product.price}$</p>
    
              <div className="counter">
                <button onClick={handleDecrement} disabled={counter === 0}>
                  -
                </button>
                <p>{counter}</p>
                <button onClick={handleIncrement}>+</button>
              </div>
    
              <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      );
    };
    
    export default ProductModal;



