import React from 'react'
import FormProps from '../interfaces/FormProps'
import Todo from '../interfaces/Todo'

export default class Form extends React.Component<FormProps> {
    private inputTextHandler = (e: React.FormEvent<HTMLInputElement>): void => {
        const target = e.target as HTMLInputElement
        this.props.setInputText(target.value)
    }

    private submitTodoHandler = (e: React.FormEvent<HTMLButtonElement>): void => {
        e.preventDefault()

        const todo: Todo = {
            id: Math.random() * 1000,
            text: this.props.inputText,
            completed: false,
        }

        this.props.addTodo(todo)
        this.props.setInputText('')
    }

    public render() {
        return (
            <form>
                <input value={this.props.inputText} onChange={this.inputTextHandler} type="text" className="todo-input" />

                <button className="todo-button" type="submit" onClick={this.submitTodoHandler}>
                    <i className="fas fa-plus-square"></i>
                </button>

                <div className="select">
                    <select name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        )
    }
}