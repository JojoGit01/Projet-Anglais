import React from 'react'
import { Appbar } from 'react-native-paper'

export default function Header({navigation}) {
    return (
        <Appbar.Header style={{backgroundColor: "#fff"}} >
            <Appbar.Action size={35} icon="menu" onPress={() => navigation.openDrawer()} />
        </Appbar.Header>
    )
}
