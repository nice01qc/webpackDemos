# webpackDemos



1. ## ***\*前端基础知识准备\****

   1. #### 请带着以下 以下问题把 HTML 学习一遍：

      - 学习链接有（一下网站都有开发环境，可以直接使用，也可以自己写个 html 文件，然后用浏览器打开）：
        - https://www.w3school.com.cn/html/index.asp 
        - https://www.runoob.com/html/html-tutorial.html 
      - 学完后请回答以下问题：
        - HTML标签属性是什么，有什么作用？
        - 如何使用HTML写一个表单？
        - HTML 块状状元素与内联元素区别（在浏览器里面显示具体区别）？

   2. #### 请带着以下问题把css 学习一遍：

      - 学习链接有（可以在链接里面直接开发）
        - https://www.w3school.com.cn/css/css_background.asp 
        - https://www.runoob.com/css/css-tutorial.html 
      - 学完后 请回答以下问题：
        - css 的作用是什么？
        - css 基本的语法格式？
        - css id 和 class 选择器是什么，具体怎么用？
        - 在HTML中插入 css 方式有几种？具体怎么用？
        - css 盒子模型是什么具体怎么用？
        - css 中 margin和padding区别？
        - css position的属性值有几种，每一种区别和作用是什么？
        - css overflow 属性有什么作用？
        - css float 属性有什么作用，具体表现是什么？
        - 什么是 css 伪元素，具体效果是什么？
        - ........

   3. #### 请带着以下问题把 `js` 基础看了：

      - 学习链接有：
        - https://wangdoc.com/javascript/ （请先看JavaScript教程，后看 `ECMAScript6`）
        - http://es6.ruanyifeng.com/ （`ECMAScript6` ）
        - 其中JavaScript 重点章节有："面向对象编程"，“DOM", "事件”，“浏览器模型可以挑着看”，前5章都是基础，跟其他编程语言相差不大，可以快快看下。
        - `ECMAScript6` 重点了解的章节有第2、8、9、（14、15、16这几个连着看比较好）、20、21、22、=> 不用细看，知道有这个东西就好了
      - 问题有：
        - `js` this你会用吗？ 请查看 JavaScript this 的六道坎 https://blog.crimx.com/2016/05/12/understanding-this/ 
        - `js` call、apply、bind有什么作用，区别是什么？ 请参考 [https://qianlongo.github.io/2016/04/26/js%E4%B8%ADcall%E3%80%81apply%E3%80%81bind%E9%82%A3%E4%BA%9B%E4%BA%8B/#more](https://qianlongo.github.io/2016/04/26/js中call、apply、bind那些事/#more) 
        - `js` 异步编程很方便，经常使用同步编程的请注意！！！请查看 https://juejin.im/post/599ff3d5f265da24843e6276 
        - 写好的`js`，如何在HTML中引入？有几种方式？
        - .........

   4. #### 初步了解 `nodejs`

      - 学习网址有： http://nodejs.cn/api/modules.html 具体看下 “module-模块" 着一部分就好了，试着在node坏境里面敲写代码看看

   5. 以上便是基础，不求熟练使用，只需了解最基础的东西便可以了，有个基本的概念就好了

   ## **前端环境搭建**

   1. 安装nvm(作用，通过安装nvm 安装nodejs 更简单喔，版本随意选，随意切换）

      1. **安装使用参见 https://juejin.im/post/5ce35796e51d454f71439c28  (一定要把nvm源替换成 淘宝的源，不然安装nodejs超级慢！！！，估计10分钟就安装好了，)**
      2. **![数据智能中心 > 前端学习分享（react技术栈） > image2019-11-1_21-0-59.png](http://wiki.lianjia.com/download/attachments/476884556/image2019-11-1_21-0-59.png?version=1&modificationDate=1572613260000&api=v2)**

   2. webpack 使用（前端主要环境搭建就是这个了, 请参考下面资料学习，不想看的可以使用我的demo Gitlib: http://git.lianjia.com/lijinhao003/webpackDemos 或者GitHub: https://github.com/nice01qc/webpackDemos）

      1. **学习的demo : https://github.com/ruanyf/webpack-demos  （里面 文档是英语的，对应中文参见 https://juejin.im/post/5ce35796e51d454f71439c28）**
      2. **官方技术文档（可以作为技术参考手册 https://www.webpackjs.com/concepts/）**

   3. #### 我的demo使用教程 http://git.lianjia.com/lijinhao003/webpackDemos 里面有三个分支，每个分支作用不一样

      1. master分支是把 其他分支全合在一块了
      2. blank 分支 是空白分支，适合练习react
      3. redux 分支 ，里面有个redux例子， 适合练习redux
      4. react-router 分支， 里面有个react-router 例子，适合练习react router
      5. 使用教程
         1. cd example // 进入这个项目
         2. npm install // 将所有依赖安装到项目底下（ npm install --registry=https://registry.npm.taobao.org ) => 使用了淘宝镜像源，下载更快
         3. npm run dev // 开启项目
         4. npm run build-dev // 打包项目

   4. 请结合 前端框架进行学习

   ## **前端框架学习**

   1. 有了这些基础后，便可以**学习react了**
      - react 学习环境： blank 分支
      - 搭好环境了，请去react官网 https://reactjs.org/docs/hello-world.html ， 请把 **MAIN CONCEPTS** 中 前9小节全看一遍，且务必在 blank 分支上 操作一遍。
      - 学完后，试着使用ant 组件库和 echats 组件库（除blank分支外，其他分支都有这两种组件使用例子），通过组合组件封装自己的组件，并尝试修改其样式。
   2. 学完react之后，可以进一步学习 redux 这个框架了
      - 参考资料 
        - http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html 
        - https://github.com/ruanyf/redux-docs （redux demo）
        - http://cn.redux.js.org/ （redux 文档）
      - 练习环境和demo: redux分支
   3. 最后一个框架是 react-router，这个用起来很简单
      - http://react-guide.github.io/react-router-cn/ （react router 文档）
      - 练习环境和demo：react-router 分支
   4. 没了........

   

   **注： 如果你了解一点html css js， 但是不想学react框架， 可以问我，我可以教你具体怎么做**