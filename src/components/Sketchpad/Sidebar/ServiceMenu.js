import React from 'react';
import {
    List,
    ListSubheader,
    Divider
} from '@material-ui/core';
import MenuItem from './MenuItem';

const ServiceMenu = ({ service, triggers, actions, close }) => {
    return (
        <div>
            <List>
                <ListSubheader>Triggers</ListSubheader>
                {
                    triggers.map((trigger, index) => {
                        return (
                            <MenuItem
                                key={index}
                                type="trigger"
                                service={service}
                                item={trigger}
                                close={close}
                            />
                        );
                    })
                }
            </List>

            <Divider />

            <List>
            <ListSubheader>Actions</ListSubheader>
                {
                    actions.map((action, index) => {
                        return (
                            <MenuItem
                                key={index}
                                type="action"
                                service={service}
                                item={action}
                                close={close}
                            />
                        );
                    })
                }
            </List>
        </div>
    );
};

export default ServiceMenu;