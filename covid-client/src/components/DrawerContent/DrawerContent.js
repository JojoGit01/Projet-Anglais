import React, { useState } from 'react'
import { View, Image } from 'react-native'
import { Drawer, Text, TouchableRipple, Switch } from 'react-native-paper'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { DrawerContentData } from './DrawerContentData'

import { DrawerContentStyle as styles } from "../../styles/DrawerContentStyle"

function DrawerContent( { navigation } ) {

    const [isDarkTheme, setIsDarkTheme] = useState(false)

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }

    const DrawerPresentationImage = () => (
        <View style={styles.drawerPresentation}>
            <Image style={styles.drawerPresentationImage} source={require('../../../assets/spf_dossier_covid_header.jpg')} />
        </View>
    )
    
    const DrawerSectionContent = () => (
        <Drawer.Section style={styles.drawerSection}>
            {
                DrawerContentData.map( (value) => (
                    <DrawerItem key={value.label}
                        icon={ ({color, size}) => (
                        <Icon 
                            name={value.nameIcon}
                            color={color}
                            size={size}
                        />
                        )}
                        label={value.label}
                        onPress={ () => {navigation.navigate(value.label)}}
                    />))
            }
        </Drawer.Section>
    )

    const DrawerSectionPreference = () => (
        <Drawer.Section style={styles.preferences} title="Preferences">
            <TouchableRipple onPress={() => {toggleTheme()}}>
                <View style={styles.preference}>
                    <Text>Dark Theme</Text>
                    <View pointerEvents="none">
                        <Switch value={isDarkTheme}/>                                        
                    </View>
                </View>
            </TouchableRipple>
        </Drawer.Section>
    )

    const DrawerBottomSection = () => (
        <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem
                icon={({color, size}) => (
                    <Icon
                        name="exit-to-app"
                        color={color}
                        size={size}
                    />
                )}
                label="Sign Out"
                onPress={() => {}}
            />
        </Drawer.Section>
    )

    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView>
                <View style={styles.drawerContent}>    
                    <DrawerPresentationImage />
                    <DrawerSectionContent />
                    <DrawerSectionPreference />
                </View>
            </DrawerContentScrollView>
            <DrawerBottomSection />
        </View>
    )
}

export default DrawerContent