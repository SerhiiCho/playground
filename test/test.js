const baseURL = 'https://api.sampleapis.com/countries'

async function fetchData() {
    const resp = await fetch(baseURL)
    const json = await resp.json()
    const msg = json.message

    console.log(`The message is: ${msg}`)
}

fetchData()
