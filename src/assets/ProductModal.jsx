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
          <h2 className="modal--product--name">{product.name}</h2>
          <p>{product.power}</p>
          <p>{product.weight}</p>
          <p>{product.type}</p>
          <p>{product.price}$</p>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;