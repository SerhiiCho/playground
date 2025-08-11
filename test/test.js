class VideoPlayer {
    removeBanners() {
        const iframes = document.querySelectorAll('.video-inside > iframe')
        iframes.forEach(this.#removeBanner)
    }

    #removeBanner(iframe) {
        try {
            const innerDoc = iframe.contentDocument;

            if (!innerDoc) {
                console.log('no access to innerDoc')
                return
            }

            const banner = innerDoc.getElementById('onion_frame')

            if (!banner) {
                console.log('no banner')
                return
            }

            banner.remove()
            console.info('Removed banner')
        } catch (error) {
            console.error('Error accessing iframe content:', error)
        }
    }
}

const player = new VideoPlayer()
setInterval(() => player.removeBanners(), 2000)
