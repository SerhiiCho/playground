import Todo from './Todo'

export default interface TodoListProps {
    todos: Todo[]
    removeTodo: (todo: Todo) => void
    completeTodo: (todo: Todo) => void
}