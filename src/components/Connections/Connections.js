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
import PageTitle from '../Layout/PageTitle';

const Connections = ({ connections, getConnections }) => {
    useEffect(() => {
        getConnections()
            .then(() => {
            })
            .catch(() => {
            });
    }, [getConnections]);

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
            <Appbar leftChildren={<PageTitle title="Connections" />} rightChildren={rightChildren} />
            <main className="main">
                <div className="app-bar-spacer" />
                <div className="content-container">
                    <Container maxWidth="lg">
                        {connections == null ? 
                                <Typography component="h5" variant="h7" color="inherit" noWrap>
                                    there are no items!
                                </Typography> 
                            :
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