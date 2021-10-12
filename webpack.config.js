const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');

const NODE_ENV =
  process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  mode: NODE_ENV,
  watch: NODE_ENV === 'development',
  entry: path.resolve(__dirname, 'src/main.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@Domains': path.resolve(__dirname, 'src/domains'),
      '@Core': path.resolve(__dirname, 'src/core'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|webp|tiff?)/i,
        use: [
          'file-loader',
          {
            loader: 'webpack-sharp-loader',
            options: {
              processFunction: (sharp) => sharp.negate(),
            },
          },
        ],
      },
      {
        test: /.js$/,
        exclude: path.resolve(__dirname, 'src/Core/App/Mongo-init.js'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-transform-runtime',
            ],
          },
        },
      },
    ],
  },
  externals: [nodeExternals()],
  plugins: [
    new WebpackShellPluginNext({
      onBuildExit: {
        scripts:
          NODE_ENV === 'development' ? ['supervisor build/index.js'] : [],
        parallel: true,
      },
    }),
  ],
};
