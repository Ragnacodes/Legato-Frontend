import React from 'react';
import { connect } from 'react-redux';
import { startAddElement } from '../../../actions/sketchpad';
import {
    ListItem,
    ListItemText,
} from '@material-ui/core';

const MenuItem = ({ service, item, close, addNode }) => {

    const handleClick = (e) => {
        const node = {
            type: `${service}_${item.subService}`,
            position: {
                x: e.clientX,
                y: e.clientY
            },
            data: {
                service,
                subService: item.subService,
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
        addNode: (node) => dispatch(startAddElement(node)),
    };
};

export default connect(null, mapDispatchToProps)(MenuItem);