import React from 'react'
import { View, Text } from 'react-native'
import { BarChart } from "react-native-chart-kit";
import { chartConfig } from '../constantes/config'
import {screenWidth} from '../constantes/config'

const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
        {
            data: [20, 45, 28, 80, 99, 43]
        }
    ]
};

export default function BarChartCustom() {
    return (
        <View>
            <BarChart
                data={data}
                width={screenWidth}
                height={220}
                yAxisLabel="$"
                chartConfig={chartConfig}
                verticalLabelRotation={30}
            />
        </View>
    )
}
