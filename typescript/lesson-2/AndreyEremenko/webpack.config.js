'use strict';

const NODE_ENV = process.env.NODE_ENV || 'dev';
const webpack = require('webpack');


module.exports = {
    entry: {
        'index': './index.ts'
    },

    output: {
        path: __dirname,
        filename: '[name].js'
    },

    watch: NODE_ENV == 'dev',

    resolve: {
        extensions: ['', '.ts', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['ts-loader']
            },
            {
                test:   /\.css$/,
                loader: 'style!css'
            }
        ]
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        })
    ]
};
