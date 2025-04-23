import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title, 
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const brandData = [
  { brand: "DRUNK ELEPHANT", rating: 4.3 },
  { brand: "LA MER", rating: 4.1},
  { brand: "IT COSMETICS", rating: 1.3 },
  { brand: "JOSIE MARAN", rating: 2.1 },
  { brand: "LANIEGE", rating: 0.4 },
  { brand: "TATCHA", rating: 3.1 },
  { brand: "CLINIQUE", rating: 5.0 },
  { brand: "DRUNK ELEPHANT", rating: 3.8 },
];

const BarChart = () => {
  const labels = brandData.map((item) => item.brand);
  const avgRating = brandData.map((item) => item.rating);

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
        text: "Brands and their ratings",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Ratings",
        },
      },
      x: {
        title: {
          display: true,
          text: "Brands",
        },
      },
    },
  };

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
