import React from 'react';
import {render} from 'react-dom';
import 'antd/dist/antd.min.css'  // 使用了ant组件，必须将 ant 的css必须引入，不然没有样式
import history from "./common/history";
import {Route, Router} from "react-router";
import App from "./containers/App";

/*****************************************************************/
/*****               react-router 使用教程                 *******/
/*****************************************************************/
// 详细教程链接： https://juejin.im/post/5be2993df265da611e4d220c#heading-6

render((
    <div>
        <Router history={history}>
            <Route path="/" component={App} />
        </Router>
    </div>
), document.getElementById("root"));