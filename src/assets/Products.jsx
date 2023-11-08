import React, { useState, useEffect } from "react";
import { getVans } from "./api";

export default function Products() {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVans();
        setVans(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadVans();
  }, []);

  return (
    <div className="van-list">
      {vans.map((van) => (
        <div key={van.id} className="van-tile">
          <img src={van.imageUrl} alt={van.name} />
          <div className="van-info">
            <h3>{van.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}