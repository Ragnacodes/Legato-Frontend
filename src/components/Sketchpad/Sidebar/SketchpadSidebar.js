import React from 'react';
import { Divider } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import SidebarItem from './SidebarItem';
import WebhookSidebarItem from '../../Services/Webhook/WebhookSidebarItem';
import SpotifySidebarItem from '../../Services/Spotify/SpotifySidebarItem';
import TelegramSidebarItem from '../../Services/Telegram/TelegramSidebarItem';
import SSHSidebarItem from '../../Services/SSH/SSHSidebarItem';
import GithubSidebarItem from '../../Services/Github/GithubSidebarItem';

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
      <SidebarItem icon={<Add fontSize="large" className="icon" />} />
      <SidebarItem icon={<Add fontSize="large" className="icon" />} />
    </aside>
  );
};

export default SketchpadSidebar;