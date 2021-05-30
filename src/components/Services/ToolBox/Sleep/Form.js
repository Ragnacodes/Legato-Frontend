import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import ServiceForm from '../../../PopoverForm';

const Form = ({ id, data, editElement, setAnchorEl }) => {
  const [info, setInfo] = useState({
    hour: data.time ? parseInt(data.time / 3600) : 0,
    minute: data.time ? parseInt((data.time % 3600) / 60) : 0,
    second: data.time ? parseInt((data.time % 3600) % 60) : 0,
  });

  const handleChange = (e) => {
    setInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCancel = () => {
    setAnchorEl(null);
    setInfo({
      time: data.time || 0,
    });
  };

  const handleSave = () => {
    const time =
      parseInt(info['hour']) * 3600 +
      parseInt(info['minute']) * 60 +
      parseInt(info['second']);
    console.log(time, info);
    editElement(id, {
      data: {
        ...data,
        time,
      },
    });
    setAnchorEl(null);
  };

  let disabledSave = !(
    info['hour'] &&
    info['hour'] >= 0 &&
    info['minute'] &&
    info['minute'] >= 0 &&
    info['second'] &&
    info['second'] >= 0
  );

  return (
    <ServiceForm
      className="toolbox-sleep"
      title="Sleep"
      disabledSave={disabledSave}
      handleSave={handleSave}
      handleCancel={handleCancel}
    >
      <div className="time-field">
        <TextField
          value={info['hour']}
          className="text-field"
          name="hour"
          label="Hour"
          type="number"
          variant="outlined"
          size="small"
          onChange={handleChange}
          InputProps={{ inputProps: { min: 0 } }}
          // helperText="The number of seconds for which the scenario execution will be suspended."
        />
        <TextField
          value={info['minute']}
          className="text-field"
          name="minute"
          label="Minute"
          type="number"
          variant="outlined"
          size="small"
          onChange={handleChange}
          InputProps={{ inputProps: { max: 59, min: 0 } }}
          // helperText="The number of seconds for which the scenario execution will be suspended."
        />
        <TextField
          value={info['second']}
          className="text-field"
          name="second"
          label="Second"
          type="number"
          variant="outlined"
          size="small"
          onChange={handleChange}
          InputProps={{ inputProps: { max: 59, min: 0 } }}
          // helperText="The number of seconds for which the scenario execution will be suspended."
        />
      </div>
    </ServiceForm>
  );
};

export default Form;
