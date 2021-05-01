export const services = {
    webhooks: [
        {
            subService: '',
            kind: 'trigger',
            primaryText: 'Custom webhook',
            secondaryText: 'Triggers when webhook receives data.'
        },
    ],
    https: [
        {
            subService: '',
            kind: 'action',
            primaryText: 'Make a request',
            secondaryText: 'Sends an HTTP(S) request to a specified URL and processes the response.'
        },
    ],
    spotifys: [],
    telegrams: [
        {
            subService: 'sendMessage',
            kind: 'action',
            primaryText: 'Send a message',
            secondaryText: 'sends a message from your telegram bot to specific user.'
        },
        {
            subService: 'getChatMember',
            kind: 'action',
            primaryText: 'Get members',
            secondaryText: 'to see who has joined in your bot.'
        }
    ],
    sshs: [],
    githubs: [],
};