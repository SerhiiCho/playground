const axios = require('axios')
const fs = require('fs')

const html = fs.readFileSync('./index.html', { encoding: 'utf-8' })

axios.post('https://hub.nalog.nl/api/v1/generators/pdf-file', {
    token: 'KyJzdkIiOiIxMjM0NTYJODkwIiNibmFtzSI3IkpvaljM8MiDsfQ',
    content: html,
    is_public: true,
    dir_name: 'public-images',
    margin_top: 10,
    margin_bottom: 10,
    margin_left: 13,
    margin_right: 13,
})
    .then(res => console.log(res.data))
    .catch(err => console.error(err))