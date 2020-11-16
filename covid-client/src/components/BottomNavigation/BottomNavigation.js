import React, { useState } from 'react'
import { BottomNavigation, Text } from 'react-native-paper';
import Home from '../../views/Home'
import Dashboard from '../../views/Home'
import MapCovid from '../../views/Home'


const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

export const BottomNavigationCustom = () => {
    
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Music', icon: 'queue-music' },
    { key: 'albums', title: 'Albums', icon: 'album' },
    { key: 'recents', title: 'Recents', icon: 'history' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};
