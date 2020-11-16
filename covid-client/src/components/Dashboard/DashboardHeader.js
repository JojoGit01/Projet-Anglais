import React, { useState } from 'react'
import { Title, Button } from 'react-native-paper'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const dataHeaderFrance = [
    {
        icon: "thumbs-up",
        title: "Confirmed",
        text: 950000,
        backColor: "deepskyblue"
    },
    {
        icon: "book-dead",
        title: "Death",
        text: 950000,
        backColor: "red"
    },
    {
        icon: "heartbeat",
        title: "Healing",
        text: 950000,
        backColor: "green"
    },
]

const dataHeaderMondial = [
    {
        icon: "thumbs-up",
        title: "Confirmed",
        text: 150000,
        backColor: "deepskyblue"
    },
    {
        icon: "book-dead",
        title: "Death",
        text: 150000,
        backColor: "red"
    },
    {
        icon: "heartbeat",
        title: "Healing",
        text: 150000,
        backColor: "green"
    },
]

const DashboardHeaderView = ({ dataHeader }) => {
    return (
        dataHeader.map( (data) => (
            <View key={data.title} style={{backgroundColor: data.backColor}}>
                <View style={styleDashboardHeader.dashboardHeaderViewBloc}>
                    <Icon style={styleDashboardHeader.dashboardHeaderViewBlocIcon} name={data.icon} size={100} />
                    <View style={styleDashboardHeader.dashboardViewBlockAlign}>
                        <Title style={styleDashboardHeader.dashboardHeaderViewBlocTitle}>{data.title}</Title>
                        <Text style={styleDashboardHeader.dashboardHeaderViewBlocText}>{data.text}</Text>
                    </View>
                </View>
            </View>
        ))
    )
}

export default function DashboardHeader() {
    const [dataBool, setDataBool] = useState(true)
    const [bgColor, setBgColor] = useState({
        bg1: "blue", 
        bg2: "grey"
    })

    return (
        <View style={styleDashboardHeader.dashboardHeader}>
            <Title style={styleDashboardHeader.dashboardHeaderTitle}>Statistique</Title>
            <View>
                <View style={{flexDirection: "row", width: "100%", justifyContent: "space-evenly", marginBottom: 20, marginTop: 20}}>
                    <Button style={{backgroundColor: dataBool === true ? bgColor.bg1 : bgColor.bg2}} mode="contained" onPress={ () => setDataBool(true)}>Cas - France</Button>
                    <Button style={{backgroundColor: dataBool === true ? bgColor.bg2 : bgColor.bg1}} mode="contained" onPress={ () => setDataBool(false)}>Cas mondiaux</Button>
                </View>
                <View style={styleDashboardHeader.dashboardHeaderView}>
                    <DashboardHeaderView dataHeader={dataBool === true ? dataHeaderFrance : dataHeaderMondial} />
                </View>
            </View>
        </View>
    )
}
 
const styleDashboardHeader = StyleSheet.create( {
    dashboardHeader: {
        width: "100%",
    },
    dashboardHeaderTitle: {
        fontSize: 40,
        paddingTop: 10,
        textAlign: "center",
        textDecorationLine: "underline"
    },
    dashboardHeaderView: {
        width: "100%",
        flexDirection: "column",
    },
    dashboardHeaderViewBloc: {
        width: "100%",
        height: 110,
        flexDirection: "row",
        marginBottom: 5,
        justifyContent: "space-between",
    },
    dashboardHeaderViewBlocIcon: {
        paddingTop: 5,
        paddingLeft:20
    },
    dashboardViewBlockAlign: {
        paddingRight: 20,
        alignItems: "flex-end",
        textAlign: "right"
    },
    dashboardHeaderViewBlocTitle: {
        paddingTop: 30,
        fontSize: 45,

    },
    dashboardHeaderViewBlocText: {
        fontSize: 30,
    }
})