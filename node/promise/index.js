
function nice() {
    return new Promise((resolve, reject) => {
        const error = true

        if (error) {
            resolve('This will be second')
        } else {
            reject('If has error')
        }
    })
}

nice()
    .then(data => console.log(data))
    .catch(err => hello())

console.log('This will be first')