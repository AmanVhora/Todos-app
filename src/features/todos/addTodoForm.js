import React, { useState } from "react";
import { addedTodo } from "./todosSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

export const AddTodoForm = () => {
  const dispatch = useDispatch()
  const [todoDescription, setTodoDescription] = useState('')
  const onTodoChanged = (e) => setTodoDescription(e.target.value)

  const onAddTodoClicked = () => {
    if (todoDescription) {
      dispatch(
        addedTodo({
          id: nanoid(),
          todoDescription,
          isCompleted: false,
          color: '',
        })
      )
      setTodoDescription('')
    }
  }

  return (
    <section>
      <form>
        <fieldset className="border rounded-2 px-3 pb-3">
          <legend className="float-none w-auto px-2">Add Todo:</legend>
          <div className="d-flex">
            <input
              className="form-control"
              id="todoDescription"
              type="text"
              name="todoDescription"
              value={todoDescription}
              onChange={onTodoChanged}
              placeholder="What you want to do?"
            />     
            <button className="btn btn-primary ms-3" type="submit" onClick={onAddTodoClicked} disabled={!todoDescription}>Add</button>
          </div>
        </fieldset>
      </form>
    </section>
  )
}
