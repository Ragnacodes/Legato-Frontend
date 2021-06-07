const scenariosReducer = (state=[], action) => {
    switch (action.type) {
        case 'GET_SCENARIOS':
            return action.scenarios;

        case 'ADD_SCENARIO':
            return [...state, action.scenario];

        case 'REMOVE_SCENARIO':
            return state.filter(({id}) => id !== action.id);

        case 'EDIT_SCENARIO':
            return state.map((scenario) => {
                if (scenario.id === action.id) {
                    return {
                        ...scenario,
                        ...action.updates
                    };
                }
                else {
                    return scenario;
                }
            });

        default:
            return state;
    }
}

export default scenariosReducer;
