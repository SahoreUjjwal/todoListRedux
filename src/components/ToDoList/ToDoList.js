import "./ToDoList.css";
import { useDispatch, useSelector } from "react-redux";
import {actions} from "../../redux/reducers/todoReducer";
function ToDoList() {
  const todos = useSelector((state)=>state.todoReducer.todos); 
  const dispatch = useDispatch();
  return (
    <div className="container">
    <ul>
      {todos && todos.map((todo,index) => (
        <li key={todo.id}>
          <span className="content">{todo.text}</span>
          <span className={todo.completed ? 'completed':'pending'}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          onClick={()=>{dispatch(actions.toggle(index))}}
          >Toggle</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;
