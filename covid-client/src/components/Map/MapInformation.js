import React from 'react'
import { View, Text } from 'react-native'
import { Title } from 'react-native-paper'

export default function MapInformation( {data} ) {
    return (
        <View>
            <Title>{data.map(elm => elm.title)}</Title>
        </View>
    )
}
