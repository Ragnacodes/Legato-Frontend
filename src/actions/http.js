import Axios from '../utils/axiosConfig';

export const addHttp = (http) => {
    return {
        type: 'ADD_HTTP',
        payload: {
            http,
        },
    };
};

export const startAddHttp = (http) => {
    return (dispatch, getState) => {
        const username = getState().auth.username;
        return Axios.post(`/users/${username}/services/https`, {
            "data" : {
                "url": http.url,
                "method": http.method
            }
        })
            .then((res) => {
                dispatch(addHttp(res.data));
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
};