const path = require('path')

module.exports = {
    target: 'node',
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'app.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },{
            test: /\.(png|jpg)$/,
            exclude: /node_modules/,
            loader: 'file-loader'
        }]
    },
    devtool: 'inline-source-map'
}
