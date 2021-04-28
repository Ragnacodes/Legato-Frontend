import Webhook1 from './Webhook/CustomWebhook/Node';
import HTTP1 from './HTTP/MakeRequest/Node';
import Telegram1 from './Telegram/SendMessage/Node'

export const nodeTypes = {
    webhooks_: Webhook1,
    https_: HTTP1,
    telegrams_sendMessage: Telegram1,
};