const connectionsReducerDefaultState = [
    {
        ID: 10,
        CreatedAt: "2021-04-11T20:23:44.487065Z",
        UpdatedAt: "2021-04-11T20:23:44.490836Z",
        DeletedAt: null,
        Token: "1afcd222222sdcfaxsdfsaz",
        Token_type: "spotify",
        UserID: 3,
        Name: "spotify4"
    },
    {
        ID: 11,
        CreatedAt: "2021-04-11T20:25:22.047339Z",
        UpdatedAt: "2021-04-11T20:25:22.056967Z",
        DeletedAt: null,
        Token: "1afcd222222sdcfaxsdfsaz",
        Token_type: "spotify",
        UserID: 3,
        Name: "weiurhuiwe9"
    },
    {
        ID: 12,
        CreatedAt: "2021-04-12T14:48:46.605771Z",
        UpdatedAt: "2021-04-12T14:48:46.626229Z",
        DeletedAt: null,
        Token: "dpsfihio514356dfsc5sdf5c1252dcsx52",
        Token_type: "git",
        UserID: 3,
        Name: "github arman"
    }
 ]

const connectionsReducer = (state = connectionsReducerDefaultState, action) => {
    switch (action.type) {
        case 'GET_CONNECTIONS':
            return action.connections;

        // case 'ADD_CONNECTION':
        //     return [...state, action.connection];

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