const httpReducer = (state=[], action) => {
    switch (action.type) {
        case 'ADD_HTTP':
            return [...state, action.http];

        default:
            return state;
    }
}

export default httpReducer;
