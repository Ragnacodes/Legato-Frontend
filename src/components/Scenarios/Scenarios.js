import React from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import Scenario from './Scenario';

const Scenarios = (props) => (
  <div className="content-container">
    <Container maxWidth="lg" className="scenarios">
      <List>
        {
          props.scenarios.map((scenario) => {
            return <Scenario key={scenario.id} {...scenario} />;
          })
        }
      </List>
    </Container>
  </div>
);

const mapStateToProps = (state) => {
  return {
    scenarios: state.scenarios
  };
}

export default connect(mapStateToProps)(Scenarios);
