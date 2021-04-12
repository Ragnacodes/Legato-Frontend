import React, { useState } from 'react';
import { connect } from 'react-redux';
import { startAddScenario } from '../../actions/scenarios';
import { Redirect } from 'react-router-dom';

const AddScenario = ({ addScenario }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [id, setID] = useState();

    const handleClick = () => {
        setLoading(true);
        setError(false);
        const scenario = {
            name: 'Untitled Scenario',
            is_active: false
        };
        addScenario(scenario)
        .then(id => {
            setLoading(false);
            setError(false);
            setID(id);
        })
        .catch(() => {
            setLoading(false);
            setError(true);
        });
    };

    if (id) {
        return <Redirect to={`/sketchpad/${id}`} />;
    }

    else {
        return (
            <button onClick={handleClick}>Create New Scenario</button>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addScenario: (scenario) => dispatch(startAddScenario(scenario))
    };
};

export default connect(null, mapDispatchToProps)(AddScenario);