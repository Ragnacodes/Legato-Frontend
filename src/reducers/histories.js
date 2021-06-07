const boilerplate = {
    scenario: {},
    histories: []
};

const historiesReducer = (state=boilerplate, action) => {
    switch (action.type) {
        case 'GET_HISTORIES':
            return {
                scenario: action.scenario,
                histories: action.histories
            };

        default:
            return state;
    };
};

export default historiesReducer;