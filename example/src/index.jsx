import React from 'react';
import {render} from 'react-dom';
import 'antd/dist/antd.min.css'  // 使用了ant组件，必须将 ant 的css必须引入，不然没有样式
import history from "./common/history";   // history 都从 ./common/history 这个文件里面获取， 感觉像个单例模式，后续需要使用history进行跳转，直接引用就好了
import {Route, Router} from "react-router";
import App from "./containers/App";

/*****************************************************************/
/*****               react-router 使用教程                 *******/
/*****************************************************************/
// 详细教程链接： https://juejin.im/post/5be2993df265da611e4d220c#heading-6
//如果你使用了redux ，将div 换成 Provide就好了
// App组件可以放置所有东西，这个文件只做一些配置，如redux和react-router 的history

render((
    <div>
        <Router history={history}>
            <Route path="/" component={App} />
        </Router>
    </div>
), document.getElementById("root"));