import React from 'react';
import { AvatarGroup } from '@material-ui/lab';
import { Avatar } from '@material-ui/core';
import ScenarioServiceIcon from '../ServiceIcons/ScenarioServiceIcon';

const ScenarioNodes = ({ nodes }) => {
    const reverseNodes = nodes.slice().reverse();
    const notCovered = 4 - reverseNodes.length;
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
                                    <ScenarioServiceIcon service='ssh' />
                                </Avatar>
                            );
                        case 'webhooks':
                            return (
                                <Avatar key={index}>
                                    <ScenarioServiceIcon service='webhooks' />
                                </Avatar>
                            );
                        case 'githubs':
                            return (
                                <Avatar key={index}>
                                    <ScenarioServiceIcon service='github' />
                            </Avatar>
                            );
                        case 'spotifies':
                            return (
                                <Avatar key={index}>
                                    <ScenarioServiceIcon service='spotify' />
                                </Avatar>
                            );
                        case 'telegrams':
                            return (
                                <Avatar key={index}>
                                    <ScenarioServiceIcon service='telegram' />
                                </Avatar>
                            );
                        case 'https':
                            return (
                                <Avatar key={index}>
                                    <ScenarioServiceIcon service='http' />
                                </Avatar>
                            );
                        case 'discords':
                            return (
                                <Avatar key={index}>
                                    <ScenarioServiceIcon service='discord' />
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