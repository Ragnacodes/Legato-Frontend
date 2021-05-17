import React, { useState } from 'react';
import {
  TextField,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@material-ui/core';

const AddDataStructure = ({ setVisible }) => {
  const [dsInfo, setDsInfo] = useState({
    items: [
      { key: 1, tye: 'Array', label: 'item1' },
      { key: 2, type: 'Text', label: 'item2' },
      { key: 3, type: 'Text', label: 'item2' },
    ],
  });
  const handleDelete = (chipToDelete) => {
    setDsInfo((prev) => {
      return {
        ...prev,
        items: prev.items.filter((chip) => chip.key !== chipToDelete.key),
      };
    });
  };
  const handleChangeName = (e) => {
    setDsInfo((prev) => {
      return {
        ...prev,
        name: e.target.value,
      };
    });
  };
  return (
    <div className="ds-popover">
      <Typography className="ds-popover-title" variant="h5">
        Add Data Structure
      </Typography>
      <TextField
        className="edit-wh-field"
        onChange={handleChangeName}
        name="name"
        label="Data Structure Name"
        variant="outlined"
        size="small"
        defaultValue={dsInfo['name']}
        error={'name' in dsInfo && !dsInfo['name']}
        helperText={'name' in dsInfo ? !dsInfo['name'] && 'Required.' : ''}
      />
      <Typography variant="h6" component="h2">
        Items
      </Typography>
      <Card className="ds-items-card" variant="outlined">
        <CardContent className="ds-items-card-content">
          {dsInfo.items.map((item) => {
            return (
              <Card variant="outlined" className="ds-item">
                <CardContent>
                  {Object.keys(item).map((p) => (
                    <Typography variant="body2">{item[p]}</Typography>
                  ))}
                </CardContent>
              </Card>
              // <Chip
              //   size="small"
              //   className="ds-item"
              //   label={item.label}
              //   color="primary"
              //   onDelete={() => handleDelete(item)}
              // />
            );
          })}
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" size="small">
            Add Item
          </Button>
        </CardActions>
      </Card>
      <div className="wh-ds-actions">
        <Button autoFocus onClick={() => setVisible(false)} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            // handleSave(info);
            setVisible(false);
          }}
          variant="contained"
          color="primary"
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default AddDataStructure;
