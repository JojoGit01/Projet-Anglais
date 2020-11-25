import React from 'react'
import { View, Text } from 'react-native'
import { Title } from 'react-native-paper'
import BarChartCustom from '../Customs/BarChartCustom'
import PieChartCustom from '../Customs/PieChartCustom'
import LineChartCustom from '../Customs/LineChartCustom'

export default function DashboardContent() {
    return (
        <View>
            {/* Graphique */}
            <View>
                <Title style={{textAlign: "center", backgroundColor: "#000", color: "#fff", width: "100%", height: 60, paddingTop: 20, fontSize: 35}}>Graphique</Title>
                <View>
                    <Title>Nombre de nouveau cas par jour</Title>
                    {/*<BarChartCustom />*/}
                </View>
                <View>
                    <Title style={{textAlign:"center", textDecorationLine: "underline", fontSize: 25}}>Nombre de cas cumulés</Title>
                    <LineChartCustom />
                </View>
            </View>
            {/* Pie chart */}
            <View>
                <Title style={{textAlign: "center", backgroundColor: "#000", color: "#fff", width: "100%", height: 60, paddingTop: 20, fontSize: 35}}>Visualiser les données</Title>
                <PieChartCustom />
            </View>
        </View>
    )
}
