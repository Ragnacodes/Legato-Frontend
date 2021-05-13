const historyReducer = (state={}, action) => {
    switch (action.type) {
        case 'GET_HISTORY':
            return action.history;

        default:
            return state;
    }
}

export default historyReducer;
