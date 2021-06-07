import React, { useEffect, useState } from 'react';
import { Box } from '@material-ui/core';
import Terminal, { ColorMode, LineType } from 'react-terminal-ui';


const Logs = ({ fetched, scenarioID }) => {
    const [terminalLineData, setTerminalLineData] = useState([]);

    useEffect(() => {
        if (fetched) {
            const es = new EventSource(`https://abstergo.ir/api/events/${scenarioID}`);
            es.onopen = ev => {
                const newLineData = {
                    type: LineType.Output,
                    value: "Event source successfully opened."
                };
                setTerminalLineData(prev => [...prev, newLineData]);
            };
            es.onmessage = ev => {
                const newLineData = {
                    type: LineType.Output,
                    value: ev.data
                };
                setTerminalLineData(prev => [...prev, newLineData]);
            };
            es.onerror = ev => {
                const newLineData = {
                    type: LineType.Output,
                    value: "Event source closed due to an error."
                };
                setTerminalLineData(prev => [...prev, newLineData]);
            };
    
            return () => {
                es.close();
            };
        }
    }, [scenarioID, fetched]);

    return (
        <Box className="terminal-box">
            <Terminal
                name='Real-time Scenario Log'
                colorMode={ ColorMode.Dark }
                lineData={ terminalLineData }
            />
        </Box>
    );
};

export default Logs;