export const serviceBackToFront = (backType) => {
    switch (backType) {
        case 'webhooks':
            return 'Webhook';

        case 'https':
            return 'HTTP';

        case 'spotifies':
            return 'Spotify';

        case 'telegrams':
            return 'Telegram';

        case 'sshes':
            return 'SSH';

        case 'githubs':
            return 'Github';
        
        case 'discords':
            return 'Discord';

        case 'gmails':
            return 'Gmail';

        default:
            return 'Unknown';
    }
};