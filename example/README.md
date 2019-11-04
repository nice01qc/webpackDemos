**运行方式**

 

```bash
npm run dev  #运行开发环境
npm run build-dev  # 打包

########## npm run [package.json 中scripts中对应的key] 代表运行 key 对应value 代表的命令（自己搜下理解更清楚些）
```







```js
entry: {
	index: './src/index.jsx',  // 以./src/index.jsx这个js文件为入口进行打包
	other: './src/other.jsx',	// 同上
}
    
output: {
     path: path.resolve(__dirname, 'dist'),  // 设置打包路径
     publicPath: myCDN_URL,      // 设置图片等公共资源的前缀，暂时设置为空字符串就好
     filename: 'js/[name].bundle.js'  // 打包文件命名方式，其中name对应 entry 中的 'key'
},

plugins: [
    new HtmlWebpackPlugin({			// 通过模板生成HTML文件，看你自己需要多少个HTML文件
        filename: 'index.html',   // 生成文件名
        template: 'src/template/html/index.html',  // 模板文件
        chunks: ['index']  // 需要加入的js文件
    }),
]

/**
*  <% js运行代码   %>      <%=  赋值   %>*
*   可以使用JSON.stringify(htmlWebpackPlugin) 打印此变量，并以此为参考 编写自己的html模板
*/


devServer: {
        contentBase: path.join(__dirname, "./dist"),  // 服务根目录，通过host便可以访问
        host: "127.0.0.1", // 服务地址
        port: 8080,
        proxy: {
            // 代理到后端的服务地址，会拦截所有以demo开头的请求地址
            // ps:  /demo/* 都会被拦截，然后使用对应地址进行访问， 
            // 也就是 http:127.0.0.1:8080/demo/getUserInfo?id=1  
            // 会使用 http://127.0.0.1:8081 这个地址来代理
            // 访问 /demo/getUserInfo?id=1， 然后返回结果
            "/demo": "http://127.0.0.1:8081"
        }
    }
```