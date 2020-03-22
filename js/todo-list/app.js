const addItemBtn = document.querySelector('.add-item')
const list = document.querySelector('.collection')
const input = document.querySelector('input[type=text]')

list.addEventListener('click', e => {
    if (e.target.className === 'btn-small red right') {
        e.target.parentNode.remove()
    }
})

addItemBtn.addEventListener('click', () => {
    let li = document.createElement('li')
    let titleSpan = document.createElement('span')
    let link = document.createElement('a')

    li.classList.add('collection-item')
    link.setAttribute('class', 'btn-small red right')
    link.appendChild(document.createTextNode('delete'))
    titleSpan.appendChild(document.createTextNode(input.value))

    li.appendChild(titleSpan)
    li.appendChild(link)

    list.appendChild(li)
    input.focus()
})