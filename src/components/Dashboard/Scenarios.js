import React from 'react';
import { Container, List } from '@material-ui/core';
import Scenario from './Scenario';

const Scenarios = () => {
  const defaultScenarios = [
    {
      id: "15",
      name: "Scenario fifteen",
      isActive: true,
      interval: 0,
      nodes: ['spotify', 'telegram', 'webhook', 'github', 'ssh'],
    },
    {
      id: "16",
      name: "Scenario sixteen",
      isActive: true,
      interval: 15,
      nodes: ['ssh', 'webhook', 'github', 'spotify', 'telegram'],
    },
    {
      id: "11",
      name: "Scenario eleven",
      isActive: true,
      interval: 15,
      nodes: ['ssh', 'webhook', 'spotify', 'telegram'],
    },
    {
      id: "12",
      name: "Scenario tweleve",
      isActive: false,
      interval: 5,
      nodes: ['github', 'ssh', 'webhook', 'spotify'],
    },
    {
      id: "13",
      name: "Scenario thirteen",
      isActive: true,
      interval: 0,
      nodes: ['telegram', 'github', 'ssh', 'webhook'],
    },
    {
      id: "14",
      name: "Scenario fourteen",
      isActive: false,
      interval: 15,
      nodes: ['spotify', 'webhook', 'telegram', 'spotify'],
    },
    {
      id: "6",
      name: "Scenario six",
      isActive: true,
      interval: 10,
      nodes: ['ssh', 'webhook', 'spotify'],
    },
    {
      id: "7",
      name: "Scenario seven",
      isActive: true,
      interval: 5,
      nodes: ['telegram', 'github', 'ssh'],
    },
    {
      id: "8",
      name: "Scenario eight",
      isActive: false,
      interval: 15,
      nodes: ['webhook', 'spotify', 'telegram'],
    },
    {
      id: "9",
      name: "Scenario nine",
      isActive: false,
      interval: 0,
      nodes: ['github', 'ssh', 'webhook'],
    },
    {
      id: "10",
      name: "Scenario ten",
      isActive: true,
      interval: 20,
      nodes: ['spotify', 'telegram', 'github'],
    },
    {
      id: "1",
      name: "Scenario one",
      isActive: true,
      interval: 10,
      nodes: ['ssh', 'webhook'],
    },
    {
      id: "2",
      name: "Scenario two",
      isActive: false,
      interval: 0,
      nodes: ['spotify', 'telegram'],
    },
    {
      id: "3",
      name: "Scenario three",
      isActive: false,
      interval: 15,
      nodes: ['github', 'ssh'],
    },
    {
      id: "4",
      name: "Scenario four",
      isActive: true,
      interval: 5,
      nodes: ['webhook', 'spotify'],
    },
    {
      id: "5",
      name: "Scenario five",
      isActive: false,
      interval: 20,
      nodes: ['telegram', 'github'],
    },
  ];
  return (
    <div className="content-container">
      <Container maxWidth="lg" className="scenarios">
        <span style={{ fontSize: 25, margin: 10 }}>Active scenarios</span>
        <List>
          {
            defaultScenarios.forEach((scenario) => {
              if (scenario.isActive) {
                return <Scenario key={scenario.id} {...scenario} />;
              }
            })
          }
        </List>
      </Container>
    </div>
  )
};

export default Scenarios;