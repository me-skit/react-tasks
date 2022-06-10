import React, { useState } from 'react';
import TaskForm from './TaskForm';
import Task from './Task'
import "../stylesheets/TaskList.css";

function TaskList() {

  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    task.text = task.text.trim();
    if (task.text) {
      const updatedTasks = [task, ...tasks]
      setTasks(updatedTasks);
    }
  };

  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id != id);
    setTasks(updatedTasks);
  };

  const completeTask = id => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }

      return task;
    });

    setTasks(updatedTasks);
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
              completeTask={completeTask}
              deleteTask={deleteTask} />
          )
        }
      </div>
    </>
  );
}

export default TaskList;