import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { startAddNode } from '../../../actions/sketchpad';
import { updateStatus } from '../../../actions/sketchpadStatus';
import {
    ListItem,
    ListItemText,
} from '@material-ui/core';

const MenuItem = ({ service, item, close, addNode }) => {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        dispatch(updateStatus({
            loading: true,
            failed: false
        }));
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
        addNode(node)
        .then(() => {
            dispatch(updateStatus({
                loading: false,
                failed: false
            }));
            close();
        })
        .catch(() =>{
            dispatch(updateStatus({
                loading: false,
                failed: true
            }));
            close();
        });
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
        addNode: (node) => dispatch(startAddNode(node)),
    };
};

export default connect(null, mapDispatchToProps)(MenuItem);