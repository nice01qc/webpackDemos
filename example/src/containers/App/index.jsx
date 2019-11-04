import React from "react";

// 建议文件格式为  文件夹名字与类名一致, 文件夹下组件文件 名字为index.xx
// 这样引入格式变为： import App from "xxx/containers/App";
class App extends React.Component {
    render() {
        return (
            <div>
                这就是要给组件喔！
            </div>
        );
    }
}

export default App;