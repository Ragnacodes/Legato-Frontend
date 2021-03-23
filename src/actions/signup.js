export const ActionTypes = {
    UPDATE_INFO : "UPDATE_INFO",
    DELETE_ERROR: "DELETE_ERROR",
    SET_ERROR: "SET_ERROR",
    VALIDATE_PASSWORDS: "VALIDATE_PASSWORDS",
    RESET_FORM: "RESET_SIGNUP_FORM"
}

export const resetSignupForm = () => 
({
    type: ActionTypes.RESET_SIGNUP_FORM,
})

export const updateInfo = (type, data) => 
({
    type: ActionTypes.UPDATE_INFO,
    payload: {type, data},
});

export const deleteError = (type) => 
{
    return dispatch => {
    dispatch(setError(type, ""))
}};

export const setError = (type, err) => 
({
    type: ActionTypes.SET_ERROR,
    payload: {type, err},
});

export const validateConfirmPassword = () => 
({
    type: ActionTypes.VALIDATE_PASSWORDS,
    payload: {err:"Your passwords do not match."}
})

export const validateUsername = (data) => 
{
    return dispatch =>
    {
        const usernameRegex = /^[a-z]+.*$/i
        if(usernameRegex.test(data))
        {
            dispatch(deleteError("username"));
        }
        else{
            dispatch(setError("username", "Username should start with letter."));
        }
        
    }
}

export const validateEmail = (data) => 
{
    return dispatch =>
    {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(emailRegex.test(data))
        {
            dispatch(deleteError("email"));
        }
        else
        {
            dispatch(setError("email", "Please enter a valid email."));
        }
        
    }
}

export const validatePassword = (data) => 
{
    return dispatch =>
    {
        if(data.length >= 8)
        {
            dispatch(deleteError("password"));
        }
        else
        {
            dispatch(setError("password", "Password is too short."));
        }   
    }
}

export const validateInfo = (type, data) => 
{
    return dispatch =>
    {
        if(!data)
        {
            // console
            dispatch(setError(type, "Required."))
        }
        else
        {
            if(type === "password")
            {
                dispatch(validatePassword(data))
                dispatch(validateConfirmPassword())
            }
            else if(type === "email")
                dispatch(validateEmail(data))
            else if(type === "username")
                dispatch(validateUsername(data))
            else if(type === "confirm")
                dispatch(validateConfirmPassword())
        }
    }
}

