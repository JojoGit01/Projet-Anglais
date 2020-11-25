import React, {useState} from 'react'
import { View, StyleSheet, Dimensions, Text } from 'react-native'
import MapView, {PROVIDER_GOOGLE, Marker, Circle} from 'react-native-maps';


export default function Map() { 
    const [dataRegion, setRegion] = useState({
        latitude: 43.675643543162735,
        longitude: 7.222010042636591,
        latitudeDelta: 0.08,
        longitudeDelta: 0.02,
    })
    
    const [dataPressed, setDataPressed] = useState(1)
    
    return (
        <MapView
        style={styles.mapStyle}
        provider={PROVIDER_GOOGLE}
        onRegionChange={ region => setRegion(region)}
        >
            <Circle
                onPress={() => setDataPressed(2)}
                center={{latitude: 43.675643543162735, longitude: 7.222010042636591,}}
                radius={200000}
                strokeWidth={5}
                strokeColor={"red"}
                fillColor={"rgba(255,127,80,0.5)"}
            />
        </MapView>
        )
    }
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        mapStyle: {
            width: Dimensions.get('window').width,
            height: 400,
        },
    });
    