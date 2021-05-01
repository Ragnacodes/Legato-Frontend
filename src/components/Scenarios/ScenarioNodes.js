import React from 'react';
import { AvatarGroup } from '@material-ui/lab';
import { Avatar } from '@material-ui/core';
import {
    GitHub,
    Telegram,
    Code,
    QueueMusic,
    Language,
    Http
} from '@material-ui/icons';

const ScenarioNodes = ({nodes}) => {
    return (
        <AvatarGroup max={4}>
            {
                nodes.reverse().map((node, index) => {
                    switch (node) {
                        case 'sshs':
                            return (
                                <Avatar key={index} className="ssh">
                                    <Code fontSize="small" />
                                </Avatar>
                            );
                        case 'webhooks':
                            return (
                                <Avatar key={index} className="webhook">
                                    <Language fontSize="small" />
                                </Avatar>
                            );
                        case 'githubs':
                            return (
                                <Avatar key={index} className="github">
                                    <GitHub fontSize="small" />
                            </Avatar>
                            );
                        case 'spotifys':
                            return (
                                <Avatar key={index} className="spotify">
                                    <QueueMusic fontSize="small" />
                                </Avatar>
                            );
                        case 'telegrams':
                            return (
                                <Avatar key={index} className="telegram">
                                    <Telegram fontSize="small" />
                                </Avatar>
                            );
                        case 'https':
                            return (
                                <Avatar key={index} className="http">
                                    <Http fontSize="small" />
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