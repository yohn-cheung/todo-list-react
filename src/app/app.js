import React from 'react'
import InputBar from '@/components/InputBar'
import TodoList from '@/components/TodoList'



function App() {
  return (
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7">
              <div className="card rounded-3">
                <div className="card-body p-4">

                  <h4 className="text-center my-3 pb-3">To Do App</h4>
									<InputBar />
									<TodoList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default App