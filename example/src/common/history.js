/**
 * 通过react-router核心包来创建 自己需要的history类型
 * 参考链接： https://www.jianshu.com/p/3f36b09c63e6
 */
import {createBrowserHistory, createHashHistory} from "history";
let history = createHashHistory();

export default history;