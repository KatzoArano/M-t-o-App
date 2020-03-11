const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/app/index.js',
    output: {
        path: path.join(__dirname, 'dist'), // creation fichier dist
        filename: 'bundle.js'
    },
    devServer: {
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.css$/, // tout les archives CSS
                use: ['style-loader', 'css-loader'] 
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html' // html
        })
    ]
}