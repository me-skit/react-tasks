import React from 'react';
import '../stylesheets/Task.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Task({ text }) {
  return (
    <div className='task-container'>
      <div className='task-text'>
        {text}
      </div>
      <div className='task-icons-container'>
        <AiOutlineCloseCircle className='task-icon' />
      </div>
    </div>
  );
}

export default Task;
