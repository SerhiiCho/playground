const articles = [
    {
        title: 'Learning JavaScript in depth',
        tags: ['js', 'javascript', 'es6', 'learning'],
    },
    {
        title: 'Learning React and becoming a better developer',
        tags: ['react', 'javascript', 'es6', 'learning', 'js'],
    },
    {
        title: 'Vue tutorial on how to get started',
        tags: ['vue', 'javascript', 'es6', 'learning', 'js'],
    },
    {
        title: 'How to learn JavaScript in 2018',
        tags: ['js', 'javascript', 'es6', 'learning'],
    },
    {
        title: 'The future of PHP and why it is bright',
        tags: ['php', 'web development', 'learning', 'backend'],
    },
    {
        title: 'How to learn PHP in 2023',
        tags: ['php', 'web development', 'learning', 'backend'],
    },
    {
        title: 'Laravel is the best PHP framework',
        tags: ['php', 'web development', 'learning', 'backend', 'laravel'],
    },
    {
        title: "You didn't know so much about this programming language",
        tags: ['php', 'web development', 'learning', 'backend', 'laravel', 'symfony'],
    },
    {
        title: 'The best JavaScript frameworks in 2023',
        tags: ['js', 'javascript', 'es6', 'learning', 'react', 'vue', 'svelte'],
    },
    {
        title: 'Composition API in Vue 3',
        tags: ['vue', 'javascript', 'es6', 'learning', 'js', 'vue3'],
    },
]

export function printArticles() {
    let html = articles.reduce((acc, article) => acc + `<li><a href="javascript:">${article.title}</a></li>`, '')
    document.getElementById('articles').innerHTML = html
}

export function getArticles() {
    return articles
}