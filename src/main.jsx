// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { BrowserRouter, Routes, Route} from "react-router-dom"
// import './index.css'
// import Layout from './Layout'
// import Home from './Home'
// import Products from './assets/Products'
// import ProductModal from './assets/ProductModal';
// import CartModal from './assets/CartModal';



// function App() {

//   return (
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route path="/" element={<Home />} />
//             <Route path="/products" element={<Products />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//   )
// }


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


// import React, { useState } from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './index.css';
// import Layout from './Layout';
// import Home from './Home';
// import Products from './assets/Products';
// import ProductModal from './assets/ProductModal';
// import CartModal from './assets/CartModal';

// const App = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [isCartModalOpen, setCartModalOpen] = useState(false);

  
//   const addToCart = (product) => {
//       // Check if the product is already in the cart
//       const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);
    
//       if (existingItemIndex !== -1) {
//         // If the product is already in the cart, update its quantity
//         const updatedCart = [...cartItems];
//         updatedCart[existingItemIndex].quantity += product.quantity;
//         setCartItems(updatedCart);
//       } else {
//         // If the product is not in the cart, add it
//         setCartItems([...cartItems, product]);
//       }
//   };

//   const openCartModal = () => {
//     setCartModalOpen(true);
//   };

//   const closeCartModal = () => {
//     setCartModalOpen(false);
//   };

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout openCartModal={openCartModal} cartItemsCount={cartItems.length} />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/products" element={<Products />} />
//         </Route>
//       </Routes>
//       {/* Product Modal */}
//       {isCartModalOpen && (
//         <ProductModal
//           product={{}} // Pass your product data here
//           onClose={closeCartModal}
//           onAddToCart={addToCart}
//         />
//       )}
//       {isCartModalOpen && (
//   <ProductModal
//     product={{}} // Pass your product data here
//     onClose={closeCartModal}
//     onAddToCart={addToCart}
//   />
// )}
//     </BrowserRouter>
//   );
// };

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );

// App.jsx
// App.jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './Layout';
import Home from './Home';
import Products from './assets/Products';
import ProductModal from './assets/ProductModal';
import CartModal from './assets/CartModal';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartModalOpen, setCartModalOpen] = useState(false);

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += product.quantity;
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  const openCartModal = () => {
    setCartModalOpen(true);
  };

  const closeCartModal = () => {
    setCartModalOpen(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout openCartModal={openCartModal} cartItemsCount={cartItems.length} />}
        >
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<Products addToCart={addToCart} openCartModal={openCartModal} />}
          />
        </Route>
      </Routes>
      {/* Product Modal */}
      {isCartModalOpen && (
        <ProductModal
          product={{}} // Pass your product data here
          onClose={closeCartModal}
          onAddToCart={addToCart}
        />
      )}
      {/* Cart Modal */}
      {isCartModalOpen && <CartModal cartItems={cartItems} onClose={closeCartModal} />}
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);






