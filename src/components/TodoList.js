import React, {useContext} from 'react';
import { StoreContext } from '../utils/store'

function TodoList() {
	const {todos, setTodos} = useContext(StoreContext)
	const deleteTask = (id) => {
    const removeTaskFromList = todos.filter(item => item.id !== id);
    const updatedList = updatedTaskIDs(removeTaskFromList)
    setTodos(updatedList)
  }

  const completeTask = (id) => {
   const todoRecordPrevious = todos.find(function (record) {
      return record.id === id;
    });

    const todoRecordUpdated = {
      ...todoRecordPrevious,
      completed: !todoRecordPrevious.completed,
    };

    const todosDataNew = todos.map(function (record) {
      return record.id === id ? todoRecordUpdated : record;
    });

    setTodos(todosDataNew);
  }

  const updatedTaskIDs = (todosList) => {
    for (let index = 0; index < todosList.length; index++) {
      todosList[index].id = index +1;
    }
    return todosList
  }
	
	return (
    <table className="table mb-4">
      <thead>
        <tr>
          <th scope="col">No.</th>
          <th scope="col">Task</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
			<tbody>
      {
        todos.map(todo => 
          <tr key={todo.id}>
            <th scope="row">{todo.id}</th>
              <td>{todo.task}</td>
              <td>
                <button 
                  type="submit" 
                  className="btn btn-danger" 
                  disabled={todo.completed !== false ? false : true}
                  onClick={() => deleteTask(todo.id)}
                >
                  <span className="bi bi-trash"></span>
                </button>
                <button 
                  type="submit" 
                  className="btn btn-success ms-1"  
                  disabled={todo.completed === false ? false : true}
                  onClick={() => completeTask(todo.id)}
                >
                  <i className="bi bi-check-circle"></i>
                </button>
              </td>
             </tr>
            )
          }
      </tbody>
    </table>

		
	)

}

export default TodoList;