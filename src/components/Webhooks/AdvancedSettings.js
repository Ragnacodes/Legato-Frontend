import React from "react";
import { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Checkbox,
  FormControlLabel,
  Typography,
  Menu,
  IconButton,
  Popper,
} from "@material-ui/core";
import HelpIcon from "@material-ui/icons/Help";
import InfoIcon from "@material-ui/icons/Info";
import { TabPanel } from "./EditWebhookModal";
import AddIcon from "@material-ui/icons/Add";
import MoreVertIcon from "@material-ui/icons/MoreVert";
const AdvancedSettings = ({ value }) => {
  //   const [value, setValue] = React.useState(0);
  const dsMenu = useRef(null);
  const [dsMenuOpen, setDsMenuOpen] = useState(false);
  useEffect(() => {
    console.log(dsMenu);
  }, [dsMenuOpen]);
  return (
    <TabPanel className="advanced" value={value} index={1}>
      <div className="data-structure-field">
        <FormControl
          className="edit-field select-field"
          size="small"
          variant="outlined"
        >
          <InputLabel id="demo-simple-select-outlined-label">
            Data structure
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            //   value={age}
            //   onChange={handleChange}
            label="Data structure"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <IconButton
          aria-label="edit-data-structures"
          fontSize="small"
          size="small"
          onClick={() => setDsMenuOpen(true)}
          // onMouseDown={(e) => e.preventDefault()}
          // edge="end"
        >
          <MoreVertIcon ref={dsMenu} />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={dsMenu.current}
          keepMounted
          open={dsMenuOpen}
          onClose={() => setDsMenuOpen(false)}
        >
          <MenuItem onClick={() => setDsMenuOpen(false)}>Edit</MenuItem>
          <MenuItem onClick={() => setDsMenuOpen(false)}>Clone</MenuItem>
        </Menu>
        <IconButton
          size="small"
          aria-label="add-data-structures"
          className="add-icon"
          // onClick={saveNewName}
          // onMouseDown={(e) => e.preventDefault()}
          // edge="end"
        >
          <AddIcon />
        </IconButton>
      </div>
      <Typography className="help-text" variant="body2">
        <InfoIcon fontSize="small" className="help-icon" />
        Data structure to be used for validation of incoming data. Leave empty
        if you want us to just pass on the received data without any validation.
      </Typography>
      <FormControlLabel
        control={
          <Checkbox
            checked={true}
            color="primary"
            // onChange={handleChange}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        }
        label="Get request headers"
      />
      <Typography className="help-text" variant="body2">
        <InfoIcon fontSize="small" className="help-icon" />
        The headers will be added to the request body.
      </Typography>
      <FormControlLabel
        control={
          <Checkbox
            checked={true}
            color="primary"
            // onChange={handleChange}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        }
        label="Get request HTTP method"
      />
      <Typography className="help-text" variant="body2">
        <InfoIcon fontSize="small" className="help-icon" />
        The HTTP method (verb) will be added to the request body.
      </Typography>
      <FormControlLabel
        control={
          <Checkbox
            checked={true}
            color="primary"
            // onChange={handleChange}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        }
        label="JSON pass-through"
      />
      <Typography className="help-text" variant="body2">
        <InfoIcon fontSize="small" className="help-icon" />
        If enabled, JSON payloads are returned as a string.
      </Typography>
    </TabPanel>
  );
};

const mapStateToProps = (state) => ({
  //   webhooks: state.webhooks.webhooks,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AdvancedSettings);
