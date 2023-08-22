import smoothLoader from 'smooth-loader'

const el = document.querySelector<HTMLImageElement>('#pretty-girl')

if (el) {
    smoothLoader([el])
} else {
    console.log('no image')
}