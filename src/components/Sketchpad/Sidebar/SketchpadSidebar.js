import React from 'react';
import { Divider, Grid, Typography } from '@material-ui/core';
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
    <Grid
      container
      height="100%"
      spacing={2}
      component="aside"
      direction="column"
      alignItems="center"
    >
      <Typography variant="caption">Services</Typography>

      <Grid item>
        <WebhookSidebarItem />
      </Grid>

      <Grid item>
        <HTTPSidebarItem />
      </Grid>

      <Grid item>
        <SpotifySidebarItem />
      </Grid>

      <Grid item>
        <TelegramSidebarItem />
      </Grid>

      <Grid item>
        <SSHSidebarItem />
      </Grid>

      <Grid item>
        <GithubSidebarItem />
      </Grid>

      <Grid item>
        <DiscordSidebarItem />
      </Grid>

      <Grid item>
        <Divider style={{width: "45px"}}/>
      </Grid>

      <Typography variant="caption">Toolbox</Typography>

      <Grid item>
        <SleepSidebarItem/>
      </Grid>
        
      <Grid item>
        <RepeatSidebarItem/>
      </Grid>

    </Grid>
  );
};

export default SketchpadSidebar;
