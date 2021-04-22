import React from 'react';
import { Divider } from '@material-ui/core';
import WebhookSidebarItem from '../../Services/Webhook/SidebarItem';
import SpotifySidebarItem from '../../Services/Spotify/SidebarItem';
import TelegramSidebarItem from '../../Services/Telegram/SidebarItem';
import SSHSidebarItem from '../../Services/SSH/SidebarItem';
import GithubSidebarItem from '../../Services/Github/SidebarItem';

const SketchpadSidebar =  () => {
  return (
    <aside id="sketchpad-sidebar">
      <div className="description">Services</div>
      <WebhookSidebarItem />
      <SpotifySidebarItem />
      <TelegramSidebarItem />
      <SSHSidebarItem />
      <GithubSidebarItem />

      <Divider />
      <div className="description">Toolbox</div>
    </aside>
  );
};

export default SketchpadSidebar;