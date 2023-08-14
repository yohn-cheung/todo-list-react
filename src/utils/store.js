'use client'

import React, {createContext, useState} from "react";
const StoreContext = createContext()

function StoreProvider({children}) {
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

	const [todos, setTodos] = useState(tasks);

	return (
		<StoreContext.Provider 
			value={{
        todos,
        setTodos
      }}
		>
			{children}
		</StoreContext.Provider>
	)
}

export {StoreContext, StoreProvider}
