import { AvatarGroup } from '@material-ui/lab';
import { Avatar } from '@material-ui/core';
import {
    GitHub,
    Telegram,
    Code,
    QueueMusic,
    Language
} from '@material-ui/icons/GitHub';

const ScenarioNodes = ({nodes}) => {
    return (
        <AvatarGroup max={4}>
            {
                nodes.map((node) => {
                    switch (node) {
                        case 'sshs':
                            return (
                                <Avatar className="ssh">
                                    <Code fontSize="small" />
                                </Avatar>
                            );
                        case 'webhooks':
                            return (
                                <Avatar className="webhook">
                                    <Language fontSize="small" />
                                </Avatar>
                            );
                        case 'githubs':
                            return (
                                <Avatar className="github">
                                    <GitHub fontSize="small" />
                            </Avatar>
                            );
                        case 'spotifys':
                            return (
                                <Avatar className="spotify">
                                    <QueueMusic fontSize="small" />
                                </Avatar>
                            );
                        case 'telegrams':
                            return (
                                <Avatar className="telegram">
                                    <Telegram fontSize="small" />
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