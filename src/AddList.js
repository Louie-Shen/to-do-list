import "./AddList.css"
import React, { useState} from 'react';


function AddList() {
  const [taskText, setTaskText] = useState('');

  const handleInputChange = (event) => {
    setTaskText(event.target.value);
  };

  const addTask = () => {
    console.log('Task added: ', taskText);
    setTaskText('');
  }



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