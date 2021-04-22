import Todo from './Todo'
import { TodoStatus } from '../types'

export default interface FormProps {
    todos: Todo[]
    inputText: string
    addTodo: (todo: Todo) => void
    setInputText: (text: string) => void
    changeStatus: (status: TodoStatus) => void
}