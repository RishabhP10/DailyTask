import { useEffect, useState } from 'react';
import './App.css';

import { Header } from './components/Header';
import { TaskAdd } from './components/TaskAdd';
import { TaskShow } from './components/TaskShow';


function App() {

  const [tasklist , setTasklist] = useState(JSON.parse(localStorage.getItem("tasklist")) || []);
  const [task , setTask] = useState({})

  useEffect(() => {
    localStorage.setItem("tasklist" , JSON.stringify(tasklist))
  } , [tasklist]);


  return (
    <div className="App">
      <Header />
      <TaskAdd 
        tasklist={tasklist} 
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
      <TaskShow 
        tasklist={tasklist} 
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      
      />
    </div>
  );
}

export default App;
