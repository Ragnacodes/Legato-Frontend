import CustomWebhook from './Webhook/CustomWebhook/Node';
import WebhookResponse from './Webhook/WebhookResponse/Node';
import HTTP1 from './HTTP/MakeRequest/Node';
import AddToPlaylist from './Spotify/SaveToPlaylist/Node';
import GetTopTracks from './Spotify/GetTopTracks/Node';
import WatchPlaylist from './Spotify/WatchPlaylist/Node';

export const nodeTypes = {
    webhooks_customWebhook: CustomWebhook,
    webhooks_webhookResponse: WebhookResponse,
    https_: HTTP1,
    spotifies_addToPlaylist: AddToPlaylist,
    spotifies_getTopTracks: GetTopTracks,
    spotifies_watchPlaylist: WatchPlaylist,
};