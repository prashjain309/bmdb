var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index-bundle.js'
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules:[
            { test: /\.(js)$/ , use: 'babel-loader' },
            { test: /\.css$/ , use: ['style-loader','css-loader'] },
            {
                test: /\.(?:png|jpg|svg)$/,
                loader: 'url-loader',
                query: {
                // Inline images smaller than 10kb as data URIs        limit: 10000
              }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'app/index.html'
    })]
}