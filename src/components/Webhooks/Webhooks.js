import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container, Divider, Button } from "@material-ui/core";
import List from "@material-ui/core/List";
import Webhook from "./Webhook";
import Axios from "../../utils/axiosConfig";
import { setWebhooks, addWebhook } from "../../actions/webhooks";
import Appbar from "../Layout/Appbar";
import AddWebhookModal from "./AddWebhookModal";
import { errorNotification, successNotification } from "../Layout/Notification";
import PageTitle from "../Layout/PageTitle";

const Webhooks = ({ webhooks, username, setWebhooks, addWebhook }) => {
  const [addModalVisible, setAddModalVisible] = useState(false);
  useEffect(() => {
    Axios.get(`/users/${username}/services/webhooks`)
      .then((response) => {
        setWebhooks(response.data.webhooks);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setWebhooks, username]);

  const addNewWebhook = (data) => {
    Axios.post(`/users/${username}/services/webhooks`, {
      name: data.name,
    })
      .then((response) => {
        // setWebhooks(response.data);
        console.log(response.data);
        let str = response.data.message;
        successNotification(str.charAt(0).toUpperCase() + str.slice(1) + ".");
        addWebhook(response.data.webhook);
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          let str = error.response.data.message;
          errorNotification(
            "Unable to update: " +
              str.charAt(0).toUpperCase() +
              str.slice(1) +
              "."
          );
        } else {
          errorNotification("Unable to update: " + error.message);
        }
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
          <AddWebhookModal
            visible={addModalVisible}
            setVisible={setAddModalVisible}
            handleSave={addNewWebhook}
          />
          <Container maxWidth="lg" className="webhooks-list">
            <List>
              {webhooks.map((w) => {
                return (
                  <div key={w.id}>
                    <Webhook webhook={w} />
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
  setWebhooks: (data) => dispatch(setWebhooks(data)),
  addWebhook: (data) => dispatch(addWebhook(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Webhooks);
