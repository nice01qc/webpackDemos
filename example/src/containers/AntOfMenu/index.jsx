import React from "react";
import {Button} from 'antd';
import history from "../../common/history";

class AntOfMenu extends React.Component {

    onClick = () => {  // 建议自定义函数都写成这种 lambda（匿名函数），因为匿名函数函数与this无关，防止this乱指
        let pushPath = {
            pathname: "/echarts/bar",
            state: {name: 'Kangkang', age: 28}
        };
        history.push(pushPath);   // 可以去EchartsOfBar 组件看 如何获取state的，都有例子
    };

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.onClick}>onclick</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
                <Button type="link">Link</Button>
            </div>
        );
    }
}

export default AntOfMenu;