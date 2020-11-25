import React from 'react'
import { View, Text } from 'react-native'
import { Appbar, Title, Button, List } from 'react-native-paper'
//import {BottomNavigationCustom} from '../components/BottomNavigation/BottomNavigation'


export default function Home({ navigation }) {
    return (
        <View>
            <Appbar.Header style={{backgroundColor: "#fff"}} >
                <Appbar.Action size={35} icon="menu" onPress={() => navigation.openDrawer()} />
            </Appbar.Header>
            
            <View>
                {/*Presentation */}
                <View style={{backgroundColor: "#1c2295", height: 125, width: "100%"}}>
                    <Title style={{
                        fontSize: 30,
                        alignItems: "center",
                        textAlign: "center",
                        marginTop: 50,
                        color: "#fff",
                        textDecorationLine: "underline"
                    }}>Présentation</Title>
                </View>
            </View>

            { /* Visualisation des données */ }
            <View>

                <List.Section style={{width: "80%"}}>
                    <List.Subheader style={{fontSize: 25, textDecorationLine:"underline"}}>Fonctionnalitées</List.Subheader>
                    <List.Item style={{marginBottom: -25}}
                        title="Visualisez les données"
                        left={() => <List.Icon icon="arrow-right-circle-outline" />}
                    />
                    <List.Item
                        title="Map Covid"
                        left={() => <List.Icon icon="arrow-right-circle-outline" />}
                    />
                </List.Section>

            </View>


            <View>
                {/* Information Coronavirus */}
                <View style={{backgroundColor: "#1c2295", height: 125, width: "100%"}}>
                    <Title style={{
                        fontSize: 30,
                        alignItems: "center",
                        textAlign: "center",
                        marginTop: 50,
                        color: "#fff",
                        textDecorationLine: "underline"
                    }}>Information Coronavirus</Title>
                </View>
            </View>
            { /* Gestes barriéres */ }

            { /* Bottom Navigation */ } 
            {/*<BottomNavigationCustom />*/}           
        </View>
    )
}
