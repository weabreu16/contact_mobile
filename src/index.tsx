import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from './screens/main';
import LoginScreen from './screens/login';
import SignupScreen from './screens/signup';
import HomeScreen from './screens/home';
import ContactFormScreen from './screens/contact_form';

const Drawer = createDrawerNavigator();

function App(props: any) {
  return (
    <Drawer.Navigator initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerType: 'back',
        overlayColor: '#000000'
      }}
    >
      <Drawer.Screen name="Main" component={MainScreen} />
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Signup" component={SignupScreen} />
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="ContactForm" component={ContactFormScreen} />
    </Drawer.Navigator>
  )
};

export default App;
