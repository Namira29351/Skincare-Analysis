import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend); 

function PieChartProduct () {
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
        const response = await fetch("/api/v1/ProductPrices")
        if (!response.ok) {
          throw new Error(`HTTP error! Status: {response.status}`)
        }
        const data = await response.json()
        const formattedData = {
          labels: data.map((item) => item.Product),
          datasets: [
            {
              label: "Product Price",
              data: data.map((item) => item.Price),
              backgroundColor: data.map((item) => {
                const value = item.Price;
                if (value <= 40) return "rgba(215, 163, 252, 0.77)";
                if (value <= 50) return "rgba(255, 160, 209, 0.77)";
                if (value <= 60) return "rgba(134, 182, 255, 0.77)";
                if (value <= 70) return "rgba(129, 250, 200, 0.77)"; 
                if (value <= 80) return "rgba(255, 255, 153, 0.77)";
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
        text: "Products and their prices",
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

export default PieChartProduct;