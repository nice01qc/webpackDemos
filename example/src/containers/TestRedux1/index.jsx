import React from 'react';
import {connect} from "react-redux";
let num = 1;  // 这个类的 全局变量

class TestRudux1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("fresh TestRedux1");
        return (
            <div>
                <h1>TestRedux1</h1>
                <h4>{JSON.stringify(this.props.state)}</h4>
                <h3 onClick={this.props.onClick.bind(this, num++)}>click me!</h3>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // prop : state.xxx  | 意思是将state中的某个数据映射到props中
        state: state
    }
};

const mapDispatchToProps = (dispatch) => { // 默认传递参数就是dispatch
    return {
        onClick: (value1) => {   // 绑定onClick 函数到 组件TestRedux1 上， 组件TestRedux1 可以使用this.props.来获取
            console.log(value1)
            dispatch({
                type: 'userName',
                payload: `num: ${value1}`,
            });
        }
    };
};

// 使用connect将 state，dispatch相关信息 绑定到组件的props
TestRudux1 = connect(mapStateToProps, mapDispatchToProps)(TestRudux1);

export default TestRudux1;

