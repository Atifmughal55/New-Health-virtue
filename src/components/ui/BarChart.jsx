import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BarChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Ignored",
            data: [50, 37.5, 25, 65, 50, 100, 40, 25, 40, 30, 60, 36],
            backgroundColor: "#F94144",
          },
          {
            label: "Delayed",
            data: [
              59.1, 95.4, 7.2, 88.6, 38.9, 64.2, 27.5, 50.1, 81.7, 15.6, 3.8,
              69.2,
            ],
            backgroundColor: "#90BE6D",
          },
          {
            label: "Taken",
            data: [
              17.4, 49.8, 92.3, 60.5, 82.1, 37.6, 71.9, 3.6, 45.8, 88.7, 23.4,
              10.1,
            ],
            backgroundColor: "#2D9CDB",
          },
        ],
      },
      options: {
        scales: {
          x: {
            grid: {
              display: true,
            },
          },
          y: {
            ticks: {
              callback: function (value) {
                return value + "%";
              },
            },
            grid: {
              display: true,
            },
          },
        },
        plugins: {
          legend: {
            display: true,
            position: "bottom",
            labels: {
              usePointStyle: true,
            },
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

export default BarChart;
