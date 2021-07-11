import React, { useEffect, useState } from 'react';
import Axios from '../../utils/axiosConfig';
import { Grid, Paper, Box } from '@material-ui/core';
import Title from './Title';
import Histories from './LatestRuns/Histories/Histories';
import BarChart from './LatestRuns/BarChart';
import PieChart from './LatestRuns/PieChart';
import ActiveScenarios from './ActiveScenarios/ActiveScenarios';

const isInSpecDate = (date1, date2) => {
    if (date1.setHours(0,0,0,0) === date2.setHours(0,0,0,0)) {
        return true;
    }
    else {
        return false;
    }
};

const createLast7Days = () => {
    const result = [
        { day: new Date(Date.now() - 6 * 86400000), count: 0 },
        { day: new Date(Date.now() - 5 * 86400000), count: 0 },
        { day: new Date(Date.now() - 4 * 86400000), count: 0 },
        { day: new Date(Date.now() - 3 * 86400000), count: 0 },
        { day: new Date(Date.now() - 2 * 86400000), count: 0 },
        { day: new Date(Date.now() - 1 * 86400000), count: 0 },
        { day: new Date(Date.now() - 0 * 86400000), count: 0 },
    ];
    return result;
};

const convertDayName = (input) => {
    const result = input;
    const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    for (let i = 0; i < 7; i++) {
        const date = new Date(input[i].day);
        const dayName = days[date.getDay()];
        result[i].day = dayName;
    };
    result[6].day = 'Today';
    return result;
};

const Dashboard = ({ username }) => {
    const [loading, setLoading] = useState(true);
    const [records, setRecords] = useState([]);
    const [barData, setBarData] = useState([]);
    const [pieData, setPieData] = useState([]);

    useEffect(() => {
        setLoading(true);
        const tempRecords = [];
        const last7Days = createLast7Days();
        const tempPieData = [];
        Axios.get(`https://abstergo.ir/api/users/${username}/logs`)
        .then(res => {
            const api = res.data.histories;    
            api.forEach(item => {
                const newDate = new Date(item.history.created_at);
                const date = newDate.toDateString();
                const time = newDate.toTimeString().slice(0,8);
                const tempRecord = {
                    id: item.history.id,
                    date,
                    time,
                    status: 1,
                    scenario: item.scenario
                };
                tempRecords.push(tempRecord);

                for (let i = 0; i < 7; i++){
                    if (isInSpecDate(newDate, last7Days[i].day)) {
                        last7Days[i].count = last7Days[i].count + 1;
                    };
                };

                const index = tempPieData.findIndex(el => el.id === item.scenario.id);
                if (index === -1) {
                    const temp = {
                        id: item.scenario.id,
                        name: item.scenario.name,
                        count: 1
                    };
                    tempPieData.push(temp);
                }
                else {
                    tempPieData[index].count = tempPieData[index].count + 1;
                }
            });

            setRecords(tempRecords);
            setBarData(convertDayName(last7Days));
            console.log(tempPieData);
            setPieData(tempPieData);
            setLoading(false);
        });
    }, [username]);

    return (
        <React.Fragment>
            {/* BarChart */}
            <Grid item xs={12} md={8} lg={9}>
                <Box component={Paper} p={3} style={{minHeight: '150px'}}>
                    <Title>Last 7 Days Runs</Title>
                    <BarChart data={barData} loading={loading} />
                </Box>
            </Grid>

            {/* PieChart */}
            <Grid item xs={12} md={4} lg={3}>
                <Box component={Paper} p={3} style={{minHeight: '150px'}}>
                    <Title>Scenario Runs</Title>
                    <PieChart data={pieData} loading={loading} />
                </Box>
            </Grid>

            {/* Active Scenarios */}
            <ActiveScenarios />

            {/* Recent Runs */}
            <Grid item xs={12}>
                <Box component={Paper} p={3} style={{minHeight: '150px'}}>
                    <Title>Recent Runs</Title>
                    <Histories loading={loading} records={records} />
                </Box>
            </Grid>
        </React.Fragment>
    );
};

export default Dashboard;