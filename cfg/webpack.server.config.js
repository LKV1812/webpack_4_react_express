const path = require('path');
const nodeExternals = require('webpack-node-externals');

const NODE_ENV = process.env.NODE_ENV;

const styleLoaders = (loader) => {
  const loaders = [
    {
      loader: 'css-loader',
      options: {
        modules: {
          mode: 'local',
          localIdentName: '[name]__[local]-[hash:base64:5]',
        },
        onlyLocals: true,
      }
    },
  ]

  if (loader) loaders.push(loader);

  return loaders;
}

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: path.resolve(__dirname, '../src/server/server.js'),
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: 'server.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ['ts-loader']
      },
      {
        test: /\.s[ac]ss$/,
        use: styleLoaders('sass-loader')
      },
      {
        test: /\.css$/,
        use: styleLoaders()
      }
    ]
  },
  optimization: {
    minimize: false
  }
}
