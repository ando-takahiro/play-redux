var path = require('path')
var webpack = require('webpack')
var jsPath = path.join(__dirname, 'public/javascripts');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
      './public/javascripts/'
  ],
  output: {
    path: path.join(jsPath, 'build'),
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
    modulesDirectories: ["node_modules", "./"]
  }
}
