export const fetchMessages = () => {
    return (
        $.ajax({
            method: "GET",
            url: "/api/messages"
        })
    );
};

export const fetchMessage = (id) => {
    return (
        $.ajax({
            method: "GET",
            url: `/api/messages/${id}`
        })
    );
};

export const createMessage = (message) => {
    return (
        $.ajax({
            method: "POST",
            url: "/api/messages",
            data: { message }
        })
    );
};

export const updateMessage = (message) => {
    return (
        $.ajax({
            method: "PATCH",
            url: `/api/messages/${message.id}`,
            data: { message }
        })
    );
};

export const fetchChannelMessages = (channelId) => {
    return (
        $.ajax({
            method: "GET",
            url: "/api/messages",
            data: { channelId }
        })
    );
};

export const fetchDmMessages = (dmId) => {
    return (
        $.ajax({
            method: "GET",
            url: "/api/messages",
            data: { dmId }
        })
    );
};