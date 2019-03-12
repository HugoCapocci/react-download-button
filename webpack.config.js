const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const plugins = [];
if (process.env.ANALYSE_BUNDLE) {
  plugins.push(new BundleAnalyzerPlugin());
}

module.exports = () => ({
  bail: true,
  entry: path.join(__dirname, 'src/index.jsx'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  mode: 'production',
  target: 'web',
  node: {
    fs: 'empty',
    child_process: 'empty',
    tls: 'empty',
    net: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        query: {
          presets: ["@babel/env", "@babel/react",  "@babel/flow"],
          plugins: ["@babel/plugin-proposal-class-properties"]
        }
      },
    ]
  },
  plugins,
  stats: {
    colors: true
  },
});
