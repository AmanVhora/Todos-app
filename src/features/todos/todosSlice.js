import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const todosAdapter = createEntityAdapter()
const initialState = todosAdapter.getInitialState()

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addedTodo: todosAdapter.addOne,
    deletedTodo: todosAdapter.removeOne,
  }
})

export const { addedTodo, deletedTodo } = todosSlice.actions

export default todosSlice.reducer 

export const {
  selectAll: selectAllTodos,
} = todosAdapter.getSelectors(state => state.todos)
