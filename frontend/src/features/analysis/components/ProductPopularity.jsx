import React, { useState, useEffect } from "react";

function ProductPopularity() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
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

   if (loading) return <div>Loading</div>;
   if (error) return <div>Error: {error}</div>;

   return (

    <div style={{ width: "100%", height:"20px", padding:"0px", float:"right" }}>
      <h1 style={{ width: "62%", height:"60px", padding:"0px", float:"right" }}>Product Popularity</h1>
      <table style={{ width: "100%", borderCollapse: "collapse"}}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>
              Product
            </th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>
              Popularity
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
          <tr key={idx}>
            <td style={{ border: "1px solid #ccc", padding: "8px"}}>{item.Product}</td>
            <td style={{ border: "1px solid #ccc", padding: "8px"}}>{item.Popularity}</td>
          </tr>))}
        </tbody>
      </table>
    </div>
   )
}

  export default ProductPopularity;