import React, { useState } from 'react';
import { connect } from 'react-redux';
import { startAddScenario } from '../../actions/scenarios';

const AddScenario = ({ addScenario }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleClick = () => {
        setLoading(true);
        setError(false);
        const scenario = {
            name: 'Untitled Scenario',
            is_active: false
        };
        addScenario(scenario)
        .then(res => {
            setLoading(false);
            setError(false);
            console.log(res);
        })
        .catch(err => {
            setLoading(false);
            setError(true);
            console.log(err);
        });
    };

    return(
        <button onClick={handleClick}>Create New Scenario</button>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        addScenario: (scenario) => dispatch(startAddScenario(scenario))
    };
};

export default connect(null, mapDispatchToProps)(AddScenario);