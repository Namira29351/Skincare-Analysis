
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const productData = [
  { product: "MOISTURIZER", rating: 4.3 },
  { product: "CLEANSER", rating: 4.1},
  { product: "TREATMENT", rating: 1.3 },
  { product: "FACE MASK", rating: 2.1 },
  { product: "EYE CREAM", rating: 0.4 },
  { product: "FACE MASK", rating: 3.1 },
  { product: "FACE MASK", rating: 5.0 },
  { product: "EYE CREAM", rating: 3.8 },
];

const PieChart = () => {
  const labels = productData.map((item) => item.product);
  const avgRating = productData.map((item) => item.rating);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Rating",
        data: avgRating,
        backgroundColor: avgRating.map((value) => {
          if (value <= 1) return "rgba(215, 163, 252, 0.77)";
          if (value <= 2) return "rgba(255, 160, 209, 0.77)";
          if (value <= 3) return "rgba(134, 182, 255, 0.77)";
          if (value <= 4) return "rgba(129, 250, 200, 0.77)"; 
          if (value <= 5) return "rgba(255, 255, 153, 0.77)"; 
        }),
        borderColor: "rgba(59, 53, 57, 0.77)",
        borderWidth: 1,
      },
    ],
  };

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

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;