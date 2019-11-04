import React from 'react';
import {render} from 'react-dom';
import 'antd/dist/antd.min.css'
import App from "./containers/App";  // 使用了ant组件，必须将 ant 的css必须引入，不然没有样式


/*****************************************************************/
/*****               index 空白页，用于练习                 *******/
/*****************************************************************/

render((
    <div>
        <h1>你自己自由发挥吧！！！</h1>
        <App />
    </div>
), document.getElementById("root"));