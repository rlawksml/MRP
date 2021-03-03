const path = require('path');
const htmlwebpackplugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: { main: './src/index.jsx' },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: '/node_moudles/',
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
  },
  plugins: [
    new htmlwebpackplugin({
      template: path.join(__dirname, './src', 'index.html'),
    }),
  ],
};
