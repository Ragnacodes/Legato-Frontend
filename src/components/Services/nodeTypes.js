import CustomWebhook from './Webhook/CustomWebhook/Node';
import WebhookResponse from './Webhook/WebhookResponse/Node';
import HTTP1 from './HTTP/MakeRequest/Node';
import AddToPlaylist from './Spotify/SaveToPlaylist/Node';
import GetTopTracks from './Spotify/GetTopTracks/Node';
import WatchPlaylist from './Spotify/WatchPlaylist/Node';
import Telegram1 from './Telegram/SendMessage/Node';
import Telegram2 from './Telegram/getChatMember/Node';
import SSHExecuteCommand from './SSH/ExecuteCommand/Node';
import Sleep from './ToolBox/Sleep/Node'
import Repeater from './ToolBox/Repeater/Node'

export const nodeTypes = {
    webhooks_customWebhook: CustomWebhook,
    webhooks_webhookResponse: WebhookResponse,
    https_: HTTP1,
    spotifies_addToPlaylist: AddToPlaylist,
    spotifies_getTopTracks: GetTopTracks,
    spotifies_watchPlaylist: WatchPlaylist,
    telegrams_sendMessage: Telegram1,
    telegrams_getChatMember: Telegram2,
    sshes_: SSHExecuteCommand,
    tool_boxes_sleep: Sleep,
    tool_boxes_repeater: Repeater,

};