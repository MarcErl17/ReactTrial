import { useEffect, useState } from 'react'

import bgImage from './assets/img.jpg' 

import { TodoForm } from '../@/components/TodoForm'
import { TodoList } from '../@/components/TodoList'
import { Card, CardContent, CardHeader, CardTitle } from '../@/components/ui/card'

const STORAGE_KEY = 'todos'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      setTodos(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))

    document.title = todos.length > 0 ? `(${todos.length}) Todos` : 'Todos'
  }, [todos])

  function addTodo(title) {
    setTodos([...todos, { id: Date.now(), title }])
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <main 
      className="flex min-h-svh items-center justify-center bg-cover bg-center bg-no-repeat p-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Card className="w-full max-w-md bg-white/15 backdrop-blur-lg border border-white/30 shadow-2xl text-white">
        <CardHeader>
          <CardTitle className="text-white text-center text-xl font-semibold tracking-wide">
            Simple Todo List
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <TodoForm onAdd={addTodo} />
          <TodoList todos={todos} onDelete={deleteTodo} />
        </CardContent>
      </Card>
    </main>
  )
}

export default App