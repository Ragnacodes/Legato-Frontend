import React from 'react';
import { connect } from 'react-redux';
import { addNode } from '../../../actions/sketchpad';
import {
    ListItem,
    ListItemText,
} from '@material-ui/core';

const MenuItem = ({ service, item, close, addNode }) => {

    const handleClick = () => {
        const node = {
            type: `${service}_${item.id}`,
            position: {
                x: 0,
                y: 0
            },
            data: {
                service,
                serviceIndex: item.id,
                name: ''
            }
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