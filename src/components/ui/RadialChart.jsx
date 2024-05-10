import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js";
import "chartjs-plugin-datalabels"; // Import the datalabels plugin

const RadialChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const chart = new Chart(ctx, {
      type: "pie",
      data: {
        datasets: [
          {
            data: [54, 26, 20],
            backgroundColor: ["#F94144", "#F3722C", "#F8961E"],
            borderWidth: 0,
          },
        ],
        labels: ["Ignored", "Delayed", "Taken"], // Example labels
      },
      options: {
        tooltips: { enabled: false },
        hover: { mode: null },
        legend: {
          display: true,
          position: "bottom",
          labels: {
            usePointStyle: true,
          },
        },
        animation: { animateRotate: true },
        elements: {
          arc: {
            borderWidth: 0,
          },
        },
        plugins: {
          datalabels: {
            color: "white", // Set the label text color to white
            font: {
              size: 16,
              weight: "bold",
            },
            formatter: (value) => `${value}%`, // Display the value as a percentage
            borderDash: [2, 2],
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default RadialChart;
