import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { startAddScenario } from '../../actions/scenarios';
import { Add } from '@material-ui/icons';
import { Button, Paper } from '@material-ui/core';

const AddScenario = ({ addScenario }) => {
    const [id, setID] = useState();

    const handleClick = () => {
        const scenario = {
            name: 'Untitled Scenario',
            isActive: false
        };
        addScenario(scenario)
        .then(id => {
            setID(id);
        })
        .catch(() => {
        });
    };

    if (id) {
        return <Redirect to={`/scenarios/${id}/sketchpad`} />;
    }

    else {
        return (
            <Button
                onClick={handleClick}
                variant="contained"
                component={Paper}
                startIcon={<Add />}
            >
                Create New Scenario
            </Button>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addScenario: (scenario) => dispatch(startAddScenario(scenario))
    };
};

export default connect(null, mapDispatchToProps)(AddScenario);