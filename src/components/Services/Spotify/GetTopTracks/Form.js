import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
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
    editElement(id, { data: { ...data, ...info } });
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
