import { AccountTree, TurnedIn, History, Schedule } from '@material-ui/icons';
export const getParts = (scenario, history) => [
    {
        path: '/scenarios',
        CustomIcon: AccountTree,
        title: 'Scenarios'
    },
    {
        path: `/scenarios/${scenario.id}/sketchpad`,
        CustomIcon: TurnedIn,
        title: scenario.name
    },
    {
        path: `/scenarios/${scenario.id}/history`,
        CustomIcon: History,
        title: 'History'
    },
    {
        path: `/scenarios/${scenario.id}/history/${history.id}`,
        CustomIcon: Schedule,
        title: history.time + ' ' + history.date
    }
];