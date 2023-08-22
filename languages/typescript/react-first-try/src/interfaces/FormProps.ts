import Todo from './Todo'

export default interface FormProps {
    todos: Todo[]
    inputText: string
    addTodo: (todo: Todo) => void
    setInputText: (text: string) => void
}