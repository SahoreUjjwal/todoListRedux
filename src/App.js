import TodoForm from "./components/ToDoForm/ToDoForm";
import TodoList from "./components/ToDoList/ToDoList";

import './App.css';

function App() {
  return (
    <div>
      <h1>To Do App</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
