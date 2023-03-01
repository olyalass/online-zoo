const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  watch: true,
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: [path.join(__dirname, "../src/pages/main/", "main.js")],
    donate: [path.join(__dirname, "../src/pages/donate/", "donate.js")],
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "../build"),
    publicPath: "/",
  },
  resolve: {
    extensions: [".js"],
  },
  devServer: {
    port: 8000,
    historyApiFallback: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../src/pages/main", "template.html"),
      filename: "index.html",
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../src/pages/donate", "template.html"),
      filename: "donate.html",
      chunks: ["donate"],
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
