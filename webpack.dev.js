const path = require('path')
const config = require('./webpack.config')
const merge = require('webpack-merge')


module.exports = merge(config, {
    mode: 'development',

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
          {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
          }
        ]
    }
})