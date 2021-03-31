import React from "react";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import Webhook from "./Webhook";

const Webhooks = ({ webhooks }) => (
  <div className="content-container">
    <Container maxWidth="lg" className="webhooks-list">
      <List>
        {webhooks.map((w) => {
          console.log(w)
          return <Webhook key={w.id} {...w} />;
        })}
      </List>
    </Container>
  </div>
);

const mapStateToProps = (state) => ({
  webhooks: state.webhooks.webhooks,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Webhooks);
