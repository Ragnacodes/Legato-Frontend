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

export const startAddConnection = () => {
    const url = window.location.href;
    const token = url.substring(url.indexOf("code=")+5);
    const token_type = url.slice(url.indexOf("redirect/")+9, url.indexOf("/?code"));
    const name = "my " + token_type;
    return (dispatch, getState) => {
        const username = getState().auth.username;
        return Axios.post(`users/${username}/add/connection`,
            {
                name:name, 
                data : {"token": token},
                type: token_type
            }
        )                                                              
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
    return (dispatch, getState) => {
      const username = getState().auth.username;
      return Axios.post(`users/${username}/add/connection`, {
        data: {
            ...info,
        },
        name: info.name,
        type: 'sshes'
      })
        .then((res) => {
          dispatch(addConnection(res.data));
          return;
        })
        .catch((err) => {
            throw err;
          return;
        });
    };
  };

  export const startCheckSSHConnection = (info) => {
    return (dispatch, getState) => {
      const type = info['authType']===0? 'password' : 'sshKey';
      return Axios.post(`check/ssh/${type}`, {
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