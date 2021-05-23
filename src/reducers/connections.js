const connectionsReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_CONNECTIONS':
            return action.connections;

        case 'ADD_CONNECTION':
            return [...state, action.connection];

        case 'REMOVE_CONNECTION':
            return state.filter(({id}) => id !== action.id);

        case 'EDIT_CONNECTION':
            return state.map((connection) => {
                if (connection.id === action.id) {
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