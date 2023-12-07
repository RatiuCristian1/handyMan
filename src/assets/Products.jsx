import React, { useState, useEffect } from "react";
import { getProducts } from "./api";
import ProductModal from "./ProductModal";

export default function Products({ addToCart, openCartModal }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productTypeFilter, setProductTypeFilter] = useState("");
  const [productBrandFilter, setProductBrandFilter] = useState("")
  const productsPerPage = 10;

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      try {
        // console.log("Fetching products with filter:", productTypeFilter);
        const data = await getProducts(productTypeFilter, productBrandFilter);
        setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, [productTypeFilter, productBrandFilter]);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const onAddToCart = (product) => {
    addToCart(product);
    closeModal();
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterChange = (event) => {
    const selectedType = event.target.value;
    // console.log("Selected Type:", selectedType);
    setProductTypeFilter(selectedType);
  };

  const handleBrandFilterChange = (event) => {
    const selectedBrand = event.target.value
    setProductBrandFilter(selectedBrand)
  }

  // console.log("Current Products:", currentProducts);

  return (
    <div>
      <div className="products--banner--container">
        <img className="products--banner--image" src="banner3.png" alt="" />
      </div>
      <div className="product--filter">
        <label className="filter--label" htmlFor="productType">Filter by Product Type: </label>
        <select className="filter--select" id="productType" value={productTypeFilter} onChange={handleFilterChange}>
          <option className="filter--option" value="">All</option>
          <option className="filter--option" value="angel-grinder">Angel Grinder</option>
          <option className="filter--option" value="hand-tool">Hand Tool</option>
          <option className="filter--option" value="hand-drill">Hand Drill</option>
          <option className="filter--option" value="cordless-drill">Cordless Drill</option>
        </select>
        <label className="filter--label" htmlFor="productBrand">Filter by Product Brand: </label>
        <select className="filter--select" id="productBrand" value={productBrandFilter} onChange={handleBrandFilterChange}>
          <option className="filter--option" value="">All</option>
          <option className="filter--option" value="Bosch">Bosch</option>
          <option className="filter--option" value="Makita">Makita</option>
          <option className="filter--option" value="DeWalt">DeWalt</option>
        </select>
      </div>
      <div className="br--line"></div>
      <div className="products--list">
        {currentProducts.map((product) => (
          <div key={product.id} className="products--tile" onClick={() => openModal(product)}>
            <img className="the--products--images" src={product.imageUrl} alt={product.name} />
            <div className="products--info">
              <h3>{product.name}</h3>
              {/* <p>{product.price}$</p> */}
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, index) => (
          <button className="pagination--button" key={index + 1} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeModal} onAddToCart={onAddToCart} />
      )}
    </div>
  );
}
