import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { LineChart } from "react-native-chart-kit";
import { chartConfig } from '../constantes/config'
import {screenWidth} from '../constantes/config'

const data = {
    labels: ["01/02", "February", "March", "April", "May", "June", "01/02", "February", "March", "April", "May", "June", "01/02", "February", "March", "April", "May", "June", "01/02", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 20, 45, 28, 80, 99, 43, 20, 45, 28, 80, 99, 43, 20, 45, 28, 80, 99, 43, 20, 45, 28, 80, 99, 43, 20, 45, 28, 80, 99, 43, 20, 45, 28, 80, 99, 43, 20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(0, 191, 255, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Cas cumulés"] // optional
  };

export default function LineChartCustom() {
    return (
        <View>
            <LineChart
                data={data}
                width={screenWidth}
                height={256}
                verticalLabelRotation={30}
                chartConfig={chartConfig}
                yAxisInterval={2}
                onDataPointClick={({value, dataset, getColor}) => {alert(value)}}
                bezier
            />
        </View>
    )
}
