import React from 'react';
import { connect } from 'react-redux';
import { CircularProgress, Grid } from '@material-ui/core';
import { CheckCircle, Cancel } from '@material-ui/icons';

const Wrapper = ({ icon, text }) => {
    return (
        <Grid container spacing={1} alignItems="center">
            <Grid item>
                <Grid container justify="center">
                    {icon}
                </Grid>
            </Grid>
            <Grid item>
                {text}
            </Grid>
        </Grid>
    );
};

const Status = ({ fetched, loading, failed }) => {
    if (!fetched) {
        return (
            <Wrapper
                icon={
                    <CircularProgress
                        size={20}
                        thickness={2} 
                    />
                }
                text="Fetching ..."
            />
        );
    }
    else if (loading) {
        return (
            <Wrapper
                icon={
                    <CircularProgress
                        size={20}
                        thickness={2} 
                    />
                }
                text="Saving ..."
            />
        );
    }
    else if (failed) {
        return (
            <Wrapper
                icon={
                    <Cancel 
                        className="error" 
                    />
                }
                text="Failed !"
            />
        );
    }
    else {
        return (
            <Wrapper
                icon={
                    <CheckCircle
                        className="success" 
                    />
                }
                text="Saved."
            />
        );
    };
};

const mapStateToProps = (state) => {
    return {
        fetched: state.sketchpadStatus.fetched,
        loading: state.sketchpadStatus.loading,
        failed: state.sketchpadStatus.failed
    };
};

export default connect(mapStateToProps)(Status);