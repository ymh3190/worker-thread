const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: "./src/public/main.ts",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./js/[name].js",
    clean: true,
  },
  plugins: [
    new miniCssExtractPlugin({
      filename: "./css/styles.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
      },
      {
        test: /\.scss$/,
        use: [miniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
