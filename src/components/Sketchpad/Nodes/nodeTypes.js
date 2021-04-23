import Github1 from '../../Services/Github/01/Node';
import Github2 from '../../Services/Github/02/Node';
import Spotify1 from '../../Services/Spotify/01/Node';
import Spotify2 from '../../Services/Spotify/02/Node';
import SSH1 from '../../Services/SSH/01/Node';
import SSH2 from '../../Services/SSH/02/Node';
import Telegram1 from '../../Services/Telegram/01/Node';
import Telegram2 from '../../Services/Telegram/02/Node';
import Webhook1 from '../../Services/Webhook/01/Node';
import Webhook2 from '../../Services/Webhook/02/Node';

export const nodeTypes = {
    github_1: Github1,
    github_2: Github2,
    spotify_1: Spotify1,
    spotify_2: Spotify2,
    ssh_1: SSH1,
    ssh_2: SSH2,
    telegram_1: Telegram1,
    telegram_2: Telegram2,
    webhook_1: Webhook1,
    webhook_2: Webhook2
};