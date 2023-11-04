import { useState } from 'react';
import './aboutDropdownStyles.css';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const AboutDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const loremIpsum = `This Is For
  Curious Minds
  It's 2023: Still doubting yourself?
  Measure & discover your mental strengths today?
  Let us join hands.`;

  return (
    <div
      className="custom__div"
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
    >
      <div className="div__header">
        <span>About Flow Zone</span>
        <span id="dd__icon">
          {isDropdownOpen ? (
            <IoIosArrowUp size={25} color="#B2FFDA" />
          ) : (
            <IoIosArrowDown size={25} color="#B2FFDA" />
          )}
        </span>
      </div>
      {isDropdownOpen && <div className="dropdown__content">{loremIpsum}</div>}
    </div>
  );
};

export default AboutDropdown;
