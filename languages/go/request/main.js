const url = 'https://hub.nalog.nl/api/v1/vat/check'
const token = 'KyJzdkIiOiIxMjM0NTYJODkwIiNibmFtzSI3IkpvaljM8MiDsfQ'

fetchVatCodeDetails('NL000000000B00')

async function fetchVatCodeDetails(vat) {
    const params = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token, vat }),
    }

    try {
        const resp = await fetch(url, params)
        const vatDetails = await resp.json()

        console.info(vatDetails)
    } catch (error) {
        console.error(error)
    }
}
