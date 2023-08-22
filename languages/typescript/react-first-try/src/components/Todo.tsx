import TodoProps from '../interfaces/TodoProps'

export default function Todo(props: TodoProps) {
    function deleteTodoHandler(): void {
        props.removeTodo(props.todo)
    }

    function completeTodoHandler(): void {
        props.completeTodo(props.todo)
    }

    return (
        <div className="todo">
            <li className={`todo-item ${props.todo.completed ? 'completed' : ''}`}>{ props.todo.text }</li>
            <button className="complete-btn" onClick={completeTodoHandler}><i className="fas fa-check"></i></button>
            <button className="trash-btn" onClick={deleteTodoHandler}><i className="fas fa-trash"></i></button>
        </div>
    )
}