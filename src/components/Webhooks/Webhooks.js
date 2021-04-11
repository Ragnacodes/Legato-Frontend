import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Button, Divider } from "@material-ui/core";
import List from "@material-ui/core/List";
import Webhook from "./Webhook";
import Axios from "../../utils/axiosConfig";
import { setWebhooks } from "../../actions/webhooks";
const Webhooks = ({ webhooks, username, setWebhooks }) => {
  useEffect(() => {
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
        {/* <Button
          variant="contained"
          onClick={() => {
            axios
              .post(
                "http://localhost:8080/api/users/d/services/webhook/",
                {
                  name: "newwebhook",
                },
                {
                  headers: { Authorization: token },
                }
              )
              .then((response) => {
                console.log(response);
              })
              .catch((error) => {
                console.log(error);
              });
          }}
          color="secondary"
        >
          Add Webhook
        </Button> */}

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
  setWebhooks: (data) => dispatch(setWebhooks(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Webhooks);
