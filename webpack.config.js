const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: false,
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
};
