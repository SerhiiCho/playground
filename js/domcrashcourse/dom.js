let itemList = document.querySelector('#items')
let dblButton = document.querySelector('.dbl-click')
let box = document.querySelector('.box')
let input = document.querySelector('input[type=text]')
let button = document.querySelector('input[type=submit]')

// First and last child
itemList.firstElementChild.style.color = 'darkgreen'
itemList.firstElementChild.style.fontWeight = 'bold'

itemList.lastElementChild.style.color = 'brown'
itemList.lastElementChild.style.fontWeight = 'bold'

// Siblings
itemList.previousElementSibling.style.color = 'purple'

// Events
itemList.addEventListener('mouseover', e => {
    if (e.target.classList.contains('list-group-item')) {
        e.target.style.transform = 'translateX(57px)'
    }
})

itemList.addEventListener('mouseout', e => {
    if (e.target.classList.contains('list-group-item')) {
        e.target.style.transform = 'translateX(0)'
    }
})

dblButton.addEventListener('dblclick', e => {
    setTimeout(() => {
        e.target.classList.remove('btn-danger')
        e.target.classList.add('btn-dark')
    }, 1000);
    e.target.classList.add('btn-danger')
    e.target.classList.remove('btn-dark')
})

box.addEventListener('mousemove', e => {
    box.firstElementChild.innerText = parseInt(box.firstElementChild.innerText) + 1
    box.style.background = `rgb(${e.offsetX},${e.offsetY},40)`
});

input.addEventListener('focus', () => {
    input.style.width = '300px'
});

input.addEventListener('blur', () => {
    input.style.width = '200px'
});

(function AddNewListItem() {
    button.addEventListener('click', () => {
        if (input.value === '') {
            alert('Fill in an input field')
        } else {
            let li = document.createElement('li')

            li.classList.add('list-group-item')
            li.appendChild(document.createTextNode(input.value))
            input.value = ''

            itemList.appendChild(li)
        }
    })
})();



