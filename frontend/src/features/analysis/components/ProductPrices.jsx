import React from "react";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Product",
    selector: row => row.product,
  },
  {
    name: "Price",
    selector: row => row.price,
  }
]
const data = [
  {
    product: "Face Mask",
    price: 4,
  },
  {
    product: "Cleanser",
    price: 22,
  },
  {
    product: "Eye cream",
    price: 20,
  },  
  {
    product: "Sun protection",
    price: 45,
  },  
  {
    product: "Eye cream",
    price: 35,
  },    
]
function ProductPrices() {
  return (
    <div>
      <h1 style={{ width: "73%", height:"40px", padding:"0px", float: "right" }}>Different Products and Their Prices</h1>
      <DataTable 
      columns={columns}
      data={data}/>
    </div>
  );
  }
  
  export default ProductPrices;