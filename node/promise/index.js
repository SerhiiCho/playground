
function nice() {
    return new Promise((resolve, reject) => {
        const error = true

        if (error) {
            resolve('Some string')
        } else {
            reject('Error occured')
        }
    })
}

nice()
    .then(data => console.log(data))
    .catch(err => hello())