class Parser {
    constructor(filepath) {
        this.filepath = filepath
    }

    getFile() {
        fetch(this.filepath)
            .then(res => res.text())
            .then(content => this.parseContent(content))
    }

    parseContent(content) {
        let lines = content.match(/(^[^\n]+)/gm)
        console.log(lines)
    }
}

new Parser('file.txt').getFile()
