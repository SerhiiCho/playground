import './style.css'
import incrementNumber from './modules/incrementNumber'

const el = document.getElementById('number') as Element | null
const btn = document.getElementById('btn') as HTMLButtonElement | null

if (el && btn) {
    incrementNumber(el, btn)
}