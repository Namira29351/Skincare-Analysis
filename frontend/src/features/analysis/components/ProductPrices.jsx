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
    price: 2.2,
  },
  {
    product: "Eye cream",
    price: 0.2,
  },  
  {
    product: "Sun protection",
    price: 4.5,
  },  
  {
    product: "Eye cream",
    price: 3.5,
  },    
]
function ProductPrices() {
  return (
    <div>
      <h1>Different Products and Their Prices</h1>
      <DataTable 
      columns={columns}
      data={data}/>
    </div>
  );
  }
  
  export default ProductPrices;