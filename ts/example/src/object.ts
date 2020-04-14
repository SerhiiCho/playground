interface Person {
    name: string
    age: number
    getInfo: Function,
}

const person: Person = {
    name: 'Mikel',
    age: 25,
    getInfo: (): string => {
        return `The name is ${person.name} and age is ${person.age}`
    },
}

export default person