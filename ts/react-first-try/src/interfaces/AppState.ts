import { TodoStatus } from '../types'
import Todo from './Todo'

export default interface AppState {
    inputText: string
    todos: Todo[]
    filteredTodos: Todo[]
    status: TodoStatus
}