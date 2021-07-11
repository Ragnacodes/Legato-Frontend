import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from '@material-ui/core';
import Appbar from '../Layout/Appbar';
import SketchpadTitle from './SketchpadTitle';
import SketchpadActivation from './SketchpadActivation';
import Sketchpad from './Sketchpad';

const SketchpadPage = ({ match }) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        return () => {
            dispatch({
                type: 'SET_NODE_ID',
                nodeID: null,
                props: null
            });
        };
    });

    return (
        <React.Fragment>
            <Appbar leftChildren={<SketchpadTitle />} rightChildren={<SketchpadActivation />} />
            <main className="main">
                <div className="app-bar-spacer" />
                <Box height="100%">
                    <Sketchpad id={match.params.id} />
                </Box>
            </main>
        </React.Fragment>
    )
};

export default SketchpadPage;