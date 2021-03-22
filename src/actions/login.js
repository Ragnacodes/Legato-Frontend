export const ActionTypes = {
    UPDATE_LOGIN_INFO : "UPDATE_LOGIN_INFO",
}


export const updateLoginInfo = (type, data) => 
({
    type: ActionTypes.UPDATE_LOGIN_INFO,
    payload: {type, data},
});



