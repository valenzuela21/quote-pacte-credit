const path = require('path');

module.exports = (env, argv) => {
  let production = argv.mode === 'production'

  return {
    entry: {
      'js/admin': path.resolve(__dirname, 'app/admin.js'),
      'js/shortcodepacte': path.resolve(__dirname, 'app/shortcodepacte.js'),
      'js/widget': path.resolve(__dirname, 'app/widget.js'),
    },

    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'assets'),
    },

    devtool: production ? '' : 'source-map',

    resolve: {
      extensions: [".js", ".jsx", ".json", ".css"],

    },

    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.less$/,
          loaders: ["style-loader", "css-loader", "less-loader"]
        }, {
          test: /\.css$/,
          loaders: ["style-loader", "css-loader"]
        },
        {
          test: /\.(jpg|jpeg|png)$/,
          use: {
            loader: 'url-loader'
          }
        }

      ],
    },

  };
}
