module.exports = {
    entry: './typescript/lesson-2/main.ts',
    output: {
        filename: './typescript/flickr-app-dist/bundle.js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts?$/, loader: 'ts-loader' }
        ]
    }
}