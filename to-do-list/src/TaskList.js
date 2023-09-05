import "./TaskList.css"

function TaskList() {
  const ListItems = [];

  return (
    <div className="TaskList">
      <header className="App-header">
        <ul>{
        ListItems.map((item, index) => (
          <ul key={index}> {item} <input type = "checkbox"/> </ul>
        ))}
        <hr/>
          </ul>
      </header>
    </div>
  );
}

export default TaskList;
