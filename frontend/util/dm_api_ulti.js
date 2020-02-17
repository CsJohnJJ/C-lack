export const fetchDms = () => {
    return (
        $.ajax({
            method: "GET",
            url: "/api/dms"
        })
    );
};

export const fetchDm = (id) => {
    return (
        $.ajax({
            method: "GET",
            url: `/api/dms/${id}`
        })
    );
};

export const createDm = (dm) => {
    return (
        $.ajax({
            method: "POST",
            url: "/api/dms",
            data: { dm }
        })
    );
};

export const deleteDm = (id) => {
    return (
        $.ajax({
            method: "DELETE",
            url: `/api/dms/${id}`
        })
    );
};

export const updateDm = (id) => {
    return (
        $.ajax({
            method: "PATCH",
            url: `/api/dms/${id}`,
            data: { id }
        })
    );
};