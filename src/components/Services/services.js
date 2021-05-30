export const services = {
  webhooks: [
    {
      subService: 'customWebhook',
      kind: 'trigger',
      primaryText: 'Custom webhook',
      secondaryText: 'Triggers when webhook receives data.',
    },
    {
      subService: 'webhookResponse',
      kind: 'action',
      primaryText: 'Webhook response',
      secondaryText: 'Creates a response to the webhook.',
    },
  ],
  https: [
    {
      subService: '',
      kind: 'action',
      primaryText: 'Make a request',
      secondaryText:
        'Sends an HTTP(S) request to a specified URL and processes the response.',
    },
  ],
  spotifies: [
    {
      subService: 'watchPlaylist',
      kind: 'trigger',
      primaryText: 'Watch a playlist',
      secondaryText: 'Triggers when a new track is added to playlist.',
    },
    {
      subService: 'addToPlaylist',
      kind: 'action',
      primaryText: 'Add to a playlist',
      secondaryText: 'Save a track identified by Spotify ID.',
    },
    {
      subService: 'getTopTracks',
      kind: 'action',
      primaryText: 'Get top tracks',
      secondaryText: 'Get user\'s top tracks.',
    },
  ],
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
    sshes: [
      {
        subService: '',
        kind: 'action',
        primaryText: 'Execute a command',
        secondaryText:
          'Execute a command on a remote device.',
      },
    ],
    githubs: [],
    discords:[
      {
        subService: 'sendMessage',
        kind: 'action',
        primaryText: 'Post a message',
        secondaryText:
          'Posts a message in a channel.',
      },
      {
        subService: 'reactMessage',
        kind: 'action',
        primaryText: 'React to a message',
        secondaryText:
          'React to a message in a channel.',
      },
      {
        subService: 'pinMessage',
        kind: 'action',
        primaryText: 'Pin a message',
        secondaryText:
          'Pin a message in a channel.',
      },
    ]
};
