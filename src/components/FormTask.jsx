import React from 'react';

function TaskForm(props) {
  return (
    <form className='task-form'>
      <input
        className='task-input'
        type='text'
        placeholder='Wroite a task'
        name='text'
      />
      <button className='task-button'>Add Task</button>
    </form>
  );
}

export default TaskForm;
