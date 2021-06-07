const nodePopoverReducer = (state={nodeID: null, props: {}}, action) => {
    switch (action.type) {
        case 'SET_NODE_ID':
            return {
                nodeID: action.nodeID,
                props: action.props
            };

        default:
            return state;
    };
};

export default nodePopoverReducer;