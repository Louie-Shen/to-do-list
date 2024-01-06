import './TaskItem.css';
import React, { useState } from 'react';

const TaskItem = ({ task }) => {

    // Checking if checkbox is checked
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const listItemClasses = isChecked ? 'listItem checked' : 'listItem notChecked'


    // Checking if options button is pressed to drop down menu
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const closeDropdown = () => {
        setDropdownVisible(false);
    };


    return (
        <ul className = {listItemClasses}>
            <input type="checkbox" 
            checked={isChecked}
            onChange={handleCheckboxChange}/>
            {task}
            <form>
                <label className = "options" for='options'>Extra Options:</label>
                <select className = "options" id='options' name='extraOptions'>
                    <option value="Due Date">Due Date</option>
                    <option value="Time Needed">Time Needed</option>
                </select>
            </form>
            
        </ul>
        
    );
};

export default TaskItem;