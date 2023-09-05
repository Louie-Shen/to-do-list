import "./AddList.css"
import "./TaskList"
import ListItems from "./ListItems"
import React, { useState } from 'react';


function AddList() {
    const [isButtonPressed, setIsButtonPressed] = useState(false);
    const handleButtonClick = () => {
        setIsButtonPressed(true);
    };




    return (
      <div className="AddList">
        
        <header className="Add-Listing">
          <h3><input type = "button" value = "Add new task" onClick={handleButtonClick}/>
          {isButtonPressed ? ListItems.push("new task") : null}
          </h3>
        </header>
      </div>
    );
  }
  
  export default AddList;