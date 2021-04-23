import React, { useState } from 'react'
import './App.css'
import Form from './components/Form'
import TodoList from './components/TodoList'
import Todo from './interfaces/Todo'

export default function App() {
    const [inputText, setInputText] = useState('')
    const [todos, setTodos] = useState<Todo[]>([])

    function addTodo(todo: Todo): void {
        setTodos([...todos, todo])
    }

    function removeTodo(todo: Todo): void {
        const newTodos: Todo[] = todos.filter(el => el.id !== todo.id)
        setTodos(newTodos)
    }

    function completeTodo(todo: Todo): void {
        const newTodos: Todo[] = todos.map(el => {
            if (el.id === todo.id) {
                el.completed = !el.completed
            }

            return el
        })

        setTodos(newTodos)
    }

    return (
        <div className="App">
            <header><h1>Serhii's Todo List</h1></header>

            <Form todos={todos}
                inputText={inputText}
                addTodo={addTodo}
                setInputText={setInputText}
            />

            <TodoList todos={todos}
                removeTodo={removeTodo}
                completeTodo={completeTodo}
            />
        </div>
    )
}