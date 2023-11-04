import React from 'react';
import { FaLocationDot, FaPeopleGroup } from 'react-icons/fa6';
import { PiChartLineUpBold } from 'react-icons/pi';
import { IoGameController } from 'react-icons/io5';
import { RiApps2Fill, RiFileVideoFill } from 'react-icons/ri';
import './dataTableStyles.css';

const data = [
  '',
  'For You',
  'Globally',
  'Games',
  'Explore',
  'Memory Game',
  'Tools',
  'Affirmation',
  'Thought Guides',
  'Lessons',
  'Lorem Ipsum',
  'Lorem Ipsum',
  'Clubs',
  'Lorem Ipsum',
  'Lorem Ipsum',
];

const IconTable = () => {
  const iconMap = {
    'For You': <FaLocationDot color="rgb(241, 70, 88)" />,
    Globally: <PiChartLineUpBold color="rgb(241, 70, 88)" size={15} />,
    Games: <IoGameController color="#d9816b" size={15} />,
    Tools: <RiApps2Fill color="#d9816b" size={15} />,
    Lessons: <RiFileVideoFill color="#d9816b" size={15} />,
    Clubs: <FaPeopleGroup color="#d9816b" size={15} />,
  };

  return (
    <div className="div-table">
      {data.map((item, index) => (
        <div key={index} className="table-cell">
          {item === 'Explore' ? (
            <a href="https://drive.google.com/file/d/1UuPs6bAxD8opiDnpTiMNVcnhzIZfZUM7/view?usp=sharing">
              {item}
            </a>
          ) : (
            <>
              {iconMap[item]} {item}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default IconTable;
