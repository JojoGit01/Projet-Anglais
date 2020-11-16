import React from 'react'
import { View, Image, ScrollView } from 'react-native'

import { Appbar, Title, Button, List } from 'react-native-paper'
import DashboardContent from '../components/Dashboard/DashboardContent'
import DashboardHeader from '../components/Dashboard/DashboardHeader'

export default function Dashboard({ navigation }) {
    return (
        <ScrollView>
            <View>
                <Appbar.Header style={{backgroundColor: "#fff"}} >
                    <Appbar.Action size={35} icon="menu" onPress={() => navigation.openDrawer()} />
                </Appbar.Header>
                <View style={{width: "100%", height: 100, marginBottom: 10, alignItems: "center"}}>
                    <Image style={{width: "100%", height: 100, zIndex: -1}} source={require('../../assets/spf_dossier_covid_header.jpg')} />
                    <Title style={{position:"absolute", paddingTop: 37.5, fontSize: 45, color: "white", textDecorationLine: "underline"}}>Tableau de bord</Title>
                </View>
                <DashboardHeader />
                <DashboardContent />
            </View>
        </ScrollView>
    )
}
