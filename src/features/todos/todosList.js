import React from "react";
import { deletedTodo, selectAllTodos, toggleIsCompletedTodo } from "./todosSlice";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoForm } from './addTodoForm';

export const TodosList = () => {
  let todos = useSelector(selectAllTodos)
  const dispatch = useDispatch()

  const renderedTodos = todos.map(todo => (
    <li key={todo.id} className="mb-3" style={{listStyle: 'none'}}>
      <div className="d-flex justify-content-between">
        <div className="d-flex w-75 fs-5">
          <input className="form-check-input" type="checkbox" value="" onClick={() => dispatch(toggleIsCompletedTodo({todoId: todo.id, isCompleted: todo.isCompleted}))} />
          <p key={todo.id} className="ms-3 my-0" style={{wordWrap: 'break-word'}}>{todo.todoDescription}</p>
        </div>
        <div>
          <button className="btn btn-danger" type="button" onClick={() => dispatch(deletedTodo(todo.id))}>Delete Todo</button>
        </div>
      </div>
    </li>
  ))

  return (
    <section>
      <AddTodoForm />
      <fieldset className="border rounded-2 px-3 mt-5 fs-4">
        <legend className="float-none w-auto px-2">Your Todos:</legend>
        <ul className="ps-2">{renderedTodos}</ul>
      </fieldset>
    </section>
  )
}