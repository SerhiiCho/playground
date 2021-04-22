import React from 'react'
import FormProps from '../interfaces/FormProps'
import Todo from '../interfaces/Todo'
import { TodoStatus } from '../types'

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

        if (this.props.inputText === '') {
            return
        }

        this.props.addTodo(todo)
        this.props.setInputText('')
    }

    private changeTodoStatusHandler = (e: React.FormEvent<HTMLSelectElement>) => {
        const target = e.target as HTMLSelectElement
        const value = target.value
        const validStatuses = ['all', 'completed', 'uncompleted']

        if (!validStatuses.includes(value)) {
            throw new Error('Selected value must be ' + validStatuses.join(' '))
        }

        this.props.changeStatus(value as TodoStatus)
    }

    public render() {
        return (
            <form>
                <input value={this.props.inputText} onChange={this.inputTextHandler} type="text" className="todo-input" />

                <button className="todo-button" type="submit" onClick={this.submitTodoHandler}>
                    <i className="fas fa-plus-square"></i>
                </button>

                <div className="select">
                    <select name="todos" className="filter-todo" onChange={this.changeTodoStatusHandler}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        )
    }
}