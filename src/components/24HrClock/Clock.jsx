import ClockChart from './ClockChart';
import './clock.css';

function Clock() {
  return (
    <div className="clock">
      <div className="clock__chart__left">
        <div className="evening">Evening</div>
      </div>
      <div className="clock__chart__middle">
        <div className="night">Night</div>
        <div className="charts">
          <ClockChart />
        </div>
        <div className="afternoon">Afternoon</div>
      </div>
      <div className="clock__chart__right">
        <div className="morning">Morning</div>
      </div>
    </div>
  );
}

export default Clock;
