const path = require('path');
const { prependListener } = require('process');

module.exports = {
  mode: 'development',
  entry: {
    main: ['./client.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
          plugins: ['@babel/plugin-proposal-class-properties', 'babel-plugin-styled-components'],
        },
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.js',
  },
  devServer: {
    inline: true,
    hot: true,
    port: 9090,
    overlay: true,
  },
};
