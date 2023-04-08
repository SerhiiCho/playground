import { getArticles, printArticles } from './articles'
import { printSuggestions } from './suggestions'

printArticles()

let tags = []
const articlesList = document.getElementById('articles')

articlesList.addEventListener('click', async e => {
    if (e.target.tagName === 'A') {
        const match = getArticles().find(a => a.title === e.target.innerText)

        if (!match) {
            return
        }

        tags.push(...match.tags)

        await printSuggestions(tags)
    }
})

