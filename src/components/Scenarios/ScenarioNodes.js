import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Avatar from '@material-ui/core/Avatar';
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';
import CodeIcon from '@material-ui/icons/Code';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import LanguageIcon from '@material-ui/icons/Language';

const ScenarioNodes = ({nodes}) => {
    return (
        <AvatarGroup max={4}>
            {
                nodes.map((node) => {
                    switch (node) {
                        case 'ssh':
                            return (
                                <Avatar className="ssh">
                                    <CodeIcon fontSize="small" />
                                </Avatar>
                            );
                        case 'webhook':
                            return (
                                <Avatar className="webhook">
                                    <LanguageIcon fontSize="small" />
                                </Avatar>
                            );
                        case 'github':
                            return (
                                <Avatar className="github">
                                    <GitHubIcon fontSize="small" />
                            </Avatar>
                            );
                        case 'spotify':
                            return (
                                <Avatar className="spotify">
                                    <QueueMusicIcon fontSize="small" />
                                </Avatar>
                            );
                        case 'telegram':
                            return (
                                <Avatar className="telegram">
                                    <TelegramIcon fontSize="small" />
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