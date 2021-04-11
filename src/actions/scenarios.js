import Axios from '../utils/axiosConfig';

export const getScenarios = (scenarios) => {
    return {
        type: 'GET_SCENARIOS',
        scenarios
    };
};

export const startGetScenarios = () => {
    return (dispatch, getState) => {
        const username = getState().auth.username;
        return Axios.get(`/users/${username}/scenarios`)
        .then(res => {
            dispatch(getScenarios(res.data.scenarios));
        })
        .catch(err => {
            console.log(err);
        });
    };
};

export const addScenario = (scenario) => {
    return {
        type: 'ADD_SCENARIO',
        scenario
    };
};

export const startAddScenario = (scenario) => {
    const body = JSON.stringify(scenario);
    return (dispatch, getState) => {
        const username = getState().auth.username;
        return Axios.post(`/users/${username}/scenarios`, body)
        .then(res => {
            dispatch(addScenario(res.data.scenario));
        })
        .catch(err => {
            console.log(err);
        });
    };
};

export const removeScenario = (id) => {
    return {
        type: 'REMOVE_SCENARIO',
        id
    };
};

export const editScenario = (id, updates) => {
    return {
        type: 'EDIT_SCENARIO',
        id,
        updates
    };
};

export const startEditScenario = (id, updates) => {
    const body = JSON.stringify(updates);
    return (dispatch, getState) => {
        const username = getState().auth.username;
        return Axios.post(`/users/${username}/scenarios/:scenario_id`, body)
        .then(res => {
            dispatch(editScenario(id, res.data.updates));
        })
        .catch(err => {
            console.log(err);
        });
    };
};