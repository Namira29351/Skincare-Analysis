import React from "react";
import PieChart from "./charts/PieChart";

const ProductPopularityGraph = () => {
    return (
      <div>
        <h1 style={{ width: "74%", height:"40px", padding:"0px", float: "right" }}>This is the product popularity graph</h1>
        <PieChart />
      </div> 
      )
    };

    export default ProductPopularityGraph;