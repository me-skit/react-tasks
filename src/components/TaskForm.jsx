import React, { useState } from 'react';
import "../stylesheets/TaskForm.css";
import { v4 as uuidv4 } from 'uuid';

function TaskForm(props) {

  const [input, setInput]=useState('');

  const handleChange = event => {
    setInput(event.target.value);
  };

  const submitTask = event => {
    event.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
    }

    props.onSubmit(newTask);
    event.target.firstChild.value = '';
  };

  return (
    <form
      className='task-form'
      onSubmit={submitTask}>
      <input
        className='task-input'
        type='text'
        placeholder='Write a task'
        name='text'
        onChange={handleChange}
      />
      <button className='task-button'>Add Task</button>
    </form>
  );
}

export default TaskForm;
