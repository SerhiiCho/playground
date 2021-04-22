import React from 'react'
import TodoProps from '../interfaces/TodoProps'

export default class Todo extends React.Component<TodoProps> {
    private deleteTodoHandler = (): void => {
        this.props.removeTodo(this.props.todo)
    }

    private completeTodoHandler = () => {
        this.props.completeTodo(this.props.todo)
    }

    public render() {
        return (
            <div className="todo">
                <li className={`todo-item ${this.props.todo.completed ? 'completed' : ''}`}>{ this.props.todo.text }</li>
                <button className="complete-btn" onClick={this.completeTodoHandler}><i className="fas fa-check"></i></button>
                <button className="trash-btn" onClick={this.deleteTodoHandler}><i className="fas fa-trash"></i></button>
            </div>
        )
    }
}