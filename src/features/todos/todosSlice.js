import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export const filters = {
  all: 'All',
  completed: 'Completed',
  active: 'Active'
}

export const colorFilters = ['Blue', 'Green', 'Red', 'Orange', 'Purple']

const todosAdapter = createEntityAdapter()
const initialState = todosAdapter.getInitialState({
  status: filters.all,
  colors: [],
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
    setTodoColor(state, action) {
      const { todoId, color } = action.payload
      const todo = state.entities[todoId]
      todo.color = color
    },
    filterTodosByColor(state, action) {
      const color = action.payload
      const colors = state.colors
      if (colors.includes(color)) {
        colors.splice(colors.indexOf(color), 1)
      } else {
        colors.push(color)
      }
    },
  }
})

export const { addedTodo, deletedTodo, toggleIsCompletedTodo, markAllCompletedTodos, clearCompletedTodos, filterTodos, setTodoColor, filterTodosByColor } = todosSlice.actions

export default todosSlice.reducer 

export const {
  selectAll: selectAllTodos,
} = todosAdapter.getSelectors(state => state.todos)
