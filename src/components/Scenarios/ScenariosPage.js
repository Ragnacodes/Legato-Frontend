import React from 'react';
import { Container } from '@material-ui/core';
import Appbar from '../Layout/Appbar';
import PageTitle from '../Layout/PageTitle';
import AddScenario from './AddScenario';
import Scenarios from './Scenarios';

const ScenariosPage = () => {
  return (
    <React.Fragment>
        <Appbar leftChildren={<PageTitle title="Scenarios" />} rightChildren={<AddScenario />} />
        <main className="main">
            <div className="app-bar-spacer" />
            <div className="content-container">
                <Container maxWidth="lg" className="scenarios">
                    <Scenarios />
                </Container>
            </div>
        </main>
    </React.Fragment>
)};

export default ScenariosPage;