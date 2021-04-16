import React from 'react';
import Axios from '../../utils/axiosConfig';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core';
import { GitHub, QueueMusic, Email } from '@material-ui/icons';

const AddConnection = (addConnection) => {
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
                <i className="fab fa-discord"/>
                </ListItemIcon>
                <ListItemText primary="Discord" />
            </ListItem>
        </List>
    )
}

export default AddConnection;