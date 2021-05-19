import { AccountTree, TurnedIn, History } from '@material-ui/icons';
export const getParts = ({ id, name }) => [
    {
        path: '/scenarios',
        CustomIcon: AccountTree,
        title: 'Scenarios'
    },
    {
        path: `/scenarios/${id}/sketchpad`,
        CustomIcon: TurnedIn,
        title: name
    },
    {
        path: `/scenarios/${id}/history`,
        CustomIcon: History,
        title: 'History'
    }
];