import React from "react";
import {Link } from "react-router-dom";
import {Route} from "react-router";
import routes from "../../router/routes";   // 这是自定义的一个数组
import AntOfMenu from "../AntOfMenu";
import EchartsOfBar from "../EchartsOfBar";
class App extends React.Component {

    render() {
        return (
            <div>
                <Link to="/ant"> ant组件示例 </Link><br/>
                <Link to="/echarts/bar"> echarts组件示例 </Link><br/>

                {/*{// 不建议这么写， 最好集中处理，好修改}*/}
                {/*<Route path="/ant" component={AntOfMenu} />*/}
                {/*<Route path="/echarts/:type" component={EchartsOfBar} />*/}

                {/*// 建议这么写*/}
                {routes.map(route => (
                    <Route key={route.path} exact path={route.path} component={route.chunk()} />
                ))}

            </div>
        );
    }
}

export default App;