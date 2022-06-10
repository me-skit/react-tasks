import React, { useState } from 'react';
import TaskForm from './TaskForm';
import Task from './Task'
import "../stylesheets/TaskList.css";

function TaskList() {

  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    console.log(task);
    task.text = task.text.trim();
    if (task.text) {
      const updatedTasks = [task, ...tasks]
      setTasks(updatedTasks);
    }
  };
  
  return (
    <>
      <TaskForm onSubmit={addTask} />
      <div className='task-list-container'>
        {
          tasks.map(task => 
            <Task
              key={task.id}
              id={task.id}
              text={task.text} 
              isCompleted={task.completed}
            />
          )
        }
      </div>
    </>
  );
}

export default TaskList;