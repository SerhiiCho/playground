const text = 'nice one'
const pass = 'my-pass'

encrypt(text, pass).then(data => console.log(data))

const ALGO = 'AES-CBC'

async function encrypt(text, pass) {
    // Generate random salt and IV
    const salt = crypto.getRandomValues(new Uint8Array(16))
    const iv = crypto.getRandomValues(new Uint8Array(16))

    const key = createCryptoKey(pass)

    const encrypted = await crypto.subtle.encrypt(
        { name: ALGO, iv },
        key,
        new TextEncoder().encode(text),
    )

    const arrLength = salt.length + iv.length + encrypted.byteLength

    const uint8Arr = new Uint8Array(arrLength)
    uint8Arr.set(salt, 0)
    uint8Arr.set(iv, salt.length)
    uint8Arr.set(new Uint8Array(encrypted), salt.length + iv.length)

    return btoa(String.fromCharCode(...uint8Arr))
}

async function createCryptoKey(pass) {
    // Derive key from password
    const keyMaterial = await crypto.subtle.importKey(
        'raw',
        new TextEncoder().encode(pass),
        'PBKDF2',
        false,
        ['deriveKey'],
    )

    return await crypto.subtle.deriveKey(
        {
            name: 'PBKDF2',
            salt: salt,
            iterations: 100000,
            hash: 'SHA-256'
        },
        keyMaterial,
        { name: 'AES-CBC', length: 256 },
        false,
        ['encrypt'],
    )
}
