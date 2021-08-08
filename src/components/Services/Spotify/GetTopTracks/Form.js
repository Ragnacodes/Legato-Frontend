import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';
import { startGetConnections } from '../../../../actions/connections';
import ConnectionField from '../ConnectionField';

import ServiceForm from '../../../PopoverForm';
const Form = ({
  id,
  data,
  connections,
  getConnections,
  editElement,
  setAnchorEl,
}) => {
  const [info, setInfo] = useState({
    name: data.name || '',
    connection: data.connection || '',
  });
  const [connectionLoading, setConnectionLoading] = useState(true);

  useEffect(() => {
    getConnections().then(() => {
      setConnectionLoading(false);
    });
  }, [getConnections]);

  const handleCancel = () => {
    setAnchorEl(null);
    setInfo({
      connection: data.connection || '',
    });
  };

  const handleChange = (e) => {
    setInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = () => {
    editElement(id, { name: info.name, data: { ...data, ...info } });
    setAnchorEl(null);
  };

  return (
    <ServiceForm
      className="watch-playlist"
      title="Get Top Tracks"
      disabledSave={false}
      handleSave={handleSave}
      handleCancel={handleCancel}
    >
      <TextField
        name="name"
        className="text-field"
        label="Name"
        variant="outlined"
        size="small"
        value={info['name']}
        onChange={handleChange}
      />
      <ConnectionField
        connection={info['connection']}
        connections={connections}
        connectionLoading={connectionLoading}
        handleChange={handleChange}
      />
    </ServiceForm>
  );
};

const mapStateToProps = (state) => ({
  connections: state.connections.filter((c) => c.type === 'spotifies'),
});

const mapDispatchToProps = (dispatch) => ({
  getConnections: () => dispatch(startGetConnections()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
