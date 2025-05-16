import React from "react";
import PieChartProduct from "./charts/PieChartProduct";

const ProductPricesGraph = () => {
    return (
      <div>
        <h1 style={{ width: "70%", height:"40px", padding:"0px", float: "right" }}>This is the product prices graph</h1>
        <PieChartProduct />
      </div> 
      )
    };

    export default ProductPricesGraph;