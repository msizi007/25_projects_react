import './App.css';
import { useState } from 'react';


function App(props) {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  return (
    <>
      <div className="addTask">
        <input onChange={(e) => {return setNewTask(e.target.value)}}/>
        <button onClick={() => {return setTodoList([...todoList, newTask])}}>Add Task</button>
      </div>

      <div className="list">
        {todoList.map((task, key) => {
          return <p key={key} onClick={()c}>{task}</p>
        })}
      </div>
    </>
  );
}

export default App;
