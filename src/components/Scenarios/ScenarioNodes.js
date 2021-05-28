import React from 'react';
import { AvatarGroup } from '@material-ui/lab';
import { Avatar } from '@material-ui/core';
import ServiceIcon from '../ServiceIcon';

const ScenarioNode = ({ service }) => {
    return (
        <ServiceIcon
            service={service}
            size='small'
            padding="4px"
        />
    );
};

const ScenarioNodes = ({ nodes }) => {
    const reverseNodes = nodes.slice().reverse();
    const notCovered = 4 - reverseNodes;
    for (let i = 0; i < notCovered; i++) {
        reverseNodes.push('');
    }

    return (
        <AvatarGroup max={4} spacing={5}>
            {
                reverseNodes.map((node, index) => {
                    switch (node) {
                        case 'sshes':
                            return (
                                <Avatar key={index}>
                                    <ScenarioNode service='ssh' />
                                </Avatar>
                            );
                        case 'webhooks':
                            return (
                                <Avatar key={index}>
                                    <ScenarioNode service='webhooks' />
                                </Avatar>
                            );
                        case 'githubs':
                            return (
                                <Avatar key={index}>
                                    <ScenarioNode service='github' />
                            </Avatar>
                            );
                        case 'spotifies':
                            return (
                                <Avatar key={index}>
                                    <ScenarioNode service='spotify' />
                                </Avatar>
                            );
                        case 'telegrams':
                            return (
                                <Avatar key={index}>
                                    <ScenarioNode service='telegram' />
                                </Avatar>
                            );
                        case 'https':
                            return (
                                <Avatar key={index}>
                                    <ScenarioNode service='http' />
                                </Avatar>
                            );
                        case 'discord':
                            return (
                                <Avatar key={index}>
                                    <ScenarioNode service='discord' />
                                </Avatar>
                            );
                        default:
                            return (
                                <Avatar key={index}>
                                    &zwnj;
                                </Avatar>
                            );
                    }
                })
            }


        </AvatarGroup>
    );
};

export default ScenarioNodes;