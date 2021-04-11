import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Button, Divider } from "@material-ui/core";
import List from "@material-ui/core/List";
import Webhook from "./Webhook";
import Axios from "../../utils/axiosConfig";
import { setWebhooks } from "../../actions/webhooks";
import { updateAppBar } from "../../actions/appbar";
const Webhooks = ({ webhooks, username, setWebhoo, updateAppBar }) => {
  useEffect(() => {
    updateAppBar("right_children",);
    Axios.get(`/users/${username}/services/webhook/`)
      .then((response) => {
        console.log(response);
        setWebhooks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
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
  );
};

const mapStateToProps = (state) => ({
  webhooks: state.webhooks.webhooks,
  username: state.auth.username,
});

const mapDispatchToProps = (dispatch) => ({
  updateAppBar: (type, data) => dispatch(updateAppBar(type, data)),
  setWebhooks: (data) => dispatch(setWebhooks(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Webhooks);
