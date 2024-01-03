import "./AddList.css"
import React, {useState} from 'react';
import TaskItem from './TaskItem'

function AddList() {
  const [displayList, setDisplayList] = useState([]);
  const [taskText, setTaskText] = useState('');

  const handleInputChange = (event) => {
    setTaskText(event.target.value);
  };

  const addTask = () => {
    console.log('Task added: ', taskText);
    setDisplayList([...displayList, taskText])
    console.log('Display List:', displayList);
    setTaskText('');
  }



    return (
      <div className="AddList">
          {displayList.map((task, index) => 
          <TaskItem key={index} task={task} />
        )}
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