import "./TaskList.css"
import { TaskContext } from './TaskContext';
import { useContext,useState } from 'react';


function TaskList() {

  const { tasks } = useContext(TaskContext);

  return (
    <div>

    <ul>
      {tasks.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>


    </div>
    // <div className="TaskList">
    //   <header className="App-header">
    //     <ul>
    //       {tasks.map((item, index) => (
    //         <li key={index}>
    //           {item} 
    //           <input type="checkbox" /> 
    //         </li>
    //       ))}
    //     </ul>
    //   </header>
    // </div>
  );
  
}

export default TaskList;
