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
            {!isChecked && <Options />}
            
        </ul>
        
    );
};

export default TaskItem;