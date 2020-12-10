const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CssnanoPlugin = require('cssnano-webpack-plugin');
require('babel-polyfill');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, '../src/'),
  build: path.join(__dirname, '../build/'),
  assets: 'assets/',
};

module.exports = {
  externals: {
    path: PATHS,
  },
  // ================================================================== \\
  entry: {
    app: ['babel-polyfill', PATHS.src],
  },
  // ================================================================== \\
  output: {
    filename: `${PATHS.assets}js/[name].min.js`,
    path: PATHS.build,
    // publicPath: '/',
  },
  // ================================================================== \\
  optimization: {
    minimizer: [
      new UglifyJsPlugin(),
      new CssnanoPlugin({
        sourceMap: true,
        cssnanoOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  // ================================================================== \\
  module: {
    rules: [
      // ================================================================== \\
      // JS \\
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        query: { compact: false },
      },
      // JS \\
      // ================================================================== \\
      // SCSS \\
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false,
            },
          },

          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: 'configs/postcss.config.js',
              },
            },
          },

          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      // SCSS \\
      // ================================================================== \\
      // IMAGES \\
      {
        test: /\.(png|jpg|svg|gif)/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              emitFile: false,
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 75,
              },
              optipng: {
                enabled: true,
                optimizationLevel: 5,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 8,
              },
              svgo: {
                plugins: [
                  {
                    removeViewBox: true,
                  },
                  {
                    cleanupIDs: false,
                  },
                ],
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
      // IMAGES \\
      // ================================================================== \\
      // FONTS \\
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          emitFile: false,
        },
      },
      // FONTS \\
      // ================================================================== \\
      // HTML \\
      {
        test: /\.html$/,
        include: `${PATHS.src}/${PATHS.assets}/html`,
        use: [
          {
            loader: 'html-loader',
            options: {
              interpolate: true,
              minimize: false,
            },
          },
        ],
      },
      // HTML \\
      // ================================================================== \\
    ],
  },
  // ================================================================== \\
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/style.min.css`,
    }),
    // ================================================================== \\
    new CopyPlugin({
      patterns: [
        { from: `${PATHS.src}assets/images`, to: `${PATHS.assets}images` },
        { from: `${PATHS.src}assets/fonts`, to: `${PATHS.assets}fonts` },
        { from: `${PATHS.src}static`, to: '' },
      ],
    }),
    // ================================================================== \\
    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          options: {
            quality: 75,
          },
        },
      ],
      overrideExtension: true,
      detailedLogs: false,
      silent: false,
      strict: true,
    }),
    // ================================================================== \\
    new HtmlWebpackPlugin({
      template: `${PATHS.src}index.html`,
      filename: 'index.html',
      title: 'Главная',
      hash: false,
      minify: false,
    }),
    // new HtmlWebpackPlugin({
    //     template: `${PATHS.src}nameOfPage.html`,
    //     filename: 'nameOfPage.html',
    //     title: 'titleOfThePage',
    //     hash: false,
    //     minify: false,
    // }),
    // ================================================================== \\
    new CleanWebpackPlugin(),
  ],
};
