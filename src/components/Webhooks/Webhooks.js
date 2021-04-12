import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Divider } from "@material-ui/core";
import List from "@material-ui/core/List";
import Webhook from "./Webhook";
import Axios from "../../utils/axiosConfig";
import { setWebhooks } from "../../actions/webhooks";
import Appbar from '../Layout/Appbar';

const Webhooks = ({ webhooks, username }) => {

  useEffect(() => {
    Axios.get(`/users/${username}/services/webhook/`)
      .then((response) => {
        setWebhooks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
    <Appbar />
    <main className="main">
      <div className="app-bar-spacer" />
      <div className="content-container">
        <Container maxWidth="lg" className="webhooks-list">

          <List>
            {webhooks.map((w) => {
              return (
                <div>
                  <Webhook key={w.id} webhook={w} />
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Webhooks);
