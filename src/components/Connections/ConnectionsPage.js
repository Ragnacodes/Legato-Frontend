import React, { useState } from 'react';
import { Container, Button } from '@material-ui/core';
import Appbar from '../Layout/Appbar';
import PageTitle from '../Layout/PageTitle';
import Connections from './Connections';
import AddConnection from './AddConnection';
import SSHConnectionFormModal from '../SSH/ConnectionFormModal';
const ConnectionsPage = () => {
    const [addConnection, setAddConnection] = useState(false);
    const [sshConnectionModal, setSshConnectionModal] = useState(false);
    const createSSHConnetion = () =>{
        setSshConnectionModal(true);
    }
    const rightChildren = (
        <Button
        variant="contained"
        color="secondary"
        onClick={() => setAddConnection(true)}
    >
            Add connection
        </Button>
    );

    return (
        <React.Fragment>
            <Appbar leftChildren={<PageTitle title="Connections" />} rightChildren={rightChildren} />
            <main className="main">
                <div className="app-bar-spacer" />
                <div className="content-container">
                    <Container maxWidth="lg">
                        <Connections
                            addConnection={addConnection}
                            setAddConnection={setAddConnection}
                        />

                        { addConnection &&
                            <AddConnection addDialog={addConnection} setAddDialog={setAddConnection} 
                            createSSHConnetion={createSSHConnetion}/>
                        }
                        <SSHConnectionFormModal visible={sshConnectionModal} setVisible={setSshConnectionModal} />
                    </Container>
                </div>
            </main>
        </React.Fragment>
    );
};

export default ConnectionsPage;