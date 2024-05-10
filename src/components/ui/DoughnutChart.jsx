import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "chartjs-plugin-datalabels"; // Import the datalabels plugin

const HalfDoughnutChart = () => {
  const chartRef = useRef();
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Ignored", "Delayed", "Taken"],
        datasets: [
          {
            data: [50, 25, 25],
            backgroundColor: ["#F94144", "#F3722C", "#F8961E"],
            borderWidth: 0,
          },
        ],
      },
      options: {
        cutoutPercentage: 50,
        tooltips: { enabled: false },
        hover: { mode: null },
        legend: { display: false },
        animation: { animateRotate: true },
        elements: {
          arc: {
            borderWidth: 0,
          },
        },
        plugins: {
          datalabels: {
            formatter: (value, context) => {
              return (
                context.chart.data.labels[context.dataIndex] +
                ": " +
                value +
                "%"
              );
            },
            color: "#fff",
            font: {
              weight: "bold",
            },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default HalfDoughnutChart;
