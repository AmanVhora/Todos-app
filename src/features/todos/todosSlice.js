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
    markAllCompletedTodos(state, action) {
      Object.values(state.entities).forEach(todo => todo.isCompleted = true)
    },
    clearCompletedTodos(state, action) {
      const completedTodoIds = Object.values(state.entities).filter(todo => todo.isCompleted === true).map(todo => todo.id)
      todosAdapter.removeMany(state, completedTodoIds)
    },
  }
})

export const { addedTodo, deletedTodo, toggleIsCompletedTodo, markAllCompletedTodos, clearCompletedTodos } = todosSlice.actions

export default todosSlice.reducer 

export const {
  selectAll: selectAllTodos,
} = todosAdapter.getSelectors(state => state.todos)
