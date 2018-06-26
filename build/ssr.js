const {
    createBundleRenderer
} = require('vue-server-renderer')
const server = require('express')()

const template = require('fs').readFileSync('./template/index.html', 'utf-8')
const serverBundle = require('../dist/vue-ssr-server-bundle.json')
const clientManifest = require('../dist/vue-ssr-client-manifest.json')

const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false, // 推荐
    template,
    clientManifest
})

server.get('*', (req, res) => {
    const context = {
        url: req.url
    }
    console.log(req.url)
    // 这里无需传入一个应用程序，因为在执行 bundle 时已经自动创建过。
    // 现在我们的服务器与应用程序已经解耦！
    renderer.renderToString(context, (err, html) => {
        console.log(html)
        // 处理异常……
        res.end(html)
    })
})
server.listen(8080, function(){
    console.log('listening on 8080')
})
