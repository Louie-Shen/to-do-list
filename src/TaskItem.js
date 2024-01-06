import './TaskItem.css';
import React, { useState } from 'react';

const TaskItem = ({ task }) => {

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
            <p>{isChecked ? 'Checked' : 'Not Checked'}</p>
        </ul>
        
    );
};

export default TaskItem;