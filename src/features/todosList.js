import React from "react";
import { deletedTodo, selectAllTodos } from "./todos/todosSlice";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoForm } from './todos/addTodoForm';

export const TodosList = () => {
  const todos = useSelector(selectAllTodos)
  const dispatch = useDispatch()

  const renderedTodos = todos.map(todo => (
    <li key={todo.id} className="mb-3">
      <div className="d-flex justify-content-between">
        <p key={todo.id} className="w-75 m-0" style={{wordWrap: 'break-word'}}>{todo.todoDescription}</p>
        <div><button className="btn btn-danger" type="button" onClick={() => dispatch(deletedTodo(todo.id))}>Delete Todo</button></div>
      </div>
    </li>
  ))

  return (
    <section>
      <AddTodoForm />
      <fieldset className="border rounded-2 px-3 mt-5 fs-4">
        <legend className="float-none w-auto px-2">Your Todos</legend>
        <ol>{renderedTodos}</ol>
      </fieldset>
    </section>
  )
}
