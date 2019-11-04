export default function (chatLog="", action){
    if (action && action.payload && action.type == 'chatLog') {
        return action.payload;
    }else {
        return chatLog;
    }
}