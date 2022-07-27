import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from './screens/main';
import LoginScreen from './screens/login';

const Drawer = createDrawerNavigator();

function App(props) {
  return (
    <Drawer.Navigator initialRouteName="Main"
      screenOptions={{
        headerShown: false,
        drawerType: 'back',
        overlayColor: '#000000'
      }}
    >
      <Drawer.Screen name="Main" component={LoginScreen} />
    </Drawer.Navigator>
  )
};

export default App;
