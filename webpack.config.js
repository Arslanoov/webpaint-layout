const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "development",

    entry: path.resolve(__dirname, 'src', 'index.js'),

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Web Paint',
            template: 'public/index.html'
        })
    ]
};
