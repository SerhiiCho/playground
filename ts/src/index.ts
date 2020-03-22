import {names} from './names'

class Home {
    private target: HTMLInputElement
    private suffix: number

    public constructor(target: HTMLInputElement, suffix: number) {
        this.target = target
        this.suffix = suffix
    }

    public insert(text: string) {
        this.target.innerHTML = text + this.suffix
    }
}

const text = names('Serhii', 'Anna')
const suffix = 22
const target = document.getElementById('target')! as HTMLInputElement

new Home(target, suffix).insert(text)
