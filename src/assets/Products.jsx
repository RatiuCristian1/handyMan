// // // import React, { useState, useEffect } from "react";
// // // import { getProducts } from "./api";
// // // import { Link } from 'react-router-dom'

// // // export default function Products() {
// // //   const [productsEl, setProductsEl] = useState([]);
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState(null);

// // //   useEffect(() => {
// // //     async function loadProductsEl() {
// // //       setLoading(true);
// // //       try {
// // //         const data = await getProducts();
// // //         setProductsEl(data);
// // //       } catch (err) {
// // //         setError(err);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     }

// // //     loadProductsEl();
// // //   }, []);

// // //   return (
// // //     <div>
// // //       <div className="products--banner--container">
// // //         <img className="products--banner--image" src="banner3.png" alt="" />
// // //       </div>
// // //       <div className="products--list">
// // //         {productsEl.map((product) => (
// // //           <Link key={product.id} to={product.id} className="product--link">
// // //             <div key={product.id} className="products--tile">
// // //               <img className="the--products--images" src={product.imageUrl} alt={product.name} />
// // //               <div className="products--info">
// // //                 <h3>{product.name}</h3>
// // //               </div>
// // //             </div>
// // //           </Link>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // import React, { useState, useEffect } from "react";
// // import { getProducts } from "./api";
// // import { Link } from 'react-router-dom';
// // import ProductModal from "./ProductModal";

// // export default function Products() {
// //   const [productsEl, setProductsEl] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);
// //   const [selectedProduct, setSelectedProduct] = useState(null);

// //   useEffect(() => {
// //     async function loadProductsEl() {
// //       setLoading(true);
// //       try {
// //         const data = await getProducts();
// //         setProductsEl(data);
// //       } catch (err) {
// //         setError(err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     }

// //     loadProductsEl();
// //   }, []);

// //   const openModal = (product) => {
// //     setSelectedProduct(product);
// //   };

// //   const closeModal = () => {
// //     setSelectedProduct(null);
// //   };

// //   return (
// //     <div>
// //       <div className="products--banner--container">
// //         <img className="products--banner--image" src="banner3.png" alt="" />
// //       </div>
// //       <div className="products--list">
// //         {productsEl.map((product) => (
// //           <div key={product.id} className="products--tile" onClick={() => openModal(product)}>
// //             <img className="the--products--images" src={product.imageUrl} alt={product.name} />
// //             <div className="products--info">
// //               <h3>{product.name}</h3>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //       {selectedProduct && (
// //         <ProductModal product={selectedProduct} onClose={closeModal} />
// //       )}
// //     </div>
// //   );
// // }


// import React, { useState, useEffect } from "react";
// import { getProducts } from "./api";
// import { Link } from 'react-router-dom';
// import ProductModal from "./ProductModal";

// export default function Products() {
//   const [productsEl, setProductsEl] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 10; // Change this value as needed

//   useEffect(() => {
//     async function loadProducts() {
//       setLoading(true);
//       try {
//         const data = await getProducts();
//         setProductsEl(data);
//       } catch (err) {
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     }

//     loadProducts();
//   }, []);

//   const openModal = (product) => {
//     setSelectedProduct(product);
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//   };

//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = productsEl.slice(indexOfFirstProduct, indexOfLastProduct);

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div>
//       <div className="products--banner--container">
//         <img className="products--banner--image" src="banner3.png" alt="" />
//       </div>
//       <div className="products--list">
//         {currentProducts.map((product) => (
//           <div key={product.id} className="products--tile" onClick={() => openModal(product)}>
//             <img className="the--products--images" src={product.imageUrl} alt={product.name} />
//             <div className="products--info">
//               <h3>{product.name}</h3>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="pagination">
//         {Array.from({ length: Math.ceil(productsEl.length / productsPerPage) }, (_, index) => (
//           <button key={index + 1} onClick={() => paginate(index + 1)}>
//             {index + 1}
//           </button>
//         ))}
//       </div>
//       {selectedProduct && (
//         <ProductModal product={selectedProduct} onClose={closeModal} />
//       )}
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { getProducts } from "./api";
import { Link } from 'react-router-dom';
import ProductModal from "./ProductModal";

export default function Products({ addToCart, openCartModal }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="products--banner--container">
        <img className="products--banner--image" src="banner3.png" alt="" />
      </div>
      <div className="products--list">
        {currentProducts.map((product) => (
          <div key={product.id} className="products--tile" onClick={() => openModal(product)}>
            <img className="the--products--images" src={product.imageUrl} alt={product.name} />
            <div className="products--info">
              <h3>{product.name}</h3>
              <p>{product.price}$</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeModal} onAddToCart={addToCart} />
      )}
    </div>
  );
}
