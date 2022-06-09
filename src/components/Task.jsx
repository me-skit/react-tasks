import React from 'react';
import '../stylesheets/Task.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Task({ id, text, isCompleted, completeTask, deleteTask }) {
  return (
    <div className={isCompleted ? 'task-container completed' : 'task-container'}>
      <div
        className='task-text'
        onClick={() => completeTask(id)}>
        {text}
      </div>
      <div
        className='task-icons-container'
        onClick={() => deleteTask(id)}>
        <AiOutlineCloseCircle className='task-icon' />
      </div>
    </div>
  );
}

export default Task;
