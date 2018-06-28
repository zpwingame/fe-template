const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
const apiMocker = require('webpack-api-mocker');
const mocker = require('./mock/index.js');

function resolve (dir) {
    return path.join(__dirname, dir)
}

let config  = {
    entry: {
        index: ['./src/index.tsx']
    },
    mode: 'development',
    devtool: '#eval-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', "css-loader", 'postcss-loader'
                    ,'sass-loader'
                ]
            },
            {
                test: /\.tsx?$/,
                use: {
                    loader: "awesome-typescript-loader"
                }
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
    resolve: {
        extensions: [".js", ".json", ".ts", ".tsx"],
        alias: {
            '@': resolve('src'),
            '@node_modules': resolve('node_modules'),
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './template/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: process.env.NODE_ENV,
                MOCK: process.env.MOCK,
            }
        }),
    ]
};


if(process.env.MOCK) {
    config.devServer.before = function(app){
        apiMocker(app, path.resolve('./mock/index.js'))
    }
}
module.exports = config;