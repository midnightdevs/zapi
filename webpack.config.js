const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');

const NODE_ENV =
  process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  mode: NODE_ENV,
  watch: NODE_ENV === 'development',
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, '/src/main.ts'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      '@Domains': path.resolve(__dirname, 'src/Domains'),
      '@Core': path.resolve(__dirname, 'src/Core'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  externals: [nodeExternals()],
  plugins: [
    new WebpackShellPluginNext({
      onBuildExit: {
        scripts:
          NODE_ENV === 'development' ? ['supervisor build/bundle.js'] : [],
        parallel: true,
      },
    }),
  ],
};
