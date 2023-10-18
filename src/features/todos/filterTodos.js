import { useDispatch } from "react-redux"
import { clearCompletedTodos, colorFilters, filterTodos, filterTodosByColor, filters, markAllCompletedTodos } from "./todosSlice"

export const FilterTodos = () => {
  const dispatch = useDispatch()

  const filterColorsList = colorFilters.map(color => (
    <div className="mt-2" key={color}>
      <label style={{color: `${color}`}}>
        <input type="checkbox" value="" className="form-check-input me-3" onChange={() => dispatch(filterTodosByColor(color))} />{color}
      </label>
    </div>
  ))

  return(
    <fieldset className="border rounded-2 px-3 mt-5">
      <legend className="float-none w-auto px-2 mb-0">Filters:</legend>
      <div className="d-flex justify-content-between mb-2">
        <div>
          <p className="fs-5 mx-3 my-2" style={{color: '#b5cde5'}}>Actions</p>
          <div className="action">
            <button className="btn text-light border-2" onClick={() => dispatch(markAllCompletedTodos())}>Mark as all completed</button>
          </div>
          <div className="action">
            <button className="btn text-light border-2" onClick={() => dispatch(clearCompletedTodos())}>Clear completed</button>
          </div>
        </div>

        <div>
          <p className="fs-5 mx-3 my-2" style={{color: '#b5cde5'}}>Filter by status</p>
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

        <div>
          <p className="fs-5 my-2" style={{color: '#b5cde5'}}>Filter by colors</p>
          {filterColorsList}
        </div>
      </div>
    </fieldset>
  )
}
