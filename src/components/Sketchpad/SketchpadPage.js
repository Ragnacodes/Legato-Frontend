import React from 'react';
import Appbar from '../Layout/Appbar';
import SketchpadTitle from './SketchpadTitle';
import SketchpadActivation from './SketchpadActivation';
import Sketchpad from './Sketchpad';

const SketchpadPage = ({ match }) => {
    return (
        <React.Fragment>
            <Appbar leftChildren={<SketchpadTitle />} rightChildren={<SketchpadActivation />} />
            <main className="main">
                <div className="app-bar-spacer" />
                <Sketchpad id={match.params.id} />
            </main>
        </React.Fragment>
    )
};

export default SketchpadPage;