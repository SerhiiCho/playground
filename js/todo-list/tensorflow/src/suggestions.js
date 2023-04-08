import { predict } from './predict'

export async function printSuggestions(tags) {
    const result = await predict(tags)
    console.log(result)

    const target = document.getElementById('suggestions')

}