import './App.css'
import Form from './components/Form'
import TodoList from './components/TodoList'
import { useState } from 'react'
import Todo from './interfaces/Todo'

export default function App() {
    const [inputText, setInputText] = useState('')
    const [todos, setTodos] = useState<Todo[]>([])

    return (
        <div className="App">
            <header>
                <h1>Serhii's Todo List {inputText}</h1>
            </header>
            <Form setInputText={setInputText} todos={todos} setTodos={setTodos} inputText={inputText} />
            <TodoList />
        </div>
    )
}