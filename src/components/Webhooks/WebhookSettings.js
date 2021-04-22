import React, { useRef, useEffect } from 'react';
import { Tab, Tabs } from '@material-ui/core';
import AdvancedSettings from './AdvancedSettings';
import GeneralSettings from './GeneralSettings';

export function TabPanel(props) {
  const { children, value, index, className, ...other } = props;

  return (
    <div
      className={'edit-wh-tab ' + className}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

const WebhookSettings = ({ info, setInfo }) => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleChange = (name, value) => {
    setInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const actions = useRef();

  useEffect(() => {
    if (actions.current) {
      console.log(actions.current);
      actions.current.updateIndicator(1);
    }
  }, [actions]);

  return (
    <div>
      <Tabs
        action={actions}
        variant="standard"
        value={tabValue}
        onChange={(event, newValue) => setTabValue(newValue)}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="General" />
        <Tab label="Advanced" />
      </Tabs>
      <TabPanel value={tabValue} index={0}>
        <GeneralSettings handleChange={handleChange} info={info} />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <AdvancedSettings handleChange={handleChange} info={info} />
      </TabPanel>
    </div>
  );
};

export default WebhookSettings;
