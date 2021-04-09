let mix = require('laravel-mix')

mix.js('src/index.ts', 'dist/index.js')
    .sass('src/index.scss', 'dist/index.css')
    .options({
        processCssUrls: false,
        uglify: {
            uglifyOptions: {
                compress: {
                    drop_console: false
                }
            }
        }
    })
    .sourceMaps()
    .disableNotifications()
    .webpackConfig({
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    options: { appendTsSuffixTo: [/\.vue$/] },
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: ['*', '.js', '.jsx', '.vue', '.ts', '.tsx']
        }
    })