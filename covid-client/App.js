import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'

import DrawerContent from "./src/components/DrawerContent/DrawerContent"

import Home from './src/views/Home';
import Dashboard from './src/views/Dashboard';
import { View } from 'native-base';

const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={navigation => <DrawerContent {...navigation}/>}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="MapCovid" component={Dashboard} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App