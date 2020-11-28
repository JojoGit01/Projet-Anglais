import React from 'react'
import { StatusBar } from 'react-native'
import Router from './src/Router/Router'
import ThemeManager from './src/themes/themeContainer'


const App = () => {
  return (
    <ThemeManager>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
      <Router/>
    </ThemeManager>
  )
}

export default App