const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react']
                }
            },
            exclude: '/node_modules'
        }, {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader'],
            exclude: '/node_modules'
        }, {
            test: /\.(woff2?|ttf)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                }
            }
        }]
    },
    devServer: {
        contentBase: './dist',
        host: '0.0.0.0'
    }
}