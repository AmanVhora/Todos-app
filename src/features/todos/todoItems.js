import { deletedTodo, filters, selectAllTodos, toggleIsCompletedTodo } from "./todosSlice";
import { useDispatch, useSelector } from "react-redux";

export const TodoItems = () => {
  const todos = useSelector(selectAllTodos)
  const filter = useSelector(state => state.todos.status)
  const dispatch = useDispatch()
  
  const filteredTodo = () => {
    if (filter === filters.completed) {
      return todos.filter(todo => todo.isCompleted)
    } else if (filter === filters.active) {
      return todos.filter(todo => !todo.isCompleted)
    } else {
      return todos
    }
  }

  const renderedTodos = filteredTodo().map(todo => (
    <li key={todo.id} className="mb-3" style={{listStyle: 'none'}}>
      <div className="d-flex justify-content-between">
        <div className="d-flex w-75 fs-5 my-auto">
          <input className="form-check-input" type="checkbox" value="" checked={todo.isCompleted} onChange={() => dispatch(toggleIsCompletedTodo({todoId: todo.id, isCompleted: todo.isCompleted}))} />
          <p key={todo.id} className="ms-3 my-0" style={{wordWrap: 'break-word'}}>{todo.todoDescription}</p>
        </div>
        <div>
          <button className="btn btn-danger" type="button" onClick={() => dispatch(deletedTodo(todo.id))}>Delete Todo</button>
        </div>
      </div>
    </li>
  ))

  return (
    <fieldset className="border rounded-2 px-3 mt-5 fs-4">
      <legend className="float-none w-auto px-2">Your Todos:</legend>
      <ul className="ps-2">{renderedTodos}</ul>
    </fieldset>
  )
}
