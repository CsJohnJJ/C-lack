import { RECEIVE_MESSAGES, RECEIVE_MESSAGE, RECEIVE_MESSAGE_ERRORS } from "../actions/message_actions";

export default (state = [], action) => {
    switch (action.type) {
        case RECEIVE_MESSAGES:
            return [];
        case RECEIVE_MESSAGE:
            return [];
        case RECEIVE_MESSAGE_ERRORS:
            return action.errors;
        default:
            return state;
    };
};