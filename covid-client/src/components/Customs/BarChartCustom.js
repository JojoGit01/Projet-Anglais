import React, {useState} from 'react'
import { View, Text } from 'react-native'
import { BarChart } from "react-native-chart-kit";
import { chartConfig } from '../constantes/config'
import {screenWidth} from '../constantes/config'

export default function BarChartCustom() {
    const [data, setData] = useState({
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43]
            }
        ]
    })

    return (
        <View>
            <BarChart
                data={data}
                width={screenWidth}
                height={220}
                yAxisLabel={"$"}
                chartConfig={chartConfig}
                verticalLabelRotation={30}           
            />
        </View>
        )
    }
