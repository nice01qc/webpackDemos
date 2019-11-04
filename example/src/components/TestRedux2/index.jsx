import React from 'react';
import {connect} from "react-redux";

class TestRudux2 extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log("TestRudux2 componentWillUpdate")
    }

    render() {
        console.log("fresh TestRedux2");
        return (
            <div>
                <h1>TestRedux2</h1>
                <h4>{this.props.chatLog}</h4>
                <button onClick={this.props.onClick}>click me !</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // prop : state.xxx  | 意思是将state中的某个数据映射到props中
        chatLog: state.chatLog
    }
};

const mapDispatchToProps = (dispatch) => { // 默认传递参数就是dispatch
    return {
        onClick: () => {
            dispatch({
                type: 'chatLog',
                payload: `the chateLogNumber: ${Math.random()}`,
            });
        }
    };
};

TestRudux2 = connect(mapStateToProps, mapDispatchToProps)(TestRudux2);

export default TestRudux2;

