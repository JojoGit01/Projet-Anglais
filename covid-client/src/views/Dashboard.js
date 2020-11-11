import React from 'react'
import { View, Text } from 'react-native'
import { Container, Left, Header, Icon } from 'native-base'

export default function Dashboard({ navigation }) {
    return (
        <Container>
            <Header style={{backgroundColor: "#000"}}>
                <Left>
                    <Text style={{color: "#fff"}}>Dasbhoard</Text>
                    <Icon name="ios-menu" onPress={() => navigation.openDrawer()} />
                </Left>
            </Header>
        </Container>
    )
}
