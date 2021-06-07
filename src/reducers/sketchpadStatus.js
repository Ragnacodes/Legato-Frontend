const boilerplate = {
    fetched: null,
    loading: null,
    failed: null
};

const sketchpadStatusReducer = (state=boilerplate, action) => {
    switch (action.type) {
        case 'UPDATE_STATUS':
            return {
                ...state,
                ...action.updates
            };

        default:
            return state;
    };
};

export default sketchpadStatusReducer;