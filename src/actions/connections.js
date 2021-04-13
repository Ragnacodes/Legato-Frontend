import Axios from '../utils/axiosConfig';

export const getConnections = (connections) => {
    console.log(connections);
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
            dispatch(getConnections(res.data));
        })
        .catch(err => {
            console.log(err);
        });
    };
};

// export const addConnection = (connection) => {
//     return {
//         type: 'ADD_CONNECTION',
//         connection
//     };
// };

// export const startAddConnection = (connection) => {
//     const body = JSON.stringify(connection);
//     return (dispatch, getState) => {
//         const username = getState().auth.username;
//         return Axios.post(``, body)
//         .then(res => {
//             dispatch(addConnection(res.data.connection));
//             return res.data.connection.ID;
//         })
//         .catch(err => {
//             console.log(err);
//         });
//     };
// };

export const removeConnection = (ID) => {
    return {
        type: 'REMOVE_CONNECTION',
        ID
    };
};

// export const editConnection = (ID, updates) => {
//     return {
//         type: 'EDIT_CONNECTION',
//         ID,
//         updates
//     };
// };

// export const startEditConnection = (ID, updates) => {
//     const body = JSON.stringify(updates);
//     return (dispatch, getState) => {
//         const username = getState().auth.username;
//         return Axios.post(``, body)
//         .then(res => {
//             dispatch(editConnection(ID, res.data.updates));
//         })
//         .catch(err => {
//             console.log(err);
//         });
//     };
// };