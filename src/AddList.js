import "./AddList.css"
import React, { useState, useContext } from 'react';
import { TaskContext } from './TaskContext';


function AddList() {
  const [taskText, setTaskText] = useState('');

  const handleInputChange = (event) => {
    setTaskText(event.target.value);
  };

  const addTask = () => {
    console.log('Task added: ', taskText);
    setTaskText('');
  }
  // const { tasks, setTasks } = useContext(TaskContext);
  
  // const [tasks, setTasks] = 
  // useState([]);
  // const [taskText, setTaskText] = useState('');

  // const addTask = () => {
  //   setTasks([...tasks, taskText]);
  //   setTaskText("");
  // };



    return (
      <div className="AddList">
        
        <header className="Add-Listing">
          <h3>
            <input type = "text" value = {taskText} onChange={handleInputChange} placeholder="Enter new task"></input>
            <input type = "button" value = "New task" onClick={addTask}/>
            </h3>
        </header>
      </div>
    );
  }
  
  export default AddList;