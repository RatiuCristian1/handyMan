import React from "react";

const ProductModal = ({ product, onClose }) => {
  return (
    <div className="modal--overlay">
      <div className="modal--content">
        <span className="modal--close" onClick={onClose}>
          &times;
        </span>
        <img className="modal--image" src={product.imageUrl} alt={product.name} />
        <div className="modal--info">
          <h2>{product.name}</h2>
          {/* Add other product information here */}
        </div>
      </div>
    </div>
  );
};

export default ProductModal;