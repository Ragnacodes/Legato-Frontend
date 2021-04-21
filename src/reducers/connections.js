const connectionsReducer = (state = null, action) => {
    switch (action.type) {
        case 'GET_CONNECTIONS':
            return action.connections;

        case 'ADD_CONNECTION':
            return [...state, action.connection];

        case 'REMOVE_CONNECTION':
            return state.filter(({ID}) => ID !== action.ID);

        case 'EDIT_CONNECTION':
            return state.map((connection) => {
                if (connection.ID === action.ID) {
                    return {
                        ...connection,
                        ...action.updates
                    };
                }
                else {
                    return connection;
                }
            });

        default:
            return state;
    }
}

export default connectionsReducer;