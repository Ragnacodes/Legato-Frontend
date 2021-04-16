import React from 'react';
import { connect } from 'react-redux';
import { startEditScenario } from '../../actions/scenarios';
import { Button } from '@material-ui/core';

const SketchpadControl = ({ elements, editScenario }) => {

    const onClicked = () => {
        console.log(elements);
    };

    // const handleToggleActvie = () => {
    //     editScenario(scenario.id, { isActive: !scenario.isActive });
    // };
    
    return (
        <div className="control-box">
            <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={onClicked}
                className="button"
            >
              Save
            </Button>
            <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={onClicked}
                className="button"
            >
                Run
            </Button>
            {/* <Tooltip title={`Turn ${scenario.isActive ? "off" : "on"}`} placement="top">
                <Switch
                    edge="end"
                    onChange={handleToggleActvie}
                    checked={scenario.isActive}
                    color="primary"
                    size="large"
                    className="switch"
                />
            </Tooltip> */}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        elements: state.sketchpad
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        editScenario: (id, updates) => dispatch(startEditScenario(id, updates))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SketchpadControl);