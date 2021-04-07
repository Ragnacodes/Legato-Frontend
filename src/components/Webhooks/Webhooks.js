import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import Webhook from "./Webhook";
import { updateAppBar } from "../../actions/appbar";
import { Button } from "@material-ui/core";

const Webhooks = ({ webhooks, updateAppBar }) => {
  useEffect(() => {
    updateAppBar(
      "right_children",
      <Button variant="contained" color="secondary">
        Add Webhook
      </Button>
    );
  }, []);
  return (
    <div className="content-container">
      <Container maxWidth="lg" className="webhooks-list">
        <List>
          {webhooks.map((w) => {
            console.log(w);
            return <Webhook key={w.id} webhook={w} />;
          })}
        </List>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  webhooks: state.webhooks.webhooks,
});

const mapDispatchToProps = (dispatch) => ({
  updateAppBar: (type, data) => dispatch(updateAppBar(type, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Webhooks);
