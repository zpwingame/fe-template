const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const apiMocker = require('webpack-api-mocker');
const mocker = require('./mock/index.js');

function resolve (dir) {
    return path.join(__dirname, dir)
}

let config  = {
    entry: {
        index: ['./main.js'],
        mobile: ['./main.js'],
        test:'./test.js'
    },
    mode: 'development',
    devtool: '#source-map',
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
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    },
                },
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader',
                },
                exclude: /node_modules/
            },
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
            '@node_modules': resolve('node_modules'),
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './template/index.html',
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            filename: 'home.html',
            template: './template/mobile.html',
            chunks: ['mobile'],
        }),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
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