import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from './screens/main';
import LoginScreen from './screens/login';
import SignupScreen from './screens/signup';

const Drawer = createDrawerNavigator();

function App(props: any) {
  return (
    <Drawer.Navigator initialRouteName="Main"
      screenOptions={{
        headerShown: false,
        drawerType: 'back',
        overlayColor: '#000000'
      }}
    >
      <Drawer.Screen name="Main" component={MainScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Signup" component={SignupScreen} />
    </Drawer.Navigator>
  )
};

export default App;
