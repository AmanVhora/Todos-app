import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export const filters = {
  all: 'All',
  completed: 'Completed',
  active: 'Active'
}

const todosAdapter = createEntityAdapter()
const initialState = todosAdapter.getInitialState({
  status: filters.all
})

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
    filterTodos(state, action) {
      state.status = action.payload
    },
  }
})

export const { addedTodo, deletedTodo, toggleIsCompletedTodo, markAllCompletedTodos, clearCompletedTodos, filterTodos } = todosSlice.actions

export default todosSlice.reducer 

export const {
  selectAll: selectAllTodos,
} = todosAdapter.getSelectors(state => state.todos)
