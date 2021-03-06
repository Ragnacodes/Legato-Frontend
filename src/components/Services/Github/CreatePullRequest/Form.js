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
        base: data.base || '',
        head: data.head || '',
    });

    const [repositories, setRepositories] = useState([]);
    const [branches, setBranches] = useState([]);
    const [loadingConnections, setLoadingConnections] = useState(false);
    const [loadingRepo, setLoadingRepo] = useState(false);
    const [loadingBranch, setLoadingBranch] = useState(false);
    
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

    useEffect(() => {
        setLoadingBranch(true);
        Axios.post(`/users/${username}/services/github/branches`, {
                                                                    connectionId: info.connectionId,
                                                                    repositoryName: info.repository
                                                                  })
            .then((res) => {
                setBranches(res.data.branchesName);
                setLoadingBranch(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [info.connectionId, info.repository, username]);

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
                title: 'from ' + info.head + ' to ' + info.base,
            }
        };
        editElement(id, updates);
        setAnchorEl(null);
    };

    return (
        <ServiceForm
            className="create-pullRequest"
            title="Create pull request"
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
                    disabled
                    label="Repositories"
                    value="Loading..."
                    onChange={handleChange}
                    variant="outlined"
                    helperText="Choose one of your repositories."
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
                    { repositories.map((r) => { return <MenuItem key={r} value={r}>{r}</MenuItem>; }) }
                </TextField>
            }
            {
                loadingBranch ?
                <React.Fragment>
                    <TextField
                        name="head"
                        className="text-field"
                        size="small"
                        disabled
                        label="From"
                        value="Loading"
                        onChange={handleChange}
                        variant="outlined"
                        helperText="Choose the head branch."
                    />
                    <TextField
                        name="base"
                        className="text-field"
                        size="small"
                        disabled
                        label="To"
                        value="Loading"
                        onChange={handleChange}
                        variant="outlined"
                        helperText="Choose the base branch."
                    />
                </React.Fragment>
                :
                <React.Fragment>
                    <TextField
                        name="head"
                        className="text-field"
                        size="small"
                        select
                        label="From"
                        value={info.head}
                        onChange={handleChange}
                        variant="outlined"
                        helperText="Choose the head branch."
                    >
                        { branches.map((b) => { return <MenuItem key={b} value={b}>{b}</MenuItem>; }) }
                    </TextField>
                    
                    <TextField
                        name="base"
                        className="text-field"
                        size="small"
                        select
                        label="To"
                        value={info.base}
                        onChange={handleChange}
                        variant="outlined"
                        helperText="Choose the base branch."
                    >
                        { branches.map((b) => { return <MenuItem key={b} value={b}>{b}</MenuItem>; }) }
                    </TextField>
                </React.Fragment>
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