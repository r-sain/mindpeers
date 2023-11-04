import './clockChartStyles.css';
import digitsImg from '../../assets/digits.png';
import crossImg from '../../assets/cross.png';
import DonutChart from './DonutChart';
function ClockChart() {
  return (
    <div id="clock__chart">
      <div className="digits">
        <img src={digitsImg} alt="digits" />
      </div>
      <div className="chart">
        <DonutChart />
      </div>
      <div className="cross">
        <img src={crossImg} alt="cross" />
      </div>
    </div>
  );
}

export default ClockChart;
