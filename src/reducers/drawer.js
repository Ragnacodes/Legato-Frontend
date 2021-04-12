const drawerReducer = (state = {open: false}, action) => {
    switch(action.type) {
        case 'TOGGLE_DRAWER':
            return {open: !state.open};
        default:
            return state;
    };
};

export default drawerReducer;