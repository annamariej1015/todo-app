
import './App.css';
import TodoComponent from './components/Todo';
import InputComponent from './components/Input';
import AlertComponent from './components/Alert';

const App =() => {
  return (
    <div className="App">
      <h2>ToDo App</h2>

      <AlertComponent />
      <TodoComponent />
      <InputComponent />

    </div>
  );
}

export default App;
