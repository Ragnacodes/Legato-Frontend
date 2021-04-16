import React from 'react';
import { Divider } from '@material-ui/core';
import {
  GitHub,
  Telegram,
  Code,
  QueueMusic,
  Language,
  Add
} from '@material-ui/icons';

const SketchpadSidebar =  () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside>
      <div className="description">Services</div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'webhooks')} draggable>
        <Language fontSize="large" className="icon webhook" />
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'spotifys')} draggable>
        <QueueMusic fontSize="large" className="icon spotify" />
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'telegrams')} draggable>
        <Telegram fontSize="large" className="icon telegram" />
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'sshs')} draggable>
        <Code fontSize="large" className="icon ssh" />
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'githubs')} draggable>
        <GitHub fontSize="large" className="icon github" />
      </div>

      <Divider />
      <div className="description">Flows</div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'add')} draggable>
        <Add fontSize="large" className="icon" />
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'add')} draggable>
        <Add fontSize="large" className="icon" />
      </div>
    </aside>
  );
};

export default SketchpadSidebar;