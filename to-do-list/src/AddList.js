import "./AddList.css"
import React, { useState, useContext } from 'react';
import { TaskContext } from './TaskContext';


function AddList() {
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
            <input type = "text" value = 'louie'></input>
            <input type = "button" value = "New task" onClick={null}/>
            </h3>
        </header>
      </div>
    );
  }
  
  export default AddList;