var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包
var HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html
var CleanWebpackPlugin = require('clean-webpack-plugin');
var publicPath = '/build/'; //服务器路径
var path = __dirname + '/build/';

var plugins = [];

if (process.argv.indexOf('-p') > -1) { //生产环境
    plugins.push(new webpack.DefinePlugin({ //编译成生产版本
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }));
    publicPath = '/react-mtl/build/';
    path = __dirname + '/react-mtl/build/';
}
plugins.push(new ExtractTextPlugin({
	filename:'[name].css'
})); //css单独打包

plugins.push(new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
    filename: '../index.html', //生成的html存放路径，相对于 path
    template: './src/template/index.html', //html模板路径
    hash: true,    //为静态资源生成hash值
}));
// 清除打包后的文件
plugins.push(new CleanWebpackPlugin(['build'],{
	verbose:false
}))
module.exports = {
    entry: {
        app: './src/App', //编译的入口文件
    },
    output: {
        publicPath, //编译好的文件，在服务器的路径
        path, //编译到当前目录
        filename: '[name].js' //编译后的文件名字
	},
	// 默认开发环境
	mode: 'development',
	devtool: "source-map",
	// 生产环境
	// mode: 'production',
    module: {
	      rules: [
            {
                test: /\.js$/,
                exclude: /^node_modules$/,
	            use: [
		            {
			            loader: "babel-loader",
			            options: {
				            presets: ['es2015'],
				            compact: 'false',
				            plugins: ['syntax-dynamic-import']
			            }
		            }
	            ]
            },{
				test: /\.(css|less)$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use:[{
					  loader: 'css-loader',
					  options: {
						  autoprefixer: false
					  }
					},
				   {
					  loader: 'postcss-loader',
					  options: {
						  sourceMap: true
					  }
					},
					{
					  loader: 'less-loader',
					  options: {
						  relativeUrls: true
					  }
					}]
				})
			}, {
                test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
                exclude: /^node_modules$/,
			      use: [
			      	{
					      loader: "file-loader",
					      options: {
					      	name: '[name].[ext]'
					      }
				      }
			      	]
			      // loader: 'file-loader?name=[name].[ext]'
            }, {
                test: /\.(png|jpg)$/,
                exclude: /^node_modules$/,
			      use: [
				      {
					      loader: "url-loader",
					      options: {
						      limit: 20000,
						      name: '[name].[ext]'
					      }
				      }
			      ]
                // loader: 'url?limit=20000&name=[name].[ext]' //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
            }, {
                test: /\.jsx$/,
                exclude: /^node_modules$/,
			      use: [
				      {
					      loader: "babel-loader",
					      options: {
						      presets: [
							      "es2015",
							      "react"
						      ],
						      plugins: ['syntax-dynamic-import']
					      }
				      }
			      ]
                // loaders: ['jsx', 'babel?presets[]=es2015,presets[]=react']
            }
        ]
    },
	plugins,
	// 文件大小的门槛 会报warning
	performance: {
		hints: false
	  },
    resolve: {
        extensions: ['.js', '.jsx'], //后缀名自动补全
    }
};
