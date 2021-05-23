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
    console.log(connection);
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
        return Axios.post(`users/${username}/add/connection`,{"Name":name, "Data" : {"Token_type": token_type,
                                                                                     "Token": token}})
                                                                       
            .then(res => {
                dispatch(addConnection(res.data));
             })
            .catch(err => {
                console.log(err);
            });
    };
};

export const removeConnection = (Id) => {
    return {
        type: 'REMOVE_CONNECTION',
        Id
    };
};

export const startRemoveConnection = (Id) => {
    return (dispatch, getState) => {
        const username = getState().auth.username;
        return Axios.delete(`/users/${username}/connection/delete/${Id}`)
        .then(res => {
            dispatch(removeConnection(Id));
        })
        .catch(err => {
            console.log(err);
        });
    };
};

export const editConnection = (Id, updates) => {
    return {
        type: 'EDIT_CONNECTION',
        Id,
        updates
    };
};

export const startEditConnection = (Id, newName) => {
    return (dispatch, getState) => {
        const username = getState().auth.username;
        return Axios.put(`/users/${username}/update/connection/name/${Id}`,{"name":newName})
        .then(res => {
            dispatch(editConnection(Id, res.data.updates));
        })
        .catch(err => {
            console.log(err);
        });
    };
};

export const startAddSSHConnection = (info) => {
    return (dispatch, getState) => {
      const username = getState().auth.username;
      return Axios.post(`users/${username}/add/connection`, {
        data: {
            ...info,
            type: 'ssh'
        },
        name: info.name,
      })
        .then((res) => {
          dispatch(addConnection(res.data));
          return;
        })
        .catch((err) => {
          console.log(err);
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
          console.log(err);
          return false;
        });
    };
  };