import './App.css'
import Form from './components/Form'
import TodoList from './components/TodoList'

export default function App() {
    return (
        <div className="App">
            <header>
                <h1>Serhii's Todo List</h1>
            </header>
            <Form />
            <TodoList />
        </div>
    )
}