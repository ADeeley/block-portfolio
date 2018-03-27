const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist',
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: 'style-loader',
            }, {
                loader: 'css-loader',
            }, {
                loader: 'sass-loader',
            }],
        }, {
            test: /\.css$/,
            use: [{
                loader: 'style-loader',
            }, {
                loader: 'css-loader',
            }],
        }],
    },
    plugins: [
        new UglifyJsPlugin(),
    ],
};
