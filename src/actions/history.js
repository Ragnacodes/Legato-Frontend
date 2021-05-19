import { mockedHistory } from '../playground/mockedHistory';

export const getHistory = (history) => {
    return {
        type: 'GET_HISTORY',
        history
    };
};

export const startGetHistory = (scenarioID, historyID) => {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(mockedHistory);
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