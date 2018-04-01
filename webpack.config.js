var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = (env, argv) => ({
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: argv.mode === 'production' ? '/bmdb' : '/',
        filename: 'index-bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: path.join(__dirname, "dist"),
        historyApiFallback: true,
    },
    module: {
        rules:[
            { test: /\.(js)$/ , use: 'babel-loader' },
            {
                test: /\.(?:png|jpg|svg)$/,
                loader: 'url-loader',
                query: {
                // Inline images smaller than 10kb as data URIs        limit: 10000
              }
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'app/index.html'
    })]
});
