import Axios from '../utils/axiosConfig';

export const getHistories = (scenario, histories) => {
    return {
        type: 'GET_HISTORIES',
        scenario,
        histories
    };
};

export const startGetHistories = (scenarioID) => {
    return (dispatch, getState) => {
        const username = getState().auth.username;
        return Axios.get(`/users/${username}/logs/${scenarioID}/`)
        .then(res => {
            const scenario = {
                id: scenarioID,
                name: res.data.scenario.name
            };
            const histories = res.data.histories.map(history => {
                const newDate = new Date(history.created_at);
                const date = newDate.toDateString();
                const time = newDate.toTimeString().slice(0,8);
                return {
                    id: history.id,
                    date,
                    time,
                    status: 1,
                    duration: 'N/A',
                    operations: 'N/A',
                    data: 'N/A'
                };
            });
            dispatch(getHistories(scenario, histories));
        })
        .catch(err => {
            throw err
        });
    };
};