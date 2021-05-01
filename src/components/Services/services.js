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
  telegrams: [],
  sshs: [],
  githubs: [],
};
