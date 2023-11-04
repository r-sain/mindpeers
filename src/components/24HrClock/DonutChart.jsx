import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DonutChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const hourData = Array.from({ length: 24 }, (_, hour) => ({
    hour,
    active: Math.random() < 0.5,
  }));

  useEffect(() => {
    const ctx = chartRef.current;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const activeColors = hourData.map(hour =>
      hour.active ? '#af8dff' : '#4c4c4c'
    );

    chartInstance.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: hourData.map(hour => 1),
            backgroundColor: activeColors,
            borderColor: activeColors,
            borderWidth: 0,
          },
        ],
      },
      options: {
        cutout: '80%',
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }, [hourData]);

  return (
    <div className="donut-chart-container">
      <canvas ref={chartRef} width="200" height="200"></canvas>
    </div>
  );
};

export default DonutChart;
