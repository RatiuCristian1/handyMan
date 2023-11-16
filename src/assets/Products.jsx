import React, { useState, useEffect } from "react";
import { getProducts } from "./api";
import { Link } from 'react-router-dom'

export default function Products() {
  const [productsEl, setProductsEl] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProductsEl() {
      setLoading(true);
      try {
        const data = await getProducts();
        setProductsEl(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadProductsEl();
  }, []);

  return (
    <div>
      <div className="products--banner--container">
        <img className="products--banner--image" src="banner3.png" alt="" />
      </div>
      <div className="products--list">
        {productsEl.map((product) => (
          <Link key={product.id} to={product.id} className="product--link">
            <div key={product.id} className="products--tile">
              <img className="the--products--images" src={product.imageUrl} alt={product.name} />
              <div className="products--info">
                <h3>{product.name}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}