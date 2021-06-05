import React from 'react';
import { Divider } from '@material-ui/core';
import WebhookSidebarItem from '../../Services/Webhook/SidebarItem';
import SpotifySidebarItem from '../../Services/Spotify/SidebarItem';
import TelegramSidebarItem from '../../Services/Telegram/SidebarItem';
import SSHSidebarItem from '../../Services/SSH/SidebarItem';
import GithubSidebarItem from '../../Services/Github/SidebarItem';
import HTTPSidebarItem from '../../Services/HTTP/SidebarItem';
import DiscordSidebarItem from '../../Services/Discord/SidebarItem';
import SleepSidebarItem from '../../Services/ToolBox/Sleep/SidebarItem';
import RepeatSidebarItem from '../../Services/ToolBox/Repeater/SidebarItem';

const SketchpadSidebar = () => {
  return (
    <aside id="sketchpad-sidebar">
      <div className="description">Services</div>
      <WebhookSidebarItem />
      <HTTPSidebarItem />
      <SpotifySidebarItem />
      <TelegramSidebarItem />
      <SSHSidebarItem />
      <GithubSidebarItem />
      <DiscordSidebarItem />

      <Divider />
      <div className="description">Toolbox</div>
      <SleepSidebarItem />
      <RepeatSidebarItem />
    </aside>
  );
};

export default SketchpadSidebar;
