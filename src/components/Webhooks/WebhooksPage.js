import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/webhooks';
import { Button } from '@material-ui/core';
import Appbar from '../Layout/Appbar';
import PageTitle from '../Layout/PageTitle';
import { errorNotification, successNotification } from '../Layout/Notification';
import WebhookSettingsModal from './WebhookSettingsModal';
import Webhooks from './Webhooks';
export function WebhooksPage({ addWebhook }) {
  const [addModalVisible, setAddModalVisible] = useState(false);

  const addNewWebhook = (data) => {
    addWebhook(data)
      .then((res) => {
        successNotification(res.message);
      })
      .catch((err) => {
        errorNotification(err.message);
      });
  };

  return (
    <>
      <Appbar
        rightChildren={
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setAddModalVisible(true)}
          >
            Add Webhook
          </Button>
        }
        leftChildren={<PageTitle title="Webhooks" />}
      />
      <main className="main">
        <div className="app-bar-spacer" />
        <div className="content-container">
          <WebhookSettingsModal
            webhook={{ name: 'New Webhook' }}
            visible={addModalVisible}
            setVisible={setAddModalVisible}
            handleSave={addNewWebhook}
          />
          <Webhooks />
        </div>
      </main>
    </>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  addWebhook: (data) => dispatch(actions.startAddWebhook(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WebhooksPage);
