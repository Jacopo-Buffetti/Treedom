//devServer
const path = require('path');
const devMode = true;
//Output
const ROOT_DIR = path.resolve(__dirname, './');
const BUILD_DIR = path.join(ROOT_DIR, './dist');
const ASSET_PATH = process.env.ASSET_PATH || '/';

//Plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const subFolder = '';

module.exports = [{
  mode: 'development',
  entry: ["@babel/polyfill", "./src/index.jsx"],
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
    },
    liveReload: true,
    compress: !devMode,
    port: 5000,
    historyApiFallback: true,
    open: devMode,
  },
  output: {
    publicPath: ASSET_PATH,
    path: BUILD_DIR,
    filename: `${subFolder}js/[name].bundle.js`,
    chunkFilename: `${subFolder}js/[name].[hash].js`,
    hotUpdateChunkFilename: 'hot/hot-update.[hash].js',
    hotUpdateMainFilename: 'hot/hot-update.[hash].json',
    globalObject: 'this'
  },
  //console log personalizzato
  stats: {
    assets: false,
    chunks: false,
    modules: false,
    outputPath: false,
    publicPath: false,
    errors: true,
    warnings: true
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: devMode,
              importLoaders: 1,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                outputStyle: 'compressed',
              },
              sourceMap: devMode,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'autoprefixer',
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: [
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-syntax-dynamic-import',
              ],
            },
          },
          {
            loader: 'eslint-loader',
            options: {
              failOnError: !devMode,
              failOnWarning: !devMode,
              emitWarning: true,
              fix: true,
            },
          },
        ],
      },
      // Svg loader
      {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext][query]',
        },
      },
      // Fonts loader
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext][query]',
        },
      },
      // Images loader
      {
        test: /\.(jpeg|png|gif|jpg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext][query]',
        },
      },
      {
        type: 'javascript/auto',
        exclude: /(node_modules|bower_components|public)/,
        test: /\.json$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'json/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
// Options similar to the same options in webpackOptions.output
// both options are optional
      filename: devMode ? `${subFolder}css/[name].css` : `${subFolder}css/[name].[hash].css`,
      chunkFilename: devMode ? `${subFolder}css/[id].css` : `${subFolder}css/[id].[hash].css`,
    }),
    new CleanWebpackPlugin({
      dry: false,
      verbose: false,
      cleanOnceBeforeBuildPatterns: ['*', '!manifest.json'],
      dangerouslyAllowCleanPatternsOutsideProject: true,
    }),
    new CopyPlugin({
      patterns: [
        { from: './public/favicon.ico', to: `./${subFolder}` }
      ]},
    ),
// new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      chunksSortMode: 'none',
      hash: true,
      filename: `./${subFolder}index.html`,
      template: './public/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      },
    }),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(devMode ? 'development' : 'production'),
      'process.env': {
        NODE_ENV: JSON.stringify(devMode ? 'development' : 'production'),
      },
      'process.env.client': true,
      'process.env.BROWSER': JSON.stringify(true),
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  }
}]
