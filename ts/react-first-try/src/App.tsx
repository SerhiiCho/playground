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

    public render() {
        return (
            <div className="App">
                <header>
                    <h1>Serhii's Todo List {this.state.inputText}</h1>
                </header>

                <Form todos={this.state.todos}
                    inputText={this.state.inputText}
                    addTodo={this.addTodo}
                    setInputText={this.setInputText}
                />

                <TodoList todos={this.state.todos} />
            </div>
        )
    }
}