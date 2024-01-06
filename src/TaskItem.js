import './TaskItem.css';
import React, { useState } from 'react';

const TaskItem = ({ task }) => {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <ul className = 'listItem'>
            <input type="checkbox" 
            checked={isChecked}
            onChange={handleCheckboxChange}/>
            {task}
            <p>{isChecked ? 'Checked' : 'Not Checked'}</p>
        </ul>
        
    );
};

export default TaskItem;