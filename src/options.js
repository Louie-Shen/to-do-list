// Options.js
import React, { useState } from 'react';

function Options() {
  const DropdownInput = () => {
    const [selectedOption, setSelectedOption] = useState(null);

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

          {/* checking for which dropdown selected for input type */}
          {selectedOption === 'date' && <input type="date" />}
          {selectedOption === 'time' && <input type="time" />}
        </select>
      </div>
    );
  };

  return <DropdownInput />; // Return the DropdownInput component
}

export default Options;
