import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/main';
import LoginScreen from './screens/login';
import SignupScreen from './screens/signup';
import HomeScreen from './screens/home';
import ContactFormScreen from './screens/contact_form';
import AboutScreen from './screens/about';
import Sidebar from './components/side_bar';
import TestScreen from './screens/test';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const screenOptions: any = {
  headerShown: false,
  drawerType: 'back',
  overlayColor: '#000000'
};

function HomeNavigator(props: any) {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ContactForm" component={ContactFormScreen} />
    </Stack.Navigator>
  )
}

function FeatureNavigator(props: any) {
  return (
    <Drawer.Navigator initialRouteName="HomeNav"
      screenOptions={screenOptions}
      drawerContent={props => <Sidebar {...props} />}
    >
      <Drawer.Screen name="HomeNav" component={HomeNavigator} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  );
}

function App(props: any) {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Feature" component={FeatureNavigator} />
      <Stack.Screen name="Test" component={TestScreen} />
    </Stack.Navigator>
  );
};

export default App;
