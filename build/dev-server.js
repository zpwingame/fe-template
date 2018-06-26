let express = require('express')
var webpack = require('webpack')
var webpackConfig = require('../webpack.client.config')

var app = express()


var compiler = webpack(webpackConfig)

let port = 3000;

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true
})
let hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: () => {
    }
})

compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        console.log('publish reload action')
        hotMiddleware.publish({ action: 'reload' })
        cb()
    })
})

app.use(hotMiddleware)
app.use(devMiddleware)

app.listen(port, function(err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('listening 3000!')
})