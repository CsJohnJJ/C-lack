import * as ChannelApiUtil from '../util/channel_api_util';

// regular actions
export const RECEIVE_ALL_CHANNELS = "RECEIVE_ALL_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const REMOVE_CHANNEL = "REMOVE_CHANNELS";
export const RECEIVE_CHANNEL_ERRORS = "RECEIVE_CHANNEL_ERRORS";
export const CLEAR_CHANNEL_ERRORS = "CLEAR_CHANNEL_ERRORS";

const receiveChannels = (channels) => {
    return {
        type: RECEIVE_ALL_CHANNELS,
        channels
    };
};

const receiveChannel = (channel) => {
    return {
        type: RECEIVE_CHANNEL,
        channel
    };
};
const removeChannel = (channelId) => {
    return{
        type: REMOVE_CHANNEL,
        channelId
    };
};

const receiveErrors = (errors) => {
    return {
        type:  RECEIVE_CHANNEL_ERRORS,
        errors
    };
};

const clearChannelErrors = () => {
    return {
        type: RECEIVE_CHANNEL_ERRORS
    };
};

// thunk actions
export const fetchChannels = () => {
    return (dispatch) => {
        return ChannelApiUtil.fetchChannels().then((channels) => {
            dispatch(receiveChannels(channels))
        });
    };
};

export const fetchChannel = (id) => {
    return (dispatch) => {
        return ChannelApiUtil.fetchChannel(id).then((channel) => {
            dispatch(receiveChannel(channel));
        });
    };
};

export const destroyChannel = (id) => {
    return (dispatch) => {
        return ChannelApiUtil.destroyChannel(id).then((channel) => {
            dispatch(removeChannel(channel));
        });
    };
};

export const updateChannel = (id) => {
    return (dispatch) => {
        return ChannelApiUtil.updateChannel(id).then((channel) => {
            dispatch(receiveChannel(channel));
        });
    };
};

export const createChannel = (channel) => {
    return (dispatch) => {
        return ChannelApiUtil.createChannel(channel).then((channel) => {
            dispatch(receiveChannel(channel))
        });
    };
};