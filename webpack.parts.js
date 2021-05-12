const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

exports.page = ({ title, template }) => ({
  plugins: [
    new HtmlWebpackPlugin({
      title,
      template,
    }),
  ],
})

exports.loadCss = () => ({
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      }
    ]
  }
})

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

exports.extractCss = ({ options = {}, loaders = [] } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          { loader: MiniCssExtractPlugin.loader, options },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: "[name]_[local]--[hash:base64:3]",
                auto: /\.m\.\w+$/i,
              },
            },
          },
        ].concat(loaders),
        sideEffects: true,
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
})

exports.tailwind = () => ({
  loader: 'postcss-loader',
  options: {
    postcssOptions: { plugins: [require('tailwindcss')()] },
  },
})

exports.sassLoader = (options = {}) => ({
  loader: 'sass-loader',
  options,
})


const glob = require('glob')
const PurgeCssWebpackPlugin = require('purgecss-webpack-plugin')

const allFiles = glob.sync(path.join(__dirname, 'src/*.js'))

exports.eliminateUnusedCss = () => ({
  plugins: [
    new PurgeCssWebpackPlugin({
      paths: allFiles,
      extractors: [
        {
          extractor: (content) => content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
          extensions: ['html'],
        },
      ],
    }),
  ],
})

exports.autoprefix = () => ({
  loader: 'postcss-loader',
  options: {
    postcssOptions: { plugins: [require('autoprefixer')()] },
  },
})

exports.loadImages = ({ limit }) => ({
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg)$/,
        type: 'asset',
        parser: { dataUrlCondition: { maxSize: limit } },
      },
    ],
  },
})


exports.loadJs = () => ({
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ['ts-loader'],
      },
    ],
  },
})
