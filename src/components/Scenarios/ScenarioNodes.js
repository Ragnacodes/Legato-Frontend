import React from 'react';
import { AvatarGroup } from '@material-ui/lab';
import { Avatar } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faSpotify, faTelegram, faGithub } from '@fortawesome/free-brands-svg-icons';

const ScenarioNodes = ({nodes}) => {
    return (
        <AvatarGroup max={4}>
            {
                nodes.reverse().map((node, index) => {
                    switch (node) {
                        case 'sshes':
                            return (
                                <Avatar key={index} className="ssh">
                                    <FontAwesomeIcon icon={faGithub} />
                                </Avatar>
                            );
                        case 'webhooks':
                            return (
                                <Avatar key={index} className="webhook">
                                    <FontAwesomeIcon icon={faGithub} />
                                </Avatar>
                            );
                        case 'githubs':
                            return (
                                <Avatar key={index} className="github">
                                    <FontAwesomeIcon icon={faGithub} />
                            </Avatar>
                            );
                        case 'spotifies':
                            return (
                                <Avatar key={index} className="spotify">
                                    <FontAwesomeIcon icon={faSpotify} />
                                </Avatar>
                            );
                        case 'telegrams':
                            return (
                                <Avatar key={index} className="telegram">
                                    <FontAwesomeIcon icon={faTelegram} />
                                </Avatar>
                            );
                        case 'https':
                            return (
                                <Avatar key={index} className="http">
                                    <FontAwesomeIcon icon={faGithub} />
                                </Avatar>
                            );
                        case 'discord':
                            return (
                                <Avatar key={index} className="discord">
                                    <FontAwesomeIcon icon={faDiscord} />
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