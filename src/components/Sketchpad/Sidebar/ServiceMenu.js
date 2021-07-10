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
            { triggers.length > 0 &&
                <List>
                    <ListSubheader>Triggers</ListSubheader>
                    {
                        triggers.map((trigger, index) => {
                            return (
                                <MenuItem
                                    key={index}
                                    service={service}
                                    item={trigger}
                                    close={close}
                                />
                            );
                        })
                    }
                </List>
            }

            { triggers.length > 0 && actions.length > 0 && <Divider /> }

            { actions.length > 0 &&
                <List>
                    <ListSubheader>Actions</ListSubheader>
                        {
                            actions.map((action, index) => {
                                return (
                                    <MenuItem
                                        key={index}
                                        service={service}
                                        item={action}
                                        close={close}
                                    />
                                );
                            })
                        }
                </List>
            }
        </div>
    );
};

export default ServiceMenu;