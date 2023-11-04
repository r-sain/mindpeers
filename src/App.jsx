import './App.css';
import Clock from './components/24HrClock/Clock.jsx';
import leftArrow from './assets/arrow.png';
import AboutDropdown from './components/AboutDropdown.jsx';
import { FcInfo } from 'react-icons/fc';
import { AiFillClockCircle } from 'react-icons/ai';
import FrequencySelector from './components/FrequencySelector.jsx';
import DataTable from './components/DataTable.jsx';
function App() {
  return (
    <div className="App">
      <div className="heading">
        <div className="arrow">
          <img src={leftArrow} alt="arrow" />
        </div>
        <div className="head__text">Flow Zone</div>
      </div>
      <div className="about__dropdown">
        <AboutDropdown />
      </div>
      <div className="flow__peak__visuals">
        <div className="flow__top">
          <div className="flow__head">
            Flow Peaks
            <span>
              <FcInfo color="#59bfff" size={22} />
            </span>
          </div>
          <div className="flow__dropdown">
            <FrequencySelector />
          </div>
        </div>
        <div className="flow__chart__container">
          <Clock />
        </div>
        <div className="flow__peak__timings">
          <div className="myflow">
            <div className="flow__head">My Flow Peaks</div>
            <div className="flow__time">
              <span>
                <AiFillClockCircle color="#F14658" />
              </span>
              <span>02PM - 08PM</span>
            </div>
          </div>
          <div className="globalflow">
            <div className="flow__head">Global Flow Peaks</div>
            <div className="flow__time">
              <span>
                <AiFillClockCircle color="#F14658" />
              </span>
              <span>02PM - 08PM</span>
            </div>
          </div>
        </div>
      </div>
      <div className="thriving__toolkit">
        <div className="thriving__head">My Thriving Toolkit</div>
        <div className="thriving__table">
          <DataTable />
        </div>
      </div>
    </div>
  );
}

export default App;
