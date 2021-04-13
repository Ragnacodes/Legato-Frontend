import React, { useState } from 'react';
import { connect } from 'react-redux';
import { startAddScenario } from '../../actions/scenarios';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';

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
        return <Redirect to={`/sketchpad/${id}`} />;
    }

    else {
        return (
            <Button
                onClick={handleClick}
                variant="contained"
                color="secondary"
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