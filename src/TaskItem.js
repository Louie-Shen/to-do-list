import './TaskItem.css';
import React, { useState } from 'react';
import Options from './options.js';

const TaskItem = ({ task }) => {

    // Checking if checkbox is checked
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const listItemClasses = isChecked ? 'listItem checked' : 'listItem notChecked'

    return (
        <ul className = {listItemClasses}>
            <input type="checkbox" 
            checked={isChecked}
            onChange={handleCheckboxChange}/>
            {task}
            {/* <form>
                <label className = "options" for='options'>Extra Options:</label>
                <select className = "options" id='options' name='extraOptions'>
                    <option value="Due Date">Due Date</option>
                    <option value="Time Needed">Time Needed</option>
                </select>
            </form> */}
            <Options />
        </ul>
        
    );
};

export default TaskItem;