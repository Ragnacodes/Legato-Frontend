import { mockedHistories } from '../playground/mockedHistories';

export const getHistories = (histories) => {
    return {
        type: 'GET_HISTORIES',
        histories
    };
};

export const startGetHistories = (scenarioID) => {
    return (dispatch, getState) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(mockedHistories);
            }, 3000);
        })
        .then(res => {
            dispatch(getHistories(res));
        })
        .catch(err => {
            throw err;
        });
    };
};