import { colorFilters, deletedTodo, filters, selectAllTodos, setTodoColor, toggleIsCompletedTodo } from "./todosSlice";
import { useDispatch, useSelector } from "react-redux";

export const TodoItems = () => {
  const todos = useSelector(selectAllTodos)
  const filter = useSelector(state => state.todos.status)
  const colors = useSelector(state => state.todos.colors)
  const dispatch = useDispatch()
  
  const filteredTodo = () => {
    if (filter === filters.completed && colors.length === 0) {
      return todos.filter(todo => todo.isCompleted)
    } else if (filter === filters.completed && colors.length > 0) {
      return todos.filter(todo => todo.isCompleted && colors.includes(todo.color))
    } else if (filter === filters.active && colors.length === 0) {
      return todos.filter(todo => !todo.isCompleted)
    } else if (filter === filters.active && colors.length > 0) {
      return todos.filter(todo => !todo.isCompleted && colors.includes(todo.color))
    } else if (colors.length > 0){
      return todos.filter(todo => colors.includes(todo.color))
    } else {
      return todos
    }
  }

  const handleColorChanged = (todoId) => (e) => {
    const color = e.target.value
    dispatch(setTodoColor({ todoId: todoId, color: color }))
  }

  const colorOptions = colorFilters.map(color => (
    <option key={color} value={color} style={{color: color}}>{color}</option>
  ))
  
  const renderedTodos = filteredTodo().map(todo => (
    <li key={todo.id} className="mb-3 fs-5" style={{listStyle: 'none'}}>
      <div className="d-flex justify-content-between">
        <div className="d-flex w-75 my-auto">
          <input className="form-check-input" type="checkbox" value="" checked={todo.isCompleted} onChange={() => dispatch(toggleIsCompletedTodo({todoId: todo.id, isCompleted: todo.isCompleted}))} />
          <p key={todo.id} className="ms-3 my-0" style={{wordWrap: 'break-word'}}>{todo.todoDescription}</p>
        </div>
        <div className="d-flex my-auto">
          <select className="form-select" style={{color: todo.color}} onChange={handleColorChanged(todo.id)} value={todo.color}>
            <option value=""></option>
            {colorOptions}
          </select>
          <button className="btn btn-danger ms-3 w-75" type="button" onClick={() => dispatch(deletedTodo(todo.id))}>Delete</button>
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
