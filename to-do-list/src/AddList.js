import "./AddList.css"
import React, { useState } from 'react';



function AddList() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    setTasks([...tasks, taskText]);
    setTaskText("");
  };



    return (
      <div className="AddList">
        
        <header className="Add-Listing">
          <h3>
            <input type = "text" value = {taskText}></input>
            <input type = "button" value = "New task" onClick={addTask}/>
            </h3>
        </header>
      </div>
    );
  }
  
  export default AddList;