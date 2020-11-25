import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'
import DrawerContent from "../components/DrawerContent/DrawerContent"

import Home from '../views/Home';
import Dashboard from '../views/Dashboard';
import MapCovid from '../views/MapCovid'

const Drawer = createDrawerNavigator()

export default function Router() {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={navigation => <DrawerContent {...navigation}/>}>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Dashboard" component={Dashboard} />
                <Drawer.Screen name="MapCovid" component={MapCovid} />
            </Drawer.Navigator>
      </NavigationContainer>
    )
}
