import React from 'react';
import { Container } from '@material-ui/core';
import Appbar from '../Layout/Appbar';
import PageTitle from '../Layout/PageTitle';
import Webhooks from './Webhooks';
export function WebhooksPage() {
  return (
    <>
      <Appbar leftChildren={<PageTitle title="Webhooks" />} />
      <main className="main">
        <div className="app-bar-spacer" />
        <div className="content-container">
          <Container maxWidth="lg" className="webhooks-list">
            <Webhooks />
          </Container>
        </div>
      </main>
    </>
  );
}

export default WebhooksPage;
