import React from 'react'
import TodoProps from '../interfaces/TodoProps'

export default class Todo extends React.Component<TodoProps> {
    public render() {
        return (
            <div className="todo">
                <li className="todo-item">{ this.props.todo.text }</li>
                <button className="complete-btn"><i className="fas fa-check"></i></button>
                <button className="trash-btn"><i className="fas fa-trash"></i></button>
            </div>
        )
    }
}