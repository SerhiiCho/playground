import FormProps from '../interfaces/FormProps'
import Todo from '../interfaces/Todo'

export default function Form ({ setInputText, setTodos, todos, inputText }: FormProps) {
    function inputTextHandler(e: React.FormEvent<HTMLInputElement>): void {
        const target = e.target as HTMLInputElement
        setInputText(target.value)
    }

    function submitTodoHandler(e: React.FormEvent<HTMLButtonElement>): void {
        e.preventDefault()

        const todo: Todo = {
            id: Math.random() * 1000,
            text: inputText,
            completed: false,
        }

        setTodos([...todos, todo])
        setInputText('')
    }

    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />

            <button className="todo-button" type="submit" onClick={submitTodoHandler}>
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