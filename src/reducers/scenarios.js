const scenariosReducerDefaultState = [
    {
        id: "15",
        name: "Scenario fifteen",
        is_active: false,
        interval: 0,
        nodes: ['spotify', 'telegram', 'webhook', 'github', 'ssh'],
    },
    {
        id: "16",
        name: "Scenario sixteen",
        is_active: true,
        interval: 15,
        nodes: ['ssh', 'webhook', 'github', 'spotify', 'telegram'],
    },
    {
        id: "11",
        name: "Scenario eleven",
        is_active: true,
        interval: 15,
        nodes: ['ssh', 'webhook', 'spotify', 'telegram'],
    },
    {
        id: "12",
        name: "Scenario tweleve",
        is_active: true,
        interval: 5,
        nodes: ['github', 'ssh', 'webhook', 'spotify'],
    },
    {
        id: "13",
        name: "Scenario thirteen",
        is_active: false,
        interval: 0,
        nodes: ['telegram', 'github', 'ssh', 'webhook'],
    },
    {
        id: "14",
        name: "Scenario fourteen",
        is_active: false,
        interval: 15,
        nodes: ['spotify', 'webhook', 'telegram', 'spotify'],
    },
    {
        id: "6",
        name: "Scenario six",
        is_active: true,
        interval: 10,
        nodes: ['ssh', 'webhook', 'spotify'],
    },
    {
        id: "7",
        name: "Scenario seven",
        is_active: true,
        interval: 5,
        nodes: ['telegram', 'github', 'ssh'],
    },
    {
        id: "8",
        name: "Scenario eight",
        is_active: false,
        interval: 15,
        nodes: ['webhook', 'spotify', 'telegram'],
    },
    {
        id: "9",
        name: "Scenario nine",
        is_active: false,
        interval: 0,
        nodes: ['github', 'ssh', 'webhook'],
    },
    {
        id: "10",
        name: "Scenario ten",
        is_active: true,
        interval: 20,
        nodes: ['spotify', 'telegram', 'github'],
    },
    {
        id: "1",
        name: "Scenario one",
        is_active: true,
        interval: 10,
        nodes: ['ssh', 'webhook'],
    },
    {
        id: "2",
        name: "Scenario two",
        is_active: false,
        interval: 0,
        nodes: ['spotify', 'telegram'],
    },
    {
        id: "3",
        name: "Scenario three",
        is_active: false,
        interval: 15,
        nodes: ['github', 'ssh'],
    },
    {
        id: "4",
        name: "Scenario four",
        is_active: true,
        interval: 5,
        nodes: ['webhook', 'spotify'],
    },
    {
        id: "5",
        name: "Scenario five",
        is_active: false,
        interval: 20,
        nodes: ['telegram', 'github'],
    },
];

const scenariosReducer = (state = scenariosReducerDefaultState, action) => {
    switch (action.type) {
        case 'GET_SCENARIOS':
            return [...state, action.scenarios];
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
