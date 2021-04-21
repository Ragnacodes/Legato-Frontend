import React from 'react';
import { connect } from 'react-redux';
import { addNode } from '../../../actions/sketchpad';
import {
    ListItem,
    ListItemText,
} from '@material-ui/core';

const MenuItem = ({ type, service, item, close, addNode }) => {

    const handleClick = (e) => {
        const node = {
            type,
            data: {
                service,
                form: item.form
            },
            position: {
                x: 0,
                y: 0
            },
        };
        addNode(node);
        close();
    };

    return (
        <ListItem button onClick={handleClick}>
            <ListItemText
                primary={item.primaryText}
                secondary={item.secondaryText}
            />
        </ListItem>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
      addNode: (node) => dispatch(addNode(node)),
    };
};

export default connect(null, mapDispatchToProps)(MenuItem);