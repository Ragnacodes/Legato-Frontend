import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/webhooks';
import { Container, Divider, List, Paper } from '@material-ui/core';
import Webhook from './Webhook';
import NoItem from '../Layout/NoItem';
import ListLoader from '../Layout/ListLoader';
export function Webhooks({ webhooks, getWebhooks }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    console.log(actions.startSetWebhooks);

    getWebhooks()
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [getWebhooks]);

  if (loading) {
    return <ListLoader />;
  } else if (!webhooks.length) {
    return <NoItem name="Webhook" />;
  }

  return (
    <Container maxWidth="lg" className="webhooks-list">
      <List component={Paper}>
        {webhooks.map((w, index) => (
          <div key={w.id}>
            <Webhook key={w} webhook={w} />
            {index < webhooks.length - 1 && <Divider />}
          </div>
        ))}
      </List>
    </Container>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    webhooks: state.webhooks.webhooks,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getWebhooks: () => dispatch(actions.startSetWebhooks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Webhooks);
