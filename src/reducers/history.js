const boilerplate = {
    scenario: {},
    history: {},
    logs: []
};

const historyReducer = (state=boilerplate, action) => {
    switch (action.type) {
        case 'GET_HISTORY':
            return {
                scenario: action.scenario,
                history: action.history,
                logs: action.logs
            };

        default:
            return state;
    };
};

export default historyReducer;