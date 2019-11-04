export default function (userName="", action) {
    if (action && action.payload && action.type == 'userName'){
        return action.payload;
    }else {
        return userName;
    }
}