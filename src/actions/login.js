export const ActionTypes = {
    UPDATE_LOGIN_INFO : "UPDATE_LOGIN_INFO",
    RESET_LOGIN_FORM: "RESET_LOGIN_FORM",
}


export const updateLoginInfo = (type, data) => 
({
    type: ActionTypes.UPDATE_LOGIN_INFO,
    payload: {type, data},
});

export const resetLoginForm = () => 
({
    type: ActionTypes.RESET_LOGIN_FORM,
});



