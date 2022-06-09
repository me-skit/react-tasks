import React, { useState } from 'react';
import TaskForm from './TaskForm';
import Task from './Task'
import "../stylesheets/TaskList.css";

function TaskList() {

  const [tasks, setTasks] = useState([]);

  
  return (
    <>
      <TaskForm />
      <div className='task-list-container'>
        {
          tasks.map(task => 
            <Task
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