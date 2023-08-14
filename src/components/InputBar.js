import React, {useState, useContext} from 'react'
import { StoreContext } from '../utils/store'

function InputBar () {
	const {todos, setTodos} = useContext(StoreContext)
  const [inputTask, setInputTask] = useState('')

  const handleChange = (event) => {
    setInputTask(event.target.value);
  } 

  const addTask = (event) => {
    event.preventDefault()
    setInputTask('')
    setTodos((prev) => [
			...prev,
			{
				id: todos.length + 1,
				task: inputTask,
				completed: false,
			},
		]);
  }  

  return (
		<form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
   		<div className="col-12">
        <div>
          <input 
            type="text"
            className="form-control"
            placeholder='Enter a task here' 
            value={inputTask}
            onChange={handleChange} />
        </div>
        </div>
        <div className="col-12">
          <button 
            type="submit" 
            className="btn btn-primary" 
            onClick={addTask} 
            disabled={inputTask.length === 0 ? true : false}
          >
            <span className="bi bi-file-earmark-plus"></span>
          </button>
        </div>
    </form>
	)
}

export default InputBar