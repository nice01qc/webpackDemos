import React from 'react';
import { render } from 'react-dom';
import 'antd/dist/antd.min.css'     // ant 的css必须引入，不然没有样式
import EchartsOfBar from "./containers/EchartsOfBar";
import AntOfMenu from "./containers/AntOfMenu";

render((
    <div>
        <EchartsOfBar/>
        <hr />
        <AntOfMenu />
    </div>
), document.getElementById("root"));


