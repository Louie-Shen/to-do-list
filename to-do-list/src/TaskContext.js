import { createContext } from 'react';

const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    return(
        <TaskContext.Provider value = {{tasks, addTask}}>
            {children}
        </TaskContext.Provider>
    );
    
};



export default TaskContext;