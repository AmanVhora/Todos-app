import { AddTodoForm } from './addTodoForm';
import { FilterTodos } from "./filterTodos";
import { TodoItems } from "./todoItems";

export const TodosList = () => {
  return (
    <section>
      <AddTodoForm />
      <TodoItems />
      <FilterTodos />
    </section>
  )
}
