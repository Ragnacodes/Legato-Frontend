const scenariosReducerDefaultState = [
    {
        id: "1",
        name: "Scenario one",
        isActive: false,
        interval: 10,
    },
    {
        id: "2",
        name: "Scenario two",
        isActive: false,
        interval: 10,
    },
    {
        id: "3",
        name: "Scenario three",
        isActive: false,
        interval: 10,
    },
    {
        id: "4",
        name: "Scenario four",
        isActive: false,
        interval: 10,
    },
    {
        id: "5",
        name: "Scenario five",
        isActive: false,
        interval: 10,
    },
    {
        id: "6",
        name: "Scenario six",
        isActive: false,
        interval: 10,
    },
    {
        id: "7",
        name: "Scenario seven",
        isActive: false,
        interval: 10,
    },
    {
        id: "8",
        name: "Scenario eight",
        isActive: false,
        interval: 10,
    },
    {
        id: "9",
        name: "Scenario nine",
        isActive: false,
        interval: 10,
    },
    {
        id: "10",
        name: "Scenario ten",
        isActive: false,
        interval: 10,
    },
    {
        id: "11",
        name: "Scenario ten",
        isActive: false,
        interval: 10,
    },
    {
        id: "12",
        name: "Scenario ten",
        isActive: false,
        interval: 10,
    },
    {
        id: "13",
        name: "Scenario ten",
        isActive: false,
        interval: 10,
    },
    {
        id: "14",
        name: "Scenario ten",
        isActive: false,
        interval: 10,
    },
    {
        id: "15",
        name: "Scenario ten",
        isActive: false,
        interval: 10,
    },
    {
        id: "16",
        name: "Scenario ten",
        isActive: false,
        interval: 10,
    }
];

const scenariosReducer = (state = scenariosReducerDefaultState, action) => {
    switch (action.type) {
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
