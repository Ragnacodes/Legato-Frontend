import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    separator: {
        color: theme.palette.common.white
    },
    link: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        marginRight: theme.spacing(0.7),
        width: 20,
        height: 20
    },
}));