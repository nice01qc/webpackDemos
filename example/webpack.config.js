const path = require('path')
const webpack = require('webpack');

const SRC_PATH = path.resolve(__dirname, 'src');

// 生成 html
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const myCDN_URL = "http://www.mycdn.com/";  // 设置文件或者图片前缀地址
const myCDN_URL = "";

module.exports = {
    entry: {
        index: './src/index.jsx',
    },

    output: {
        path: path.resolve(__dirname, 'dist'),  // 设置打包路径
        publicPath: myCDN_URL,      // 设置图片等引用的前缀
        filename: 'js/[name].bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,            // 用于处理js语法，转换为浏览器能运行的语法
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['react','es2015', 'stage-0']
                    }
                }
            },
            {
                test: /\.css$/, // 将导入的css文件，处理成能用的css,可以添加其他的css预处理器，在此修改匹配，然后在use数组后面添加相应的loader
                use: [
                    "style-loader", // 创建style标签，并将css添加进去
                    "css-loader", // 编译css
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,   // 处理图片路径的
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10*1024,
                            outputPath: 'images/'
                        }
                    }
                ]
            },
        ]

    },

    plugins: [
        // new UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: "index",
            favicon: "./src/assert/img/atm-away.png",
            template: path.join(__dirname, 'src/template/html/index.html'),
            chunks: ['index']
        }),

    ],


    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [SRC_PATH, 'node_modules']
    },

    devServer: {
        contentBase: path.join(__dirname, "./dist"),
        historyApiFallback: true,
        host: "127.0.0.1", // 可以使用手机访问
        port: 8080,
        proxy: {
            // 代理到后端的服务地址，会拦截所有以api开头的请求地址
            "/demo": "http://localhost:8081"
        },
        historyApiFallback: {
            rewrites: [
                { from: /^\/$/, to: '/index.html' },
            ]
        }
    },

};
