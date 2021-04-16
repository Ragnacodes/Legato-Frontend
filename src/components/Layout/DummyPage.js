import React from 'react';
import {
  Container,
  Typography
} from '@material-ui/core';
import Appbar from './Appbar';
import PageTitle from './PageTitle';
import BlankPageSVG from '../../styles/assets/blank-page.svg';

const DummyPage = () => (
  <>
  <Appbar
    leftChildren={<PageTitle title="Dummy" />}
  />
  <main className="main">
    <div className="app-bar-spacer"/>
    <div className="content-container">
      <Container maxWidth="lg">

        <div className="centered-container">
            <img
                src={BlankPageSVG}
                width="400px"
                height="400px"
                alt="Dummy Page."
            />
            <Typography
                align="center"
                variant="overline"
                gutterBottom={true}
            >
                Dummy Page
            </Typography>
            <Typography
                align="center"
                variant="caption"
            >
                This page hasn't been implemented yet.
            </Typography>
        </div>

      </Container>
    </div>
  </main>
  </>
);

export default DummyPage;
