import * as MessageApiUtil from "../util/message_api_util";

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const RECEIVE_MESSAGE_ERRORS = "RECEIVE_MESSAGE_ERRORS";

export const receiveMessages = (messages) => {
    return {
        type: RECEIVE_MESSAGES,
        messages
    };
};

export const receiveMessage = (message) => {
    return {
        type: RECEIVE_MESSAGE,
        message
    };
};

export const receiveMessageErrors = (errors) => {
    return {
        type: RECEIVE_MESSAGE_ERRORS,
        errors
    };
};

// thunk action
export const fetchMessages = () => {
    return (dispatch) => {
        return MessageApiUtil.fetchMessages().then((messages) => {
            dispatch(receiveMessages(messages))
        });
    };
};

export const fetchMessage = (id) => {
    return (dispatch) => {
        return MessageApiUtil.fetchMessage(id).then((message) => {
            dispatch(receiveMessage(message))
        });
    };
};

export const createMessage = (message) => {
    return (dispatch) => {
        return MessageApiUtil.createMessage(message).then((message) => {
            dispatch(receiveMessage(message))
        });
    };
};

export const updateMessage = (message) => {
    return (dispatch) => {
        return MessageApiUtil.updateMessage(message).then((message)=> {
            dispatch(receiveMessage(message))
        });
    };
};

export const fetchChannelMessages = (channelId) => {
    return (dispatch) => {
        return MessageApiUtil.fetchChannelMessages(channelId).then((messages) => { debugger
            return dispatch(receiveMessages(messages))    
        });
    };
};

export const fetchDmMessages = (dmId) => {
    return (dispatch) => {
        return MessageApiUtil.fetchDmMessages(dmId).then((messages) => {
            dispatch(receiveMessages(messages))
        });
    };
};
