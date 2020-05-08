const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
      },
      module: {
        rules: [
            { test: /\.css$/, use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader"] },
            { test: /\.hbs$/, loader: "handlebars-loader" },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }
        ]
      },
      plugins: [new MiniCssExtractPlugin(), new HtmlWebpackPlugin({
          template: "./src/index.html"
      })],
      devServer: {
          port: 4040,
          watchContentBase: true
      }
};