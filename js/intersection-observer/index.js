const images = document.querySelectorAll('section img')

const observer = new IntersectionObserver(observerHandler, {
    threshold: 0.5,
})

function observerHandler(entries) {
    for (const entry of entries) {
        if (entry.intersectionRatio > 0) {
            entry.target.src = entry.target.getAttribute('data-src')
        }
    }
}

images.forEach(img => observer.observe(img))
