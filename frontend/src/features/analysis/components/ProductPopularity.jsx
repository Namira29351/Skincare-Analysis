import React, { useState, useEffect } from "react";

function ProductPopularity() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null)
      try {
        const response = await fetch("/api/v1/ProductPopularity")
        if (!response.ok) {
          throw new Error(`HTTP error! Status: {response.status}`)
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching data: ", err)
      } finally {
        setLoading(false)
      }
    }
    fetchData();
  }, []) 

  if (loading) return <div>Loading</div>
  if (error) return <div>Error: {error}</div>;

  return (
    <div></div>
  )
}