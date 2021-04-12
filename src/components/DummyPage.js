import React from 'react';
import Container from '@material-ui/core/Container';
import Appbar from './Layout/Appbar';

const DummyPage = () => (
  <>
  <Appbar />
  <main className="main">
    <div className="app-bar-spacer"/>
    <div className="content-container">
      <Container maxWidth="lg">
        {/* Your Content */}
        This is a dummy page!
      </Container>
    </div>
  </main>
  </>
);

export default DummyPage;
