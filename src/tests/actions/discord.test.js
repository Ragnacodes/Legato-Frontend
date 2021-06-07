import * as actions from '../../actions/discord';
import { ActionTypes } from '../../actions/discord';

test('should setup set channels action object', () => {
  const channels = [
    {
      id: '844018666315710479',
      guild_id: '844018666315710476',
      name: 'general',
      topic: '',
      type: 0,
      last_message_id: '847540869434703932',
      nsfw: false,
      icon: '',
      position: 0,
      bitrate: 0,
      user_limit: 0,
      parent_id: '844018666315710477',
      rate_limit_per_user: 0,
      owner_id: '',
      application_id: '',
    },
    {
      id: '845633435011514369',
      guild_id: '844018666315710476',
      name: 'groovy',
      topic: '',
      type: 0,
      last_message_id: '846502029579780117',
      nsfw: false,
      icon: '',
      position: 2,
      bitrate: 0,
      user_limit: 0,
      parent_id: '844018666315710477',
      rate_limit_per_user: 0,
      owner_id: '',
      application_id: '',
    },
    {
      id: '846051939149807666',
      guild_id: '844018666315710476',
      name: 'temp',
      topic: '',
      type: 0,
      last_message_id: '847540868630315049',
      nsfw: false,
      icon: '',
      position: 3,
      bitrate: 0,
      user_limit: 0,
      parent_id: '844018666315710477',
      rate_limit_per_user: 0,
      owner_id: '',
      application_id: '',
    },
  ];
  const action = actions.setChannels(channels);
  expect(action).toEqual({
    type: ActionTypes.SET_DISCORD_CHANNELS,
    payload: {
      channels,
    },
  });
});

test('should setup set messages action object', () => {
  const messages = [
    {
      id: '847626806651519048',
      type: 6,
      content: 'that is it',
      channel_id: '846160866000371753',
      attachments: [],
      embeds: [],
      mentions: [],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: '2021-05-28T00:06:18.850000+00:00',
      edited_timestamp: null,
      flags: 0,
      components: [],
    },
    {
      id: '847624201682812958',
      type: 0,
      content: 'hello',
      channel_id: '846160866000371753',
      attachments: [],
      embeds: [],
      mentions: [],
      mention_roles: [],
      pinned: true,
      mention_everyone: false,
      tts: false,
      timestamp: '2021-05-27T23:55:57.777000+00:00',
      edited_timestamp: null,
      flags: 0,
      components: [],
    },
  ];
  const action = actions.setMessages(messages);
  expect(action).toEqual({
    type: ActionTypes.SET_DISCORD_MESSAGES,
    payload: {
      messages,
    },
  });
});
