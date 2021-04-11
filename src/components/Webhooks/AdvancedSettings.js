import React from "react";
import {
  Checkbox,
  FormControlLabel,
  Typography,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
// import AddDataStructure from "./AddDataStructure";
const AdvancedSettings = ({ handleChange, info }) => {
  // const dsMenu = useRef(null);
  // const addDsPopper = useRef(null);
  // const [addDsPopperOpen, setAddDsPopperOpen] = useState(false);
  // const [dsMenuOpen, setDsMenuOpen] = useState(false);

  return (
    <div className="wh-advanced-settings">
      {/* <div className="data-structure-field">
        <FormControl
          className="edit-wh-field select-ds-field"
          size="small"
          variant="outlined"
        >
          <InputLabel id="demo-simple-select-outlined-label">
            Data structure
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value=""
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
          onClick={() => setAddDsPopperOpen(true)}
          // onMouseDown={(e) => e.preventDefault()}
        >
          <AddIcon ref={addDsPopper} />
        </IconButton>
        <Popover
          disableBackdropClick
          open={addDsPopperOpen}
          anchorEl={addDsPopper.current}
          onClose={() => setAddDsPopperOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <AddDataStructure setVisible={setAddDsPopperOpen} />
        </Popover>
      </div> 
      <Typography className="help-text" variant="body2">
        <InfoIcon fontSize="small" className="help-icon" />
        Data structure to be used for validation of incoming data. Leave empty
        if you want us to just pass on the received data without any validation.
      </Typography>
      */}
      <FormControlLabel
        control={
          <Checkbox
            name="get_request_headers"
            checked={info["get_request_headers"]}
            color="primary"
            onChange={(e) => handleChange(e.target.name, e.target.checked)}
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
            name="get_request_http"
            checked={info["get_request_http"]}
            color="primary"
            onChange={(e) => handleChange(e.target.name, e.target.checked)}
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
            name="json_passthrough"
            checked={info["json_passthrough"]}
            color="primary"
            onChange={(e) => handleChange(e.target.name, e.target.checked)}
          />
        }
        label="JSON pass-through"
      />
      <Typography className="help-text" variant="body2">
        <InfoIcon fontSize="small" className="help-icon" />
        If enabled, JSON payloads are returned as a string.
      </Typography>
    </div>
  );
};

export default AdvancedSettings;
