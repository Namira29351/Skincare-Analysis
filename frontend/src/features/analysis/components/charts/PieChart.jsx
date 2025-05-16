
// import React from 'react';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Pie } from 'react-chartjs-2';

// ChartJS.register(ArcElement, Tooltip, Legend);

// const productData = [
//   { product: "MOISTURIZER", rating: 4.3 },
//   { product: "CLEANSER", rating: 4.1},
//   { product: "TREATMENT", rating: 1.3 },
//   { product: "FACE MASK", rating: 2.1 },
//   { product: "EYE CREAM", rating: 0.4 },
//   { product: "FACE MASK", rating: 3.1 },
//   { product: "FACE MASK", rating: 5.0 },
//   { product: "EYE CREAM", rating: 3.8 },
// ];

// const PieChart = () => {
//   const labels = productData.map((item) => item.product);
//   const avgRating = productData.map((item) => item.rating);

//   const chartData = {
//     labels: labels,
//     datasets: [
//       {
//         label: "Rating",
//         data: avgRating,
//         backgroundColor: avgRating.map((value) => {
//           if (value <= 1) return "rgba(215, 163, 252, 0.77)";
//           if (value <= 2) return "rgba(255, 160, 209, 0.77)";
//           if (value <= 3) return "rgba(134, 182, 255, 0.77)";
//           if (value <= 4) return "rgba(129, 250, 200, 0.77)"; 
//           if (value <= 5) return "rgba(255, 255, 153, 0.77)"; 
//         }),
//         borderColor: "rgba(59, 53, 57, 0.77)",
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       title: {
//         display: true,
//         text: "Products and their ratings",
//       },
//     },
//   };

//   return (
//     <div style={{ width: "70%", height:"525px", padding:"10px", float: "right" }}>
//       <Pie data={chartData} options={options} />
//     </div>
//   );
// };

// export default PieChart;

import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend); 

function PieChart () {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("/api/v1/ProductPopularity")
        if (!response.ok) {
          throw new Error(`HTTP error! Status: {response.status}`)
        }
        const data = await response.json()
        const formattedData = {
          labels: data.map((item) => item.Product),
          datasets: [
            {
              label: "Product Popularity",
              data: data.map((item) => item.Popularity),
              backgroundColor: data.map((item) => {
                const value = item.Popularity;
                if (value <= 1) return "rgba(215, 163, 252, 0.77)";
                if (value <= 2) return "rgba(255, 160, 209, 0.77)";
                if (value <= 3) return "rgba(134, 182, 255, 0.77)";
                if (value <= 4) return "rgba(129, 250, 200, 0.77)"; 
                if (value <= 5) return "rgba(255, 255, 153, 0.77)";
                return "rgba(126, 0, 35, 0.6)"; 
              }),
              borderColor: "rgba(149, 198, 244, 0.77)",
              borderWidth: 1,
            },

          ],
        };
        setChartData(formattedData)
      } catch (err) {
        setError(err.message);
        console.error("Error fetching data: ", err)
      } finally {
        setLoading(false)
      }
  
    }
    fetchData();

  }, [])
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Products and their ratings",
      },
    },
  };


  if (loading) {
    return <div>Loading chart</div>
  }
  if (error) {
    return <div>Error while loading: {error}</div>
  }
  return (
    <div style={{ width: "70%", height:"525px", padding:"10px", float: "right" }}>
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;