const boilerplate = {
    scenario: {},
    history: {},
    logs: []
};

const historyReducer = (state=boilerplate, action) => {
    switch (action.type) {
        case 'GET_HISTORY':
            return action.history;

        default:
            return state;
    };
};

export default historyReducer;