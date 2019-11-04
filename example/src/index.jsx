import React from 'react';
import {render} from 'react-dom';
import 'antd/dist/antd.min.css'  // 使用了ant组件，必须将 ant 的css必须引入，不然没有样式
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import chatLog from "./reduces/chatLog";
import statusMessage from "./reduces/statusMessage";
import userName from "./reduces/userName";

import TestRudux1 from "./containers/TestRedux1";
import NewTestRedux2 from "./containers/NewTestRedux2";

/*****************************************************************/
/*****                 redux 使用教程                      *******/
/*****************************************************************/
// 学之前可以看下 阮一峰的 http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html 讲的很经典，可以结合我写的代码看
// 阮一峰的这种 redux 使用风格很好用

const chatReducer = combineReducers({   // 参见 https://juejin.im/post/5b9936f06fb9a05d0260dcbb  或者自己搜索
    chatLog,
    statusMessage,
    userName,
});
let store = createStore(chatReducer);  // 这个不说了

// 为什么要使用 Provider 呢？ 参见 https://juejin.im/post/5ce0ae0c5188252f5e019c2c#heading-6
render((
    <Provider store={store}>
        <TestRudux1 />
        <hr />
        <NewTestRedux2 />
    </Provider>
), document.getElementById("root"));