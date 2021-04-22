import Todo from './Todo'

export default interface FormProps {
    setInputText: React.Dispatch<React.SetStateAction<string>>
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    todos: Todo[]
    inputText: string
}