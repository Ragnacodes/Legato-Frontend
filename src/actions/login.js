export const ActionTypes = {
    UPDATE_INFO : "UPDATE_INFO",
}


export const updateInfo = (type, data) => 
({
    type: ActionTypes.UPDATE_INFO,
    payload: {type, data},
});



