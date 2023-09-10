import { createContext,useState } from 'react';

const initialItems = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

const TaskContext = createContext();
// [...task, setTasks]
//  1. read the state: tasks
// 2. clone it
// 3. add the new task (id, name) to the clone using push/... 
// 4. use setTasks to redefine te tasks list using the modified clone from step (3) 

const TaskContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState(initialItems);

    // const addTask = (task) => {
    //     setTasks([...tasks, task]);
    // };

    return(
        <TaskContext.Provider value = {{tasks, setTasks}}>
            {children}
        </TaskContext.Provider>
    );

};



export  {TaskContext, TaskContextProvider};