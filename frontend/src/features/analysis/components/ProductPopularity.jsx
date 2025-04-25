import React from "react";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Product",
    selector: row => row.product,
  },
  {
    name: "Rating",
    selector: row => row.rating,
  }
]
const data = [
  {
    product: "Face Mask",
    rating: 4,
  },
  {
    product: "Cleanser",
    rating: 2.2,
  },
  {
    product: "Eye cream",
    rating: 0.2,
  },  
  {
    product: "Sun protection",
    rating: 4.5,
  },  
  {
    product: "Eye cream",
    rating: 3.5,
  },    
]
function ProductPopularity() {
  return (
    <div>
      <h1>Different Products and Their Popularity</h1>
      <DataTable 
      columns={columns}
      data={data}/>
    </div>
  );
  }
  
  export default ProductPopularity;