module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "main.js",
  },
  mode: "development",
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
