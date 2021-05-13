import { defaultHistoryState } from '../playground/history';

export const getHistory = (history) => {
    return {
        type: 'GET_HISTORY',
        history
    };
};

export const startGetHistory = (scenarioID) => {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(defaultHistoryState);
            }, 3000);
        })
        .then(res => {
            dispatch(getHistory(res));
        })
        .catch(err => {
            console.log(err);
        });
    };
};