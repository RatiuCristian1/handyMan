// import React, { useState, useEffect } from "react";
// import { getProducts } from "./api";
// import ProductModal from "./ProductModal";

// export default function Products({ addToCart, openCartModal }) {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [productTypeFilter, setProductTypeFilter] = useState("");
//   const productsPerPage = 10;

//   useEffect(() => {
//     async function loadProducts() {
//       setLoading(true);
//       try {
//         const data = await getProducts(productTypeFilter);
//         setProducts(data);
//       } catch (err) {
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     }

//     loadProducts();
//   }, [productTypeFilter]);

//   const openModal = (product) => {
//     setSelectedProduct(product);
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//   };

//   const onAddToCart = (product) => {
//     addToCart(product);
//     closeModal(); // Close the modal after adding to cart
//   };

//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const handleFilterChange = (event) => {
//     const selectedType = event.target.value;
//     setProductTypeFilter(selectedType);
//   };

//   return (
//     <div>
//       <div className="products--banner--container">
//         <img className="products--banner--image" src="banner3.png" alt="" />
//       </div>
//       <div className="product-filter">
//         <label htmlFor="productType">Filter by Product Type: </label>
//         <select id="productType" onChange={handleFilterChange}>
//           <option value="">All</option>
//           <option value="angel-grinder">Angel Grinder</option>
//           <option value="hand-tool">Hand Tool</option>
//           <option value="hand-drill">Hand Drill</option>
//           <option value="cordless-drill">Cordless Drill</option>
//         </select>
//       </div>
//       <div className="br--line"></div>
//       <div className="products--list">
//         {currentProducts.map((product) => (
//           <div key={product.id} className="products--tile" onClick={() => openModal(product)}>
//             <img className="the--products--images" src={product.imageUrl} alt={product.name} />
//             <div className="products--info">
//               <h3>{product.name}</h3>
//               {/* <p>{product.price}$</p> */}
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="pagination">
//         {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, index) => (
//           <button className="pagination--button" key={index + 1} onClick={() => paginate(index + 1)}>
//             {index + 1}
//           </button>
//         ))}
//       </div>
//       {selectedProduct && (
//         <ProductModal product={selectedProduct} onClose={closeModal} onAddToCart={onAddToCart} />
//       )}
//     </div>
//   );
// }




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
  const productsPerPage = 10;

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      try {
        console.log("Fetching products with filter:", productTypeFilter);
        const data = await getProducts(productTypeFilter);
        setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, [productTypeFilter]);

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
    console.log("Selected Type:", selectedType);
    setProductTypeFilter(selectedType);
  };

  console.log("Current Products:", currentProducts);

  return (
    <div>
      <div className="products--banner--container">
        <img className="products--banner--image" src="banner3.png" alt="" />
      </div>
      <div className="product-filter">
        <label htmlFor="productType">Filter by Product Type: </label>
        <select id="productType" value={productTypeFilter} onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="angel-grinder">Angel Grinder</option>
          <option value="hand-tool">Hand Tool</option>
          <option value="hand-drill">Hand Drill</option>
          <option value="cordless-drill">Cordless Drill</option>
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
