export default function (statusMessage={}, action) {
    if (action && action.payload  && action.type == 'statusMessage'){
        return Object.assign({}, statusMessage, action.payload);
    }else {
        return statusMessage;
    }
}