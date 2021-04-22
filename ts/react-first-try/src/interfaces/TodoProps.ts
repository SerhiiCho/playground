import Todo from './Todo'

export default interface TodoProps {
    todo: Todo
    removeTodo: (todo: Todo) => void
    completeTodo: (todo: Todo) => void
}