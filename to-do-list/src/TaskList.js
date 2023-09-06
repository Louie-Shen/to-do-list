import "./TaskList.css"
import tasks from "./AddList"
function TaskList() {

  return (
    <div className="TaskList">
      <header className="App-header">
        <ul>
          {tasks.map((item, index) => (
            <li key={index}>
              {item} 
              <input type="checkbox" /> 
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
  
}

export default TaskList;
