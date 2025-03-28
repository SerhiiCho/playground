import TodoListProps from '../interfaces/TodoListProps'
import Todo from './Todo'

export default function TodoList(props: TodoListProps) {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                { props.todos.map(todo => (
                    <Todo todo={todo}
                        key={todo.id}
                        removeTodo={props.removeTodo}
                        completeTodo={props.completeTodo}
                    />
                ))}
            </ul>
        </div>
    )
}
