import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "./api";

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const data = await getProductById(id);
                setProduct(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [id]);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>Error fetching product: {error.message}</h1>;
    }

    if (!product) {
        return <h1>Product not found</h1>;
    }

    return (
            <div>
                <h1>{product ? product.name : "Loading..."}</h1>
                <img src={product ? product.imageUrl : "placeholder.jpg"} alt={product ? product.name : "Loading..."} />
                {/* Render other product details here */}
            </div>
    );
}

