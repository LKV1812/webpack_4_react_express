const clientConfig = require('./cfg/webpack.client.config');
const serverConfig = require('./cfg/webpack.server.config');

module.exports = [
  clientConfig,
  serverConfig
]





// TODO удалить закомментированный код
// const path = require('path');
// const HTMLWebpackPlugin = require('html-webpack-plugin');

// const NODE_ENV = process.env.NODE_ENV;
// const IS_DEV = NODE_ENV == "development";
// const IS_PROD = NODE_ENV == "production";

// module.exports = {
//   mode: NODE_ENV ? NODE_ENV : 'development',
//   entry: path.resolve(__dirname, 'src/index.jsx'),
//   resolve: {
//     extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
//   },
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'index.js'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.[tj]sx?$/,
//         use: ['ts-loader']
//       }
//     ]
//   },
//   plugins: [
//     new HTMLWebpackPlugin( { template: path.resolve(__dirname, 'index.html') } )
//   ],
//   devServer: {
//     port: 3000,
//     open: true,
//     hot: IS_DEV
//   },
//   devtool: setupDevtool()
// }

// function setupDevtool() {
//   return IS_DEV ? 'eval' : false;
// }
