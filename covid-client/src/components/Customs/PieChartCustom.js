import React from 'react'
import { View, Text } from 'react-native'
import { PieChart } from "react-native-chart-kit";
import { chartConfig } from '../constantes/config'
import {screenWidth} from '../constantes/config'

const data = [
    {
        name: "Europe",
        population: 40,
        color: "#8B0000",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Asie",
        population: 150,
        color: "#FF8C00",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Afrique",
        population: 70,
        color: "#FFD700",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Océanie",
        population: 50,
        color: "#8B008B",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Amérique",
        population: 20,
        color: "green",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    }
];


export default function PieChartCustom () {
    return (
        <View style={{width: "100%", height: 250}}>
            <PieChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            accessor= "population"
            backgroundColor="transparent"
            paddingLeft="25"
            />
        </View>
    )
}