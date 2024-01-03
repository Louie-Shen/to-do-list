import React from 'react';

const TaskItem = ({ task }) => {
    return (
        <ul><input type="checkbox"/>{task}</ul>
    );
};

export default TaskItem;