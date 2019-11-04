import React from 'react';
import {connect} from "react-redux";
import TestRudux2 from "../../components/TestRedux2";

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

// 新组件 newTestRedux2
let NewTestRedux2 = connect(mapStateToProps, mapDispatchToProps)(TestRudux2);

export default NewTestRedux2;

