import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBarSpacer: theme.mixins.toolbar,
    content: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
}));