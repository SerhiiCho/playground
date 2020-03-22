export default class {
    private name: string

    public constructor(name: string) {
        this.name = name
    }

    get getFirst(): string {
        let split = this.name.split(' ')
        return split.length > 0 ? split[0] : ''
    }

    get getLast(): string {
        let split = this.name.split(' ')
        return split.length >= 2 ? split[1] : ''
    }
}