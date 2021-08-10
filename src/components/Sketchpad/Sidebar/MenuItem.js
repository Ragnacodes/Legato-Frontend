import React from 'react';
import { v4 as uuid } from 'uuid';
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
                name: `${service.substring(0, 4)}_${uuid().substring(0, 4)}`,
                service,
                subService: item.subService,
                parentId: null,
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