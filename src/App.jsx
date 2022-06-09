import './App.css';
import Task from './components/Task'
import TaskForm from './components/TaskForm'

function App() {
  return (
    <div className="App">
      <div className='task-list'>
        <h1>My Tasks</h1>
        <TaskForm />
        <Task text='Learn React'/>
      </div>
    </div>
  );
}

export default App;
