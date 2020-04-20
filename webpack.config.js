const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(ts|tsx|js|jsx)?$/,
        use: [
          {
            loader: 'ts-loader',
          }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new BundleAnalyzerPlugin()
  ]
};
