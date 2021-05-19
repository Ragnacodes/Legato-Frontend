const boilerplate = {
    scenario: {},
    histories: []
};

const historiesReducer = (state=boilerplate, action) => {
    switch (action.type) {
        case 'GET_HISTORIES':
            return action.histories;

        default:
            return state;
    };
};

export default historiesReducer;