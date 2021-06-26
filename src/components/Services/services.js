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
      subService: 'addToPlaylist',
      kind: 'action',
      primaryText: 'Add to a playlist',
      secondaryText: 'Save a track identified by Spotify ID.',
    },
    {
      subService: 'getTopTracks',
      kind: 'action',
      primaryText: 'Get top tracks',
      secondaryText: "Get user's top tracks.",
    },
  ],
  telegrams: [
    {
      subService: 'sendMessage',
      kind: 'action',
      primaryText: 'Send a message',
      secondaryText: 'Sends a message from your telegram bot to specific user.',
    },
    {
      subService: 'getChatMember',
      kind: 'action',
      primaryText: 'Get members',
      secondaryText: 'To see who has joined in your bot.',
    },
  ],
  sshes: [
    {
      subService: '',
      kind: 'action',
      primaryText: 'Execute a command',
      secondaryText: 'Execute a command on a remote device.',
    },
  ],
  githubs: [
    {
      subService: 'createIssue',
      kind: 'action',
      primaryText: 'Create issue',
      secondaryText: 'Create an issue on a repository',
    },
    {
      subService: 'createPullRequest',
      kind: 'action',
      primaryText: 'Create pull request',
      secondaryText: 'Create a pull request on a repository',
    },
  ],
  discords: [
    {
      subService: 'sendMessage',
      kind: 'action',
      primaryText: 'Post a message',
      secondaryText: 'Posts a message in a channel.',
    },
    {
      subService: 'reactMessage',
      kind: 'action',
      primaryText: 'React to a message',
      secondaryText: 'React to a message in a channel.',
    },
    {
      subService: 'pinMessage',
      kind: 'action',
      primaryText: 'Pin a message',
      secondaryText: 'Pin a message in a channel.',
    },
  ],
  tool_boxes: [
    {
      subService: 'sleep',
      kind: 'action',
      primaryText: 'Sleep',
      secondaryText: 'Delay Execution.',
    },
    {
      subService: 'repeater',
      kind: 'action',
      primaryText: 'Repeat',
      secondaryText: 'Repeat a series of actions.',
    },
  ],
  gmails: [
    {
      subService: 'sendEmail',
      kind: 'action',
      primaryText: 'Send email',
      secondaryText: 'Send an email with SMTP.',
    }
  ]
};
