import { useState } from 'react';
import './frequencySelectorStyles.css';

const FrequencySelector = () => {
  const options = ['Daily', 'Weekly', 'Monthly', 'Yearly'];
  const [selectedOption, setSelectedOption] = useState('Weekly');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionClick = option => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div
      className="frequency__selector"
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
    >
      <div className="selected__option">{selectedOption}</div>
      {isDropdownOpen && (
        <ul className="options">
          {options.map(option => (
            <li key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FrequencySelector;
