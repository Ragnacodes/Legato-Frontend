import React, { useState } from 'react';
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
import { GitHub, QueueMusic, Email, Telegram } from '@material-ui/icons';
import { CloseRounded } from "@material-ui/icons";


const AddConnection = (addConnection) => {
    const [addConnections, setAddConnection] = useState(addConnection);
    function onServiceClicked(e, inputService) {
        Axios.post("user/connection/access/token/urls", { "token_type": inputService })
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
            open={addConnections}
            onClose={() => setAddConnection(false)}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle disableTypography={true} style={{ paddingBottom: 4 }}>
                <Typography variant="h5">Service</Typography>
            </DialogTitle>
            <DialogContent>
                <CloseRounded
                    style={{ cursor: "pointer", fontSize: 24, position: "absolute", right: 10, top: 10, color: "$primary" }}
                    onClick={() => setAddConnection(false)}
                />
                <DialogContentText>
                    Please choose your service:
                </DialogContentText>
                <List>
                    <ListItem button onClick={(e) => onServiceClicked(e, "git")}>
                        <ListItemIcon>
                            <GitHub />
                        </ListItemIcon>
                        <ListItemText primary="GitHub" />
                    </ListItem>
                    <ListItem button onClick={(e) => onServiceClicked(e, "google")}>
                        <ListItemIcon>
                            <Email />
                        </ListItemIcon>
                        <ListItemText primary="Gmail" />
                    </ListItem>
                    <ListItem button onClick={(e) => onServiceClicked(e, "spotify")}>
                        <ListItemIcon>
                            <QueueMusic />
                        </ListItemIcon>
                        <ListItemText primary="Spotify" />
                    </ListItem>
                    <ListItem button onClick={(e) => onServiceClicked(e, "discord")}>
                        <ListItemIcon>
                            {/* <FontAwesomeIcon icon={faDiscord} /> */}
                            <i className="fab fa-discord" />
                        </ListItemIcon>
                        <ListItemText primary="Discord" />
                    </ListItem>
                    <ListItem button onClick={(e) => onServiceClicked(e, "telegram")}>
                        <ListItemIcon>
                            <Telegram />
                        </ListItemIcon>
                        <ListItemText primary="Telegram" />
                    </ListItem>
                </List>
            </DialogContent>
        </Dialog>

    )
}

export default AddConnection;