import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { startGetConnections } from '../../actions/connections';
import {
    Button,
    Container,
    List
} from "@material-ui/core";
import Appbar from '../Layout/Appbar';
import PageTitle from '../Layout/PageTitle';
import AddConnection from './AddConnection';
import Connection from './Connection';
import NoItem from '../Layout/NoItem'

const Connections = ({ connections, getConnections }) => {
    useEffect(() => {
        getConnections();
        setAddConnection(false);
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
                                <NoItem/>
                            :
                            <List>
                                {
                                    connections.map((connection) => {
                                        return <Connection key={connection.ID} {...connection} />;
                                    })
                                }
                            </List>
                        }
                        {addConnection ? 
                        <AddConnection addConnection={addConnection} />
                        
                        :
                        null
                        }
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