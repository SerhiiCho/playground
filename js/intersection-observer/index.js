const observer = new IntersectionObserver(observerHandler, {
    threshold: .5,
})

function observerHandler(entries) {
    for (const entry of entries) {
        if (entry.intersectionRatio > 0) {
            entry.target.src = entry.target.dataset.src
        }
    }
}

const images = document.querySelectorAll('section img')

images.forEach(img => observer.observe(img))
