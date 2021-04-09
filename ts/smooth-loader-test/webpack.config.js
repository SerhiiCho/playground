const path = require('path')

module.exports = {
    entry: './src/index',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: [
            '.ts',
        ],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './dist'),
    },
}
