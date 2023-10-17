import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const todosAdapter = createEntityAdapter()
const initialState = todosAdapter.getInitialState()

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addedTodo: todosAdapter.addOne,
    deletedTodo: todosAdapter.removeOne,
    toggleIsCompletedTodo(state, action) {
      const { todoId, isCompleted } = action.payload
      const todo = state.entities[todoId]
      todo.isCompleted = !isCompleted
    },
  }
})

export const { addedTodo, deletedTodo, toggleIsCompletedTodo } = todosSlice.actions

export default todosSlice.reducer 

export const {
  selectAll: selectAllTodos,
} = todosAdapter.getSelectors(state => state.todos)
