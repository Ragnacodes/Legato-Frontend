import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/webhooks';
import { Container, Divider, Button, List } from '@material-ui/core';
import Appbar from '../Layout/Appbar';
import PageTitle from '../Layout/PageTitle';
import Webhook from './Webhook';
import { errorNotification, successNotification } from '../Layout/Notification';
import WebhookSettingsModal from './WebhookSettingsModal';
import NoItem from '../Layout/NoItem';
const Webhooks = ({ webhooks, getWebhooks, addWebhook }) => {
  const [addModalVisible, setAddModalVisible] = useState(false);

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

        </div>
      </main>
    </>
  );
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Webhooks);
