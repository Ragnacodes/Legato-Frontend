import React, { useState, useEffect } from 'react';

import ServiceForm from '../../../PopoverForm';
const Form = ({ id, data, editElement, setAnchorEl }) => {
  const [info, setInfo] = useState({
    connection: data.connection || '',
  });

  const [errors, setErrors] = useState({
    connection: !!data.connection,
  });


  useEffect(() => {
    if (!!info['connection']) {
      setErrors((prev) => ({
        ...prev,
        connection: false,
      }));
    }
  }, [info]);


  const handleCancel = () => {
    setAnchorEl(null);
    setInfo({
      connection: data.connection || '',

    });
    setErrors({
      connection: !!data.connection,
    });
  };

  const handleSave = () => {
    editElement(id, { data: { ...data, ...info } });
    setAnchorEl(null);
  };

  return (
    <ServiceForm
      className="watch-playlist"
      title="Watch a Playlist"
      disabledSave={false}
      handleSave={handleSave}
      handleCancel={handleCancel}
    >
      
      
    </ServiceForm>
  );
};

export default Form;
