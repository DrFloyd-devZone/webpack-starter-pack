const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    
    entry: {
        app: './src/index.js',
        vendor: './src/vendor.js'
    }, 

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],

    module: {
        rules: [
          {
            test: /\.html$/,
            use: ['html-loader']
          },
          {
            test: /\.(svg|png|jpe?g|gif)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[hash].[ext]',
                    outputPath: 'img'
                }
            }
          }
        ]
    }
}