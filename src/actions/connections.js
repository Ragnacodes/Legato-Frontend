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
        return Axios.get(`/users/${username}/get/connections`)
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
    const token = url.substring(url.indexOf("code=")+5);
    const token_type = url.slice(url.indexOf("redirect/")+9, url.indexOf("/?code"));
    const name = "my " + token_type;
    return (dispatch, getState) => {
        const username = getState().auth.username;
        // const userConnections = getState().connections;
        // console.log(userConnections);
        // const counter=0;
        // for (var connection in userConnections){
        //     console.log(connection);
        //     if (connection.token_type === token_type){
        //         counter = counter + 1;
        //     }
        // }
        // const name = "my " + token_type + " " + counter.toString();
        return Axios.post(`users/${username}/add/connection`,{"name":name, 
                                                             "token_type": token_type,
                                                             "token": token})
            .then(res => {
                dispatch(addConnection(res.data["connection"]));
             })
            .catch(err => {
                console.log(err);
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
        return Axios.delete(`/users/${username}/connection/delete/${ID}`)
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
        return Axios.put(`/users/${username}/update/connection/name/${ID}`,{"name":newName})
        .then(res => {
            dispatch(editConnection(ID, res.data.updates));
        })
        .catch(err => {
            console.log(err);
        });
    };
};