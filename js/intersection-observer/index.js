const images = document.querySelectorAll('section img')

images.forEach(img => {
    const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (entry.intersectionRatio > 0) {
                img.src = img.dataset.src
            }
        }
    })

    observer.observe(img)
})
