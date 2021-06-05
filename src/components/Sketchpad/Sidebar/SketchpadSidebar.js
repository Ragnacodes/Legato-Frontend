import React from 'react';
import { Divider, Typography } from '@material-ui/core';
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
      <Typography variant="h6" className="description">Services</Typography>
      <div className="services">
      <WebhookSidebarItem />
      <HTTPSidebarItem />
      <SpotifySidebarItem />
      <TelegramSidebarItem />
      <SSHSidebarItem />
      <GithubSidebarItem />
      <DiscordSidebarItem />
      </div>

      <Divider />
      <Typography variant="h6" className="description">Toolbox</Typography>
      <div className="toolbox">
      <SleepSidebarItem/>
      <RepeatSidebarItem/>
      </div>
    </aside>
  );
};

export default SketchpadSidebar;
