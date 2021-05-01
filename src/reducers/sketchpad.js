const sketchpadReducer = (state = {scenario: {}, elements: []}, action) => {
    switch (action.type) {
        case 'GET_SKETCHPAD':
            return {
                scenario: action.scenario,
                elements: action.elements
            };
            
        case 'ADD_ELEMENT':
            return {
                ...state,
                elements: [...state.elements, action.element]
            };

        case 'REMOVE_ELEMENT':
            return {
                ...state,
                elements: state.elements.filter(({id}) => id !== action.id)
            };

        case 'EDIT_ELEMENT':
            return {
                ...state,
                elements: state.elements.map((element) => {
                    if (element.id === action.id) {
                        return {
                            ...element,
                            ...action.updates
                        };
                    }
                    else return element;
                })
            };

        case 'EDIT_SKETCHPAD_SCENARIO':
            return {
                ...state,
                scenario : {
                    ...state.scenario,
                    ...action.updates
                }
            }

        default:
            return state;
    }
}

export default sketchpadReducer;