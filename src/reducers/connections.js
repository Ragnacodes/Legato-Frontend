const connectionsReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_CONNECTIONS':
            return action.connections;

        case 'ADD_CONNECTION':
            console.log(action.connection);
            return [...state, action.connection];

        case 'REMOVE_CONNECTION':
            return state.filter(({Id}) => Id !== action.Id);

        case 'EDIT_CONNECTION':
            return state.map((connection) => {
                if (connection.Id === action.Id) {
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