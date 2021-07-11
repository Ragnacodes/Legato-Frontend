import Axios from '../utils/axiosConfig';

export const getHistory = (scenario, history, logs) => {
    return {
        type: 'GET_HISTORY',
        scenario,
        history,
        logs
    };
};

export const startGetHistory = (scenarioID, historyID) => {
    return (dispatch, getState) => {
        const username = getState().auth.username;
        return Axios.get(`/users/${username}/logs/${scenarioID}/histories/${historyID}`)
        .then(res => {
            const scenario = {
                id: scenarioID,
                name: res.data.scenario.name
            };
            const newDate = new Date(res.data.history.created_at);
            const date = newDate.toDateString();
            const time = newDate.toTimeString().slice(0,8);
            const history = {
                id: historyID,
                date,
                time,
                status: 1,
                duration: 'N/A',
                operations: 'N/A',
                data: 'N/A'
            };
            const logs = res.data.logs.map(log => {
                const { id, name, type, subType } = log.Service;

                const subTypeFront = getState().services[type]
                .find(element => element.subService === subType)
                .primaryText;

                return {
                    id: log.id,
                    status: 1,
                    time: log.created_at,
                    service: {
                        id,
                        name,
                        type,
                        subType: subTypeFront
                    },
                    messages: log.Messages
                };
                
            });
            dispatch(getHistory(scenario, history, logs));
        })
        .catch(err => {
            throw err;
        });
    };
};