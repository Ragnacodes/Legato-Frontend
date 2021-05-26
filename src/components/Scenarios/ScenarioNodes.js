import React from 'react';
import { AvatarGroup } from '@material-ui/lab';
import { Avatar } from '@material-ui/core';
import ServiceIcon from '../ServiceIcon';
const ScenarioNodes = ({nodes}) => {
    return (
        <AvatarGroup max={4} spacing={5}>
            {
                nodes.reverse().map((node, index) => {
                    switch (node) {
                        case 'sshes':
                            return (
                                <Avatar key={index} className="scenario-avatar ssh">
                                    <ServiceIcon service='ssh' size='small' className='scenario-icons'/>
                                </Avatar>
                            );
                        case 'webhooks':
                            return (
                                <Avatar key={index} className="scenario-avatar webhook">
                                    <ServiceIcon service='webhooks' size='small' className='scenario-icons'/>
                                </Avatar>
                            );
                        case 'githubs':
                            return (
                                <Avatar key={index} className="scenario-avatar github">
                                    <ServiceIcon service='github' size='small' className='scenario-icons'/>
                            </Avatar>
                            );
                        case 'spotifies':
                            return (
                                <Avatar key={index} className="scenario-avatar spotify">
                                    <ServiceIcon service='spotify' size='small' className='scenario-icons'/>
                                </Avatar>
                            );
                        case 'telegrams':
                            return (
                                <Avatar key={index} className="scenario-avatar telegram">
                                    <ServiceIcon service='telegram' size='small' className='scenario-icons'/>
                                </Avatar>
                            );
                        case 'https':
                            return (
                                <Avatar key={index} className="scenario-avatar http">
                                    <ServiceIcon service='http' size='small' className='scenario-icons'/>
                                </Avatar>
                            );
                        case 'discord':
                            return (
                                <Avatar key={index} className="scenario-avatar discord">
                                    <ServiceIcon service='discord' size='small' className='scenario-icons'/>
                                </Avatar>
                            );
                        default:
                            return null;
                    }
                })
            }
        </AvatarGroup>
    );
};

export default ScenarioNodes;