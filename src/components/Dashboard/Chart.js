import React, {useState} from 'react';
import { Paper } from '@material-ui/core';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  SplineSeries,
  Legend
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { easeBounceOut } from 'd3-ease';

const UsedChart = () => {
  const [data] = useState([
    { dataTransferArgument: 10, dataTransferValue: 10 },
    { dataTransferArgument: 22, dataTransferValue: 40 },
    { dataTransferArgument: 28, dataTransferValue: 21 },
    { operationArgument: 10, operationValue: 20 },
    { operationArgument: 22, operationValue: 15 },
    { operationArgument: 28, operationValue: 36 },
  ]);
  return (
    <Paper elevation={15} style={{ margin: 10, marginLeft: 35, marginRight: 35 }}>
      <Chart data={data} height={250} >
        <ArgumentAxis />
        <ValueAxis />
        <Legend />
        <SplineSeries valueField="operationValue" argumentField="operationArgument" name="Operations" />
        <SplineSeries valueField="dataTransferValue" argumentField="dataTransferArgument" name="Data transfer" />
        <Animation duration={2500} easing={easeBounceOut} />
      </Chart>
    </Paper>
  )
};

export default UsedChart;