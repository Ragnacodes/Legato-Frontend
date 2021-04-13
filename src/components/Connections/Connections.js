import React, { useState, useEffect } from 'react';
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import AddConnection from './AddConnection';
import Appbar from '../Layout/Appbar';
import {
    Button,
    Typography,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Container,
    List
} from "@material-ui/core";
import { connect } from 'react-redux';
import Connection from './Connection';
import { startGetConnections } from '../../actions/connections';

const Connections = ({ connections, getConnections }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        setLoading(true);
        setError(false);
        getConnections()
            .then(() => {
                setLoading(false);
                setError(false);
            })
            .catch(() => {
                setLoading(false);
                setError(true);
            });
    }, []);

    const [addConnection, setAddConnection] = useState(false);
    const rightChildren =
        <Button
            variant="contained"
            color="secondary"
            onClick={() => setAddConnection(true)}
        >
            Add connection
        </Button>
    return (
        <>
            <Appbar rightChildren={rightChildren} />
            <main className="main">
                <div className="app-bar-spacer" />
                <div className="content-container">
                    <Container maxWidth="lg">
                        {connections.length === 0 ? <p>There is no item</p> :
                            <List>
                                {
                                    connections.map((connection) => {
                                        return <Connection key={connection.ID} {...connection} />;
                                    })
                                }
                            </List>
                        }
                        <Dialog
                            disableBackdropClick
                            className="signup-dialog"
                            open={addConnection}
                            onClose={() => setAddConnection(false)}
                            aria-labelledby="form-dialog-title"
                        >
                            <DialogTitle disableTypography={true} style={{ paddingBottom: 4 }}>
                                <Typography variant="h5">Service</Typography>
                            </DialogTitle>
                            <DialogContent>
                                <CloseRoundedIcon
                                    style={{ cursor: "pointer", fontSize: 24, position: "absolute", right: 10, top: 10, color: "$primary" }}
                                    onClick={() => setAddConnection(false)}
                                />
                                <DialogContentText>
                                    Please choose your service:
                            </DialogContentText>
                                <AddConnection closeDialog={() => setAddConnection(false)} />
                            </DialogContent>
                        </Dialog>
                    </Container>
                </div>
            </main>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        connections: state.connections
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getConnections: () => dispatch(startGetConnections()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Connections);