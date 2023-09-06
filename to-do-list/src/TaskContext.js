import { createContext,useState } from 'react';

const initialItems = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

const TaskContext = createContext();

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