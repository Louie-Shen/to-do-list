// Options.js
import React, { useState } from 'react';

function Options({ isChecked }) {
  const DropdownInput = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };

    return (
      <div>
        <label htmlFor="options">Extra Options: </label>
        <select id="options" onChange={handleOptionChange} value={selectedOption}>
          <option value="">Select...</option>
          <option value="date">Due Date</option>
          <option value="time">Time Needed</option>
        </select>

        {/* Render input based on selected option */}
        {selectedOption === 'date' && <input type="date" />}
        {selectedOption === 'time' && <input type="number" placeholder='minutes to finish task' />}
      </div>
    );
  };

  return <DropdownInput />;
}

export default Options;
