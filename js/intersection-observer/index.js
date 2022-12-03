const observer = new IntersectionObserver(function (entries, observer) {
    for (const entry of entries) {
        if (entry.intersectionRatio > 0) {
            handleAppear(entry.target)
        }

        if (entry.intersectionRatio <= 0) {
            handleDisappear(entry.target)
        }
    }
})

/**
 * @param {Element} elem
 */
function handleAppear(elem) {
    console.log('appear')
    elem.style.opacity = '1'
}

/**
 * @param {Element} elem
 */
function handleDisappear(elem) {
    console.log('disappear')
    elem.style.opacity = '0'
}

const elem = document.getElementById('target')

observer.observe(elem)