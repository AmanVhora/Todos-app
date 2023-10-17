import { useDispatch } from "react-redux"
import { clearCompletedTodos, filterTodos, filters, markAllCompletedTodos } from "./todosSlice"

export const FilterTodos = () => {
  const dispatch = useDispatch()
  return(
    <fieldset className="border rounded-2 px-3 mt-5">
      <legend className="float-none w-auto px-2 mb-0">Filters:</legend>
      <div className="d-flex mb-2">
        <div>
          <div className="filter-button">
            <button className="btn text-light border-2" onClick={() => dispatch(markAllCompletedTodos())}>Mark as all completed</button>
          </div>
          <div className="filter-button">
            <button className="btn text-light border-2" onClick={() => dispatch(clearCompletedTodos())}>Clear completed</button>
          </div>
        </div>

        <div className="ms-5">
          <div className="filter-button">
            <button className="btn text-light border-2" onClick={() => dispatch(filterTodos(filters.all))}>All</button>
          </div>
          <div className="filter-button">
            <button className="btn text-light border-2" onClick={() => dispatch(filterTodos(filters.completed))}>Completed</button>
          </div>
          <div className="filter-button">
            <button className="btn text-light border-2" onClick={() => dispatch(filterTodos(filters.active))}>Active</button>
          </div>
        </div>
      </div>
    </fieldset>
  )
}
