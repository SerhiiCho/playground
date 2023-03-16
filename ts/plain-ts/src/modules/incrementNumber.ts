export default (elem: Element, btn: HTMLButtonElement) => {
    btn.addEventListener('click', () => {
        const rawValue = elem.textContent

        if (!rawValue) {
            return
        }

        let number = parseInt(rawValue, 10)

        if (isNaN(number)) {
            return
        }

        number += 1

        elem.textContent = number.toString()
    })
}