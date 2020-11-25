import React, { useState } from 'react'
import { View } from 'react-native';
import { Appbar } from 'react-native-paper'
import Map from '../components/Map/Map'
import MapInformation from '../components/Map/MapInformation';

// npm install react-native-maps --save-exact


function MapCovid({navigation}) {
    const [dataInformationCard, setDataInformationCard] = useState({title: "Test"})

    return (
        <View>
            <Appbar.Header style={{backgroundColor: "#fff"}} >
                <Appbar.Action size={35} icon="menu" onPress={() => navigation.openDrawer()} />
            </Appbar.Header>
            <Map />
            <MapInformation data={[dataInformationCard]} />
        </View>
    )
}

export default MapCovid
