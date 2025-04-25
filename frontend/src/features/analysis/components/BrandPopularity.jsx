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
    brand: "DRUNK ELEPHANT",
    rating: 4.2,
  },
  {
    brand: "LA MER",
    rating: 0.2,
  },
  {
    brand: "IT COSMETICS",
    rating: 1.2,
  },  
  {
    brand: "IT COSMETICS",
    rating: 4.2,
  },  
  {
    brand: "TATCHA",
    rating: 1.2,
  },    
]
function BrandPopularity() {
  return (
    <div>
      <h1>Different Brands and Their Popularity</h1>
      <DataTable 
      columns={columns}
      data={data}/>
    </div>
  );
  }
  
  export default BrandPopularity;