"use client"
import Image from 'next/image'
import styles from './page.module.css'

import React, {useEffect, useState} from 'react'

// import TodoList from '@/components/Todolist'

export default function Home() {
  const tasks = [{
    id: 1,
    task: 'Test 1',
    completed: false
  },{
    id: 2,
    task: 'Test 2',
    completed: false
  }, {
    id: 3,
    task: 'Test 3',
    completed: true
  }]

  const [todos, setTodos] = useState(tasks)
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
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7">
              <div className="card rounded-3">
                <div className="card-body p-4">

                  <h4 className="text-center my-3 pb-3">To Do App</h4>

                  <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                    <div className="col-12">
                      <div className="">
                        <input 
                          type="text"
                          id="form1" 
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
                      >Save</button>
                    </div>
                  </form>

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

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
 
  )
}
