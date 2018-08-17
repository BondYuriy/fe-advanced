const path = require('path');
const HtmlWebpackPlugin = require('C:/Users/ADMIN/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/html-webpack-plugin');
const MiniCssExtractPlugin = require("C:/Users/ADMIN/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/mini-css-extract-plugin");
const CleanWebpackPlugin = require('C:/Users/ADMIN/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/clean-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                exclude: /(node_modules|bower_components)/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules|bower_components)/,
                use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],

            },
            {
                test: /\.hbs$/,
                exclude: /(node_modules|bower_components)/,
                use: ["handlebars-loader"],
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin('build'),
        new HtmlWebpackPlugin({
            hash: true,
            template: './public/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css',
        }),
    ],
    devServer: {
        historyApiFallback: true,
        noInfo: false,
        quiet: false,
        stats: 'errors-only',
        clientLogLevel: 'warning',
        compress: true,
        port: 9003,
    },
}
