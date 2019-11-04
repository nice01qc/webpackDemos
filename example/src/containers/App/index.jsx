import React from "react";
import axios from "axios";
import {Link } from "react-router-dom";
import {Route} from "react-router"
import AntOfMenu from "../AntOfMenu";
import EchartsOfBar from "../EchartsOfBar";
class App extends React.Component {

    componentWillMount() {
        // axios.get('/demo/date?date=2019-03-12%2009:10:01')
        //     .then(function (response) {
        //         // handle success
        //         console.log(response.data);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    }

    render() {
        return (
            <div>
                <Link to="/reactRouterDemo/ant"> ant组件示例 </Link><br/>
                <Link to="/reactRouterDemo/echarts"> echarts组件示例 </Link><br/>

                <Route path="/reactRouterDemo/ant" component={AntOfMenu} />
                <Route path="/reactRouterDemo/echarts" component={EchartsOfBar} />

            </div>
        );
    }
}

export default App;