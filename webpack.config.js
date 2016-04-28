var path = require('path')
var webpack = require('webpack')
var srcPath = path.join(__dirname, 'resources/javascripts')
var destPath = path.join(__dirname, 'public/javascripts')

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        path.join(srcPath, 'counter.js'),
        path.join(srcPath, 'echo.js')
    ],
    output: {
        path: destPath,
        filename: 'bundle.js',
        publicPath: 'assets'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [ 'babel' ],
                exclude: /node_modules/,
                include: __dirname
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: ["node_modules", srcPath]
    }
}
