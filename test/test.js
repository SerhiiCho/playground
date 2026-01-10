/**
 * new TextEncoder().encode()    Converts a UTF-8 string to bytes
 * new TextDecoder().decode()    Converts a UTF-8 array of bytes to a string
 * atob()                        Works with Latin-1 characters
 * btoa()                        Works with Latin-1 characters
 * Base64 encoding               (0-63 characters)
 * Latin-1 encoding              (0-255 characters)
 * ASCII                         (0-127 charactes)
 * new Uint8Array()              (0-255) contains 8-bit integers
 * String.fromCharCode(byte)     Unicode Code Point. UTF-16 code uints
 *
 * 1. Try to text encode a base 64 string
 * 2. TextEncoder to UTF-16
 * 3. Play with String.fromCharCode(byte)
 */

// Converts Uint8Array to Base64 string
// Or: Converts bytes to Base64 encoded string.
// Use new TextEncoder().encode() to turn a string to a UTF-8
// array of bytes.
function toBase64(arr) {
    // -> string
    // Latin-1 encoding covers the 0-255 range
    const latin1String = Array.from(arr)
        .map((byte) => String.fromCharCode(byte))
        .join('')

    return btoa(latin1String)
}

// Decodes Base64 string back to bytes.
// Use new TextDecoder().decode() to turn it to a UTF-8 string
function fromBase64(str) {
    // -> Uint8Array
    return Uint8Array.from(atob(str), (c) => c.charCodeAt(0))
}

const string = 'Привет, мир 👋!'

// 1. Turn any string to bytes
const bytes = new TextEncoder().encode(string)

// 2. Encode bytes into Base64
const base64 = toBase64(bytes)

// 3. Get bytes from Base64 encoded string
const originalBytes = fromBase64(base64)

// 4. Turn the array of bytes into a string
const originalString = new TextDecoder().decode(originalBytes)

console.log({ string, bytes, base64, originalBytes, originalString })
