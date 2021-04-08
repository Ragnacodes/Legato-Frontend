const sketchpadReducerDefaultState = [];

const sketchpadReducer = (state = sketchpadReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_ELEMENTS':
            return action.elements
            
        case 'ADD_ELEMENT':
            return [...state, action.element]

        case 'REMOVE_ELEMENT':
            return state.filter(({id}) => id !== action.id);

        case 'EDIT_ELEMENT':
            return state.map((element) => {
                if (element.id === action.id) {
                    return {
                        ...element,
                        ...action.updates
                    };
                }
                else {
                    return element;
                }
            });

        default:
            return state;
    }
}

export default sketchpadReducer;