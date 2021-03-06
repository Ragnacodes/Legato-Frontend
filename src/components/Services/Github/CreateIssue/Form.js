import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ServiceForm from '../../../PopoverForm';
import Axios from '../../../../utils/axiosConfig';
import { TextField, MenuItem, IconButton } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { startGetConnections } from '../../../../actions/connections';
import { connect } from 'react-redux';

const Form = ({ id, data, editElement, setAnchorEl, getConnections, githubConnections, username }) => {
    
    const [info, setInfo] = useState({
        name: data.name || '',
        connectionId: data.connectionId || '',
        repository: data.repositoryName ? data.owner + '/' + data.repositoryName : '',
        title: data.title || '',
        body: data.body || '',
        labels: data.labels || [],
        assignee: data.assignee || [],
        state: 'open'
    });

    const [repositories, setRepositories] = useState([]);
    const [loadingConnections, setLoadingConnections] = useState(false);
    const [loadingRepo, setLoadingRepo] = useState(false);
    
    useEffect(() => {
        setLoadingConnections(true);
        getConnections()
            .then(() => {
                setLoadingConnections(false)
            });
    }, [getConnections]);


    useEffect(() => {
        setLoadingRepo(true);
        Axios.post(`/users/${username}/services/github/repositories`, {connectionId: info.connectionId})
            .then((res) => {
                setRepositories(res.data.repositoriesName);
                setLoadingRepo(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [info.connectionId, username]);

    const handleChange = (e) => {
        setInfo((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    
    const handleCancel = () => {
        setAnchorEl(null);
    };

    const handleSave = () => {
        const updates = {
            name: info.name,
            data: { 
                ...data,
                ...info,
                owner: info.repository.split('/')[0],
                repositoryName: info.repository.split('/')[1],
            }
        };
        editElement(id, updates);
        setAnchorEl(null);
    };

    return (
        <ServiceForm
            className="create-issue"
            title="Create issue"
            disabledSave={false}
            handleSave={handleSave}
            handleCancel={handleCancel}
        >
            <div className="connection-field">
                {
                    loadingConnections ? 
                        <TextField
                            name="connectionId"
                            className="text-field"
                            size="small"
                            label="Connection"
                            value="Loading..."
                            onChange={handleChange}
                            variant="outlined"
                            helperText="Choose one of your github connections."
                            disabled
                        />
                    :
                    <TextField
                        name="connectionId"
                        className="text-field"
                        size="small"
                        select
                        label="Connection"
                        value={info.connectionId}
                        onChange={handleChange}
                        variant="outlined"
                        helperText="Choose one of your github connections."
                    >
                        {
                            githubConnections.map((c) => { 
                                return <MenuItem key={c.id} value={c.id}>{c.name}</MenuItem>; 
                            })                     
                        }
                    </TextField>

                }
                
                <IconButton
                    name="addConnection"
                    size="small"
                    className="add-icon"
                    component={NavLink} to="/connections"
                >
                    <Add />
                </IconButton>
            </div>
            {
                loadingRepo ? 
                <TextField
                    name="repository"
                    className="text-field"
                    size="small"
                    label="Repositories"
                    value="Loading ..."
                    onChange={handleChange}
                    variant="outlined"
                    helperText="Choose one of your repositories."
                    disabled
                />
                :
                <TextField
                    name="repository"
                    className="text-field"
                    size="small"
                    select
                    label="Repositories"
                    value={info.repository}
                    onChange={handleChange}
                    variant="outlined"
                    helperText="Choose one of your repositories."
                >
                    {
                        repositories.map((r) => { return <MenuItem key={info.repository} value={r}>{r}</MenuItem>; }) 
                    }
                </TextField>
            }
            {
                info.repository ?
                <React.Fragment>
                    <TextField
                        name="title"
                        className="text-field"
                        size="small"
                        label="Title"
                        value={info.title}
                        onChange={handleChange}
                        variant="outlined"
                        helperText="Choose the title of the issue."
                    />

                    <TextField
                        name="body"
                        className="text-field"
                        size="small"
                        label="Description"
                        value={info.body}
                        onChange={handleChange}
                        variant="outlined"
                        multiline
                        helperText="Write a description for the issue if you want."
                    />
                </React.Fragment>
                :
                null
            }
        </ServiceForm>
    );
}

const mapStateToProps = (state) => ({
    githubConnections : state.connections.filter((c) => c.type === 'githubs'),
    username : state.auth.username,
})

const mapDispatchToProps = (dispatch) => ({
    getConnections: () => dispatch(startGetConnections()),
});

export default connect(mapStateToProps, mapDispatchToProps) (Form);