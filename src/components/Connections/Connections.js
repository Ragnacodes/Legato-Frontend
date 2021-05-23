import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { startGetConnections } from '../../actions/connections';
import { List, Paper } from '@material-ui/core';
import Connection from './Connection';
import NoItem from '../Layout/NoItem';
import ListLoader from '../Layout/ListLoader';

const Connections = ({ connections, getConnections }) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true);
        getConnections()
        .then(() => {
            setLoading(false);
        })
        .catch(() => {
            setLoading(false);
        });
    }, [getConnections]);

    if (loading) {
        return <ListLoader />
    }

    else if (connections === null || connections.length === 0) {
        return <NoItem name="Connection" />;
    }
    
    return (
        <List component={Paper}>
            {
                connections.map((connection) => {
                    return <Connection key={connection.id} {...connection} />;
                })
            }
        </List>
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