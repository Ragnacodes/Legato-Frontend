import React from 'react';
import { NavLink } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const Scenario = ({ id, name }) => {
    const [checked, setChecked] = React.useState(['wifi']);
    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
    
        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }
    
        setChecked(newChecked);
    };

    return (
        <ListItem className="scenario" button component={NavLink} to={`/sketchpad/${id}`}>
            <ListItemIcon>
                <AlarmIcon />
            </ListItemIcon>

            <ListItemText id="switch-list-label-wifi" primary={name} />

            <ListItemSecondaryAction className="control">
                <AccessTimeIcon className="item" />

                <Switch
                    edge="end"
                    onChange={handleToggle('wifi')}
                    checked={checked.indexOf('wifi') !== -1}
                    inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
                    color="primary"
                    className="item"
                />
                
                <IconButton aria-label="delete" className="item" color="secondary">
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

export default Scenario;
