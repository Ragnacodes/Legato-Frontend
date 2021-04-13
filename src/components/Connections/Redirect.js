import React from 'react';
import Axios from "../../utils/axiosConfig";
import { TextField, Button, Typography } from '@material-ui/core';
import { connect } from 'react-redux';


const Redirect = (state) => {
    //console.log(window.location.href.substring(window.location.href.indexOf("code=")));
    const url = window.location.href;
    // const url = "http://localhost:3000/redirect/spotify/?code=AQDeHWyVJU-ThHUOGQVt6c9p3LSsS_ilqldhHBJCZWyV-vYIKcWPZNHXV-IUU-0x0aSk2vvchBiMw3d2f0UrIbO7myw1CEPhzx8FStfMZ0S8KaAcA_n5OMRIRmmft8XcKLAxvdH8gyhvmGw6DE3MBCAuV2A1ax5BJbLbIi6rYEsaxfj_joXab4iT-XzehRBYH316fNR1-WIvVdelCf0&state=abc123"
    function onSaveClicked(){
        const name = document.getElementById("service-name").value;    
        const token = url.substring(url.indexOf("code=")+5);
        const token_type = url.slice(url.indexOf("redirect/")+9, url.indexOf("/?code"));
        // console.log(name);
        // console.log("token:" + token);
        // console.log("type: " + token_type);
        // console.log(state.username);
        Axios.post(`users/${state.username}/connections/addtoken`,{"name":name, 
                                                             "token_type": token_type,
                                                             "token": token})
            .then(res => {
                console.log(res);
                // window.close();
             })
            .catch(err => {
                console.log(err);
            });
        
    };
    return (
        <div style={{textAlign:"center", position:"center", padding:40, margin:"auto", marginTop:100}}>
            <form
                autoComplete="off"
                className="login-form"
                style = {{width:300, margin:"auto"}}
            >
                <Typography variant="h5">
                    service successfully added
                </Typography>
                <TextField
                    type="text"
                    className="text-field"
                    label="service name: "
                    variant="outlined"
                    id = "service-name"
                />

                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className="form-button"
                    style={{width:80}}
                    onClick={onSaveClicked}
                >
                    Save
                </Button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        username: state.auth.username,
    };
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//       loadScenarios: (type, data) => dispatch(addConnection(type, data)),
//     }
//   }

export default connect(mapStateToProps)(Redirect);