import Axios from '../utils/axiosConfig';

export const getConnections = (connections) => {
    if (connections === null){
        connections = [];
    };
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
            throw err;
        });
    };
};

export const addConnection = (connection) => {
    return {
        type: 'ADD_CONNECTION',
        connection
    };
};

export const startAddConnection = (connection) => {
    return (dispatch, getState) => {
        const username = getState().auth.username;
        var count = 1;
        const connections = getState().connections;
        for (var i = 0; i < connections.length; i++) {
            if(connection.type === connections[i].type) {
                count++;
            }
        }
        connection.name += count.toString();
        return Axios.post(`users/${username}/add/connection`, connection)                                                              
            .then(res => {
                dispatch(addConnection(res.data));
             })
            .catch(err => {
                throw err;
            });
    };
};

export const removeConnection = (id) => {
    return {
        type: 'REMOVE_CONNECTION',
        id
    };
};

export const startRemoveConnection = (id) => {
    return (dispatch, getState) => {
        const username = getState().auth.username;
        return Axios.delete(`/users/${username}/connection/delete/${id}`)
        .then(res => {
            dispatch(removeConnection(id));
        })
        .catch(err => {
            throw err;
        });
    };
};

export const editConnection = (id, updates) => {
    return {
        type: 'EDIT_CONNECTION',
        id,
        updates
    };
};

export const startEditConnection = (id, newName) => {
    return (dispatch, getState) => {
        const username = getState().auth.username;
        return Axios.put(`/users/${username}/update/connection/name/${id}`,{"name":newName})
        .then(res => {
            dispatch(editConnection(id, res.data.updates));
        })
        .catch(err => {
            throw err;
        });
    };
};

export const startAddSSHConnection = (info) => {
    return (dispatch) => {
      const connection = {
        data: {
          ...info,
        },
        name: info.name,
        type: 'sshes'
      }
      dispatch(startAddConnection(connection));
    };
  };

  export const startCheckSSHConnection = (info, authType) => {
    return () => {
      return Axios.post(`check/ssh/${authType}`, {
        ...info
      })
        .then((res) => {
          return true;
        })
        .catch((err) => {
          return false;
        });
    };
  };