import React, {useState} from 'react'
import './ToDo.css'

function ToDoList(){
    
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [count, setCount] = useState(0);

    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks);
    }

    function doneTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks);
        setCount(count+1)
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks=[...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1],updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length-1){
            const updatedTasks=[...tasks];
            [updatedTasks[index+1], updatedTasks[index]] = [updatedTasks[index],updatedTasks[index+1]]
            setTasks(updatedTasks)
        }
    }

    return(
        <div className='to-do-list'>
            <h1>To-Do-List</h1>
            <h2>Finished Tasks: {count} </h2>
            <div>
                <input
                    type='text'
                    placeholder='Enter a task'
                    value={newTask}
                    onChange={handleInputChange}/>
                    <button 
                        className='add-button'
                        onClick={addTask}>
                        Add
                    </button>
            </div>
            <ol>
                {tasks.map((task, index) => 
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button 
                        className='delete-button'
                        onClick={() => deleteTask(index)}>
                        Delete
                    </button>
                    <button 
                        className='move-button'
                        onClick={() => moveTaskUp(index)}>
                        Up
                    </button>
                    <button 
                        className='move-button'
                        onClick={() => moveTaskDown(index)}>
                        Down
                    </button>
                    <button
                        className='delete-button'
                        onClick={() => doneTask(index)}>
                        Done
                    </button>
                </li>
                )}
            </ol>
        </div>
    );
}

export default ToDoList