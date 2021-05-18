import React from 'react';
import { Tab, Tabs } from '@material-ui/core';
import AdvancedSettings from './AdvancedSettings';
import GeneralSettings from './GeneralSettings';
import PopoverForm from '../PopoverForm';
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

const WebhookSettings = ({
  title,
  info,
  setInfo,
  handleCancel,
  handleSave,
}) => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleChange = (name, value) => {
    setInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <PopoverForm
      className="wh-settings "
      title={title}
      disabledSave={false}
      handleSave={() => {
        handleSave(info);
      }}
      handleCancel={handleCancel}
    >
      <Tabs
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
    </PopoverForm>
  );
};

export default WebhookSettings;
