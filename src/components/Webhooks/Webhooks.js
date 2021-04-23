import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/webhooks';
import { Container, Divider, Button, List } from '@material-ui/core';
import Appbar from '../Layout/Appbar';
import PageTitle from '../Layout/PageTitle';
import Webhook from './Webhook';
import AddWebhookModal from './AddWebhookModal';
import { errorNotification, successNotification } from '../Layout/Notification';
import WebhookPopover from './WebhookResponse';
import WebhookSettingsModal from './WebhookSettingsModal';

const Webhooks = ({ webhooks, getWebhooks, addWebhook }) => {
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [anchor, setAnchor] = useState(null);
  const anchorRef = useRef(null);
  useEffect(() => {
    getWebhooks()
      .then(() => {})
      .catch(() => {});
  }, [getWebhooks]);

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
          {/* <WebhookPopover
            anchor={anchorRef.current}
            setAnchor={setAnchor}
            handleSave={() => {}}
          /> */}
          <WebhookSettingsModal
            webhook={{ name: 'New Webhook' }}
            visible={addModalVisible}
            setVisible={setAddModalVisible}
            handleSave={addNewWebhook}
          />
          <Container maxWidth="lg" className="webhooks-list" ref={anchorRef}>
            <List>
              {webhooks.map((w) => {
                return (
                  <div key={w.id}>
                    <Webhook key={w} webhook={w} />
                    <Divider />
                  </div>
                );
              })}
            </List>
          </Container>
        </div>
      </main>
    </>
  );
};

const mapStateToProps = (state) => ({
  webhooks: state.webhooks.webhooks,
  username: state.auth.username,
});

const mapDispatchToProps = (dispatch) => ({
  getWebhooks: () => dispatch(actions.startSetWebhooks()),
  addWebhook: (data) => dispatch(actions.startAddWebhook(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Webhooks);
