import Axios from '../utils/axiosConfig';

export const getConnections = (connections) => {
    return {
        type: 'GET_CONNECTIONS',
        connections
    };
};

export const startGetConnections = () => {
    return (dispatch, getState) => {
        const username = getState().auth.username;
        return Axios.get(`/users/${username}/connection/gettokens`)
        .then(res => {
            dispatch(getConnections(res.data.connections));
        })
        .catch(err => {
            console.log(err);
        });
    };
};

export const addConnection = (connection) => {
    return {
        type: 'ADD_CONNECTION',
        connection
    };
};

export const startAddConnection = () => {
    const url = window.location.href;
    const name = "spotify 3";
    const token = url.substring(url.indexOf("code=")+5);
    const token_type = url.slice(url.indexOf("redirect/")+9, url.indexOf("/?code"));
    return (dispatch, getState) => {
        const username = getState().auth.username;
        return Axios.post(`users/${username}/connections/addtoken`,{"name":name, 
                                                             "token_type": token_type,
                                                             "token": token})
            .then(res => {
                dispatch(addConnection(res.data.connection));
                window.close();
                return res.data.connection.ID;
             })
            .catch(err => {
                console.log(err);
                // alert("you already have this account");
            });
    };
};

export const removeConnection = (ID) => {
    return {
        type: 'REMOVE_CONNECTION',
        ID
    };
};

export const startRemoveConnection = (ID) => {
    return (dispatch, getState) => {
        const username = getState().auth.username;
        return Axios.post(`/users/${username}/connection/delete/token`,{"ID":ID})
        .then(res => {
            dispatch(removeConnection(ID));
        })
        .catch(err => {
            console.log(err);
        });
    };
};

export const editConnection = (ID, updates) => {
    return {
        type: 'EDIT_CONNECTION',
        ID,
        updates
    };
};

export const startEditConnection = (ID, newName) => {
    return (dispatch, getState) => {
        const username = getState().auth.username;
        console.log(newName);
        return Axios.post(`/users/${username}/connection/edit/token`,{"ID":ID, "Name":newName})
        .then(res => {
            dispatch(editConnection(ID, res.data.updates));
        })
        .catch(err => {
            console.log(err);
        });
    };
};