import React from 'react';

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside>
      <div className="description">You can drag these nodes to the pane on the right.</div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'WebhookNode')} draggable>
        Webhook
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'SpotifyNode')} draggable>
        Spotify
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'TelegramNode')} draggable>
        Telegram bot
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'SSHNode')} draggable>
        SSH
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'GithubNode')} draggable>
        Github
      </div>
    </aside>
  );
};