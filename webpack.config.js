const path = require("path"); // core nodejs module, to manipulate file path
const HtmlWebpackPlugin = require("html-webpack-plugin"); // creates HTML file bundles

module.exports = {
  entry: "./src/index.js", // react entry file
  output: {
    path: path.join(__dirname, "/dist"), // compiled code output path
    filename: "index_bundle.js"
  },
  // loader
  module: {
    rules: [
      {
        test: /\.js$/, // regex that looks for anything that is js & jsx file
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html" // html template you want created
    })
  ]
};
