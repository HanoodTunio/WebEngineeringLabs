import { useState } from "react";
import './ToDoList.css';


function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        const updateTasks = tasks.filter((element, i) => i !== index);
        setTasks(updateTasks);
    }

    return(
    <div className="to-do-list">
        <h1>To Do List</h1>

        <div>
            <input 
                type="text" 
                placeholder="Enter Task..." 
                 value={newTask} 
                onChange={handleInputChange}
            />

            <button className="add-button" onClick={addTask}> 
                Add
            </button>
        </div>

        <ol>
            {tasks.map((task, index)=>

                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                </li>

            )}
        </ol>

    </div>
    )
}

export default ToDoList;