module.exports = {
  mode: 'development',
  entry: './src/index.young',
  module: {
    rules: [
      {
        test: /\.young$/,
        exclude: /node_modules/,
        use: ['young-loader']
      }
    ]
  },
  watch: true
}