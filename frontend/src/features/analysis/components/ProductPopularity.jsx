import React from "react";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Brand",
    selector: row => row.brand,
  },
  {
    name: "Rating",
    selector: row => row.rating,
  }
]
const data = [
  {
    brand: "Face Mask",
    rating: 4,
  },
  {
    brand: "Cleanser",
    rating: 2.2,
  },
  {
    brand: "Eye cream",
    rating: 0.2,
  },  
  {
    brand: "Sun protection",
    rating: 4.5,
  },  
  {
    brand: "Eye cream",
    rating: 3.5,
  },    
]
function ProductPopularity() {
  return (
    <DataTable 
    columns={columns}
    data={data}/>
  );
  }
  
  export default ProductPopularity;