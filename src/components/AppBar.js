import React from "react";
import { connect } from "react-redux";
import { AppBar, Toolbar } from "@material-ui/core";
import * as actions from "../actions/appbar";
import {useEffect} from "react"
const CustomAppBar = ({
  right_children,
  left_children,
  toolbarClassName,
  newLeftChildren,
  updateAppBar,
  ...other
}) => {
  useEffect(() => {
    updateAppBar("left_children", newLeftChildren)
  }, [])
  
  return (
    <AppBar className={"app-bar "+other.className}>
      <Toolbar className={toolbarClassName? toolbarClassName:""}>
        {left_children}
        <div className="right_children">{right_children}</div>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => ({
  right_children: state.appbar.right_children,
  left_children: state.appbar.left_children,

});

const mapDispatchToProps = (dispatch) => ({
  updateAppBar: (type, data) => dispatch(actions.updateAppBar(type, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomAppBar);
