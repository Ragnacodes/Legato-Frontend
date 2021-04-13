import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Divider, Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import Webhook from "./Webhook";
import Axios from "../../utils/axiosConfig";
import { setWebhooks } from "../../actions/webhooks";
import Appbar from '../Layout/Appbar';

const Webhooks = ({ webhooks, username, setWebhooks }) => {

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
    <Appbar leftChildren={<Typography component="h6" variant="h6" color="inherit" noWrap >Webhooks</Typography>}/>
    <main className="main">
      <div className="app-bar-spacer" />
      <div className="content-container">
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Webhooks);
