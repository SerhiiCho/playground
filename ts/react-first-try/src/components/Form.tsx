import React from 'react'
import FormProps from '../interfaces/FormProps'
import Todo from '../interfaces/Todo'

export default function Form(props: FormProps) {
    function inputTextHandler(e: React.FormEvent<HTMLInputElement>): void {
        const target = e.target as HTMLInputElement
        props.setInputText(target.value)
    }

    function submitTodoHandler(e: React.FormEvent<HTMLButtonElement>): void {
        e.preventDefault()

        const todo: Todo = {
            id: Math.random() * 1000,
            text: props.inputText,
            completed: false,
        }

        if (props.inputText === '') {
            return
        }

        props.addTodo(todo)
        props.setInputText('')
    }

    return (
        <form>
            <input value={props.inputText} onChange={inputTextHandler} type="text" className="todo-input" />

            <button className="todo-button" type="submit" onClick={submitTodoHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
        </form>
    )
}