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
import { TabPanel } from "./WebhookSettingsModal";
import AddIcon from "@material-ui/icons/Add";
import MoreVertIcon from "@material-ui/icons/MoreVert";
const AddDataStructure = ({}) => {
  //   const [value, setValue] = React.useState(0);
  return <div>hey</div>;
};

const mapStateToProps = (state) => ({
  //   webhooks: state.webhooks.webhooks,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AddDataStructure);
