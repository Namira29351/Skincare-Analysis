import React from "react";
import BarChart from "./charts/BarChart";

const BrandPopularityGraph = () => {
    return (
      <div>
        <h1 style={{ width: "73%", height:"40px", padding:"0px", float: "right" }}>This is the brand popularity graph</h1>
        <BarChart />
      </div> 
      )
    };

    export default BrandPopularityGraph;