const defaultHistoryState = [
    {
        id: 1,
        time: '5 april 2021 22:12',
        status: 'success',
        duration: 2,
        operation: 3,
        data: 6
    },
    {
        id: 2,
        time: '7 may 2021 07:16',
        status: 'failure',
        duration: 1,
        operation: 1,
        data: 3
    },
]

const historyReducer = (state=defaultHistoryState, action) => {
    switch (action.type) {
        case 'GET_HISTORY':
            return action.history;

        default:
            return state;
    }
}

export default historyReducer;
