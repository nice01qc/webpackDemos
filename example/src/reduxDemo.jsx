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
/****************************************************************
 * 不需要redux的情况：
 *      用户的使用方式非常简单
 *      用户之间没有协作
 *      不需要与服务器大量交互，也没有使用 WebSocket
 *      视图层（View）只从单一来源获取数据
 */
/*****************************************************************
 * 需要redux的情况：
 *      用户的使用方式复杂
 *      不同身份的用户有不同的使用方式（比如普通用户和管理员）
 *      多个用户之间可以协作
 *      与服务器大量交互，或者使用了WebSocket
 *      View要从多个来源获取数据
 * ****************************************************************
 */

/*****************************************************************/
/*****                 redux 使用教程                      *******/
/*****************************************************************/
// 学之前可以看下 阮一峰的 http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html 讲的很经典，可以结合我写的代码看


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