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

  const onDeleteItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1); // Remove the item at the specified index
    setCartItems(updatedCart);
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
      {isCartModalOpen && <CartModal cartItems={cartItems} onClose={closeCartModal} onDeleteItem={onDeleteItem} />}
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);






