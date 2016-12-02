module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './public/app.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};