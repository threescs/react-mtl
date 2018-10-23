var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');


//启动服务
var server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
	// 建立一个Node代理服务器
    proxy: {
	    "/pub": {
		    target: "http://10.1.9.6:8055/",
            secure: false,
        }
    },
    // 打开手机调试
    disableHostCheck: true,
    stats: {
        colors: true
    },
});
 
//将其他路由，全部返回index.html
server.app.get('*', function (req, res) {
    res.sendFile(__dirname + '/index.html')
});

server.listen(3000);
