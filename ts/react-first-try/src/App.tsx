import React from 'react'
import './App.css'
import Form from './components/Form'
import TodoList from './components/TodoList'
import AppState from './interfaces/AppState'
import Todo from './interfaces/Todo'

export default class App extends React.Component {
    state: AppState = {
        inputText: '',
        todos: [],
    }

    public addTodo = (todo: Todo): void => {
        this.setState({ todos: [...this.state.todos, todo] })
    }

    public setInputText = (text: string): void => {
        this.setState({ inputText: text })
    }

    public removeTodo = (todo: Todo): void => {
        const newTodos: Todo[] = this.state.todos.filter(el => el.id !== todo.id)
        this.setState({ todos: newTodos })
    }

    public completeTodo = (todo: Todo): void => {
        const newTodos: Todo[] = this.state.todos.map(el => {
            if (el.id === todo.id) {
                el.completed = !el.completed
            }

            return el
        })
        this.setState({ todos: newTodos })
    }

    public render() {
        return (
            <div className="App">
                <header><h1>Serhii's Todo List</h1></header>

                <Form todos={this.state.todos}
                    inputText={this.state.inputText}
                    addTodo={this.addTodo}
                    setInputText={this.setInputText}
                />

                <TodoList todos={this.state.todos}
                    removeTodo={this.removeTodo}
                    completeTodo={this.completeTodo}
                />
            </div>
        )
    }
}