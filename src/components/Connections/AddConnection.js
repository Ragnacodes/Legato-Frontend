import React from 'react';
import Axios from '../../utils/axiosConfig';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@material-ui/core';
import { CloseRounded } from '@material-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faSpotify, faGoogle, faTelegram, faGithub } from '@fortawesome/free-brands-svg-icons';


const AddConnection = ({addDialog, setAddDialog}) => {
    function onServiceClicked(e, service) {
        setAddDialog(false);
        Axios.post("user/connection/access/token/urls", { "token_type": service })
            .then(res => {
                window.open(res.data["url"], "", "width=500, height=400, left=425, top=150");
            })
            .catch(err => {
                console.log(err);
            });
    };
    return (
        <Dialog
            disableBackdropClick
            className="signup-dialog"
            open={addDialog}
            onClose={() => setAddDialog(false)}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle disableTypography={true} style={{ paddingBottom: 4 }}>
                <Typography variant="h5">Service</Typography>
            </DialogTitle>
            <DialogContent>
                <CloseRounded
                    style={{ cursor: "pointer", fontSize: 24, position: "absolute", right: 10, top: 10, color: "$primary" }}
                    onClick={() => setAddDialog(false)}
                />
                <DialogContentText>
                    Please choose your service:
                </DialogContentText>
                <List>
                    <ListItem button onClick={(e) => onServiceClicked(e, "git")}>
                        <ListItemIcon style={{fontSize:30}}>
                            <FontAwesomeIcon icon={faGithub} />
                        </ListItemIcon>
                        <ListItemText primary="GitHub" />
                    </ListItem>
                    <ListItem button onClick={(e) => onServiceClicked(e, "google")}>
                        <ListItemIcon style={{fontSize:30}}>
                            <FontAwesomeIcon icon={faGoogle} />
                        </ListItemIcon>
                        <ListItemText primary="Gmail" />
                    </ListItem>
                    <ListItem button onClick={(e) => onServiceClicked(e, "spotify")}>
                        <ListItemIcon style={{fontSize:30}}>
                            <FontAwesomeIcon icon={faSpotify} />
                        </ListItemIcon>
                        <ListItemText primary="Spotify" />
                    </ListItem>
                    <ListItem button onClick={(e) => onServiceClicked(e, "discord")}>
                        <ListItemIcon style={{fontSize:30}}>
                            <FontAwesomeIcon icon={faDiscord} />
                        </ListItemIcon>
                        <ListItemText primary="Discord" />
                    </ListItem>
                    <ListItem button onClick={(e) => onServiceClicked(e, "telegram")}>
                        <ListItemIcon style={{fontSize:30}}>
                            <FontAwesomeIcon icon={faTelegram} />
                        </ListItemIcon>
                        <ListItemText primary="Telegram" />
                    </ListItem>
                </List>
            </DialogContent>
        </Dialog>

    )
}

export default AddConnection;