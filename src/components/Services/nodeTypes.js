import CustomWebhook from './Webhook/CustomWebhook/Node';
import HTTP1 from './HTTP/MakeRequest/Node';
import AddToPlaylist from './Spotify/SaveToPlaylist/Node';
import GetTopTracks from './Spotify/GetTopTracks/Node';
import Telegram1 from './Telegram/SendMessage/Node';
import Telegram2 from './Telegram/getChatMember/Node';
import SSHExecuteCommand from './SSH/ExecuteCommand/Node';
import DiscordSendMessage from './Discord/SendMessage/Node';
import DiscordReactMessage from './Discord/ReactToMessage/Node';
import DiscordPinMessage from './Discord/PinMessage/Node';
import githubCreateIssue from './Github/CreateIssue/Node';
import githubCreatePullRequest from './Github/CreatePullRequest/Node';
import Sleep from './ToolBox/Sleep/Node';
import Repeater from './ToolBox/Repeater/Node';
import Gmail from './Gmail/sendEmail/Node';

export const nodeTypes = {
  webhooks_customWebhook: CustomWebhook,
  https_: HTTP1,
  spotifies_addToPlaylist: AddToPlaylist,
  spotifies_getTopTracks: GetTopTracks,
  telegrams_sendMessage: Telegram1,
  telegrams_getChatMember: Telegram2,
  sshes_: SSHExecuteCommand,
  discords_sendMessage: DiscordSendMessage,
  discords_reactMessage: DiscordReactMessage,
  discords_pinMessage: DiscordPinMessage,
  githubs_createIssue: githubCreateIssue,
  githubs_createPullRequest: githubCreatePullRequest,
  tool_boxes_sleep: Sleep,
  tool_boxes_repeater: Repeater,
  gmails_sendEmail: Gmail
};
