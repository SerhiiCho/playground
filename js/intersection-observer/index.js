const target = document.getElementById('target')

const observer = new IntersectionObserver()
observer.observe(target)

function observerHandler(entries, observer) {
    for (const entry of entries) {
        if (entry.intersectionRatio > 0) {
            console.log('appear')
        }
    }
}