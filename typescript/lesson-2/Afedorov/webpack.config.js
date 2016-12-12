const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {    
    target: 'web',
    
    entry: {
        main: ['./src/app.ts']
        //css: ['./src/main.less']
    },        
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].[hash].js',
        publicPath: '/'
    },

    devtool: 'source-map',
    debug: true,
    postcss: () => [autoprefixer],

    module: {
        loaders: [
            {
                test: /\.(ts)$/,
                loader: 'ts-loader',
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/
            },
            {
                test: /\.(css|less)$/,
                 /*loaders: [
                    'style',
                    'css',
                    'less',
                    'postcss'
                ]*/
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style',
                    loader: 'css?sourceMap!less?resolve url!postcss'
                })                
            }
        ]
    },

    plugins: [
        new webpack.NoErrorsPlugin(),        
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),

        new ExtractTextPlugin({filename: 'css/[name].css', allChunks: true})        
    ],

    resolve: {
        //root: path.resolve('./src'),
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.ts', '.less']        
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js']
    },

     externals: {
        // Use external version of React
        //"react": "React",
    },

    devServer: {
        contentBase: './build',
        port: 8080,
        hot: true
    }
}
