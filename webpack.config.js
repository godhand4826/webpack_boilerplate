const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        index: './src/body.js',
        print: './src/print.js',
        another: './src/another.js',
        es10: './src/es10.js',
        foo: './src/foo.jsx',
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimize: true,
        minimizer: [new TerserPlugin({ extractComments: false })]
    },
    plugins: [
        new HtmlWebpackPlugin({ chunks: "./src/foo.jsx", template: './src/index.html' }),
        new MiniCssExtractPlugin({ filename: "[name].css" }),
        new CleanWebpackPlugin(),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [{
                test: /\.js(x?)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(sc|sa|c)ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        fallback: {
                            loader: 'file-loader',
                            options: {
                                outputPath: '.',
                                name: '[name].[ext]'
                            }
                        },
                    }
                }],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource'
            }
        ]
    }
}