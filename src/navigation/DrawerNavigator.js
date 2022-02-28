import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AuthNavigator from "./AuthNavigator";
import AppNavigator from './AppNavigator';
import { SubscribeScreen, 
         LanguageScreen, 
         SettingScreen, 
         InfoScreen } from '../screens/Drawer';

import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            
            screenOptions={{
              backgroundColor: '#c6cbef',
              headerShown: false,
              drawerActiveBackgroundColor: '#aa18ea',
              drawerActiveTintColor: '#fff',
              drawerInactiveTintColor: '#333',
              drawerLabelStyle: {
                  marginLeft: -25,
                  fontFamily: 'Roboto-Medium',
                  fontSize: 15,
              },
          }}
          drawerContent={props => <CustomDrawer {...props} />} >
            <Drawer.Screen 
                name="Home"
                component={AppNavigator}
                options={{
                    drawerIcon: ({color}) => (
                      <Ionicons name="home-outline" size={22} color={color} />
                    ),
                  }} />
            <Drawer.Screen 
                name="Profile" 
                component={AuthNavigator}
                options={{
                    drawerIcon: ({color}) => (
                      <Ionicons name="person-outline" size={22} color={color} />
                    ),
                  }} />
            <Drawer.Screen 
                name="Language" 
                component={LanguageScreen}
                options={{
                    drawerIcon: ({color}) => (
                      <Ionicons name="language-outline" size={22} color={color} />
                    ),
                  }} />
            <Drawer.Screen 
                name="Abonner" 
                component={ SubscribeScreen }
                options={{
                    drawerIcon: ({color}) => (
                      <Ionicons name="document-attach-sharp" size={22} color={color} />
                    ),
                  }} />
            <Drawer.Screen 
                name="Parametres"
                component={SettingScreen}
                options={{
                    drawerIcon: ({color}) => (
                      <Ionicons name="settings-outline" size={22} color={color} />
                    ),
                  }} />
            <Drawer.Screen 
              name="Info" 
              component={InfoScreen}
              options={{
                drawerIcon: ({color}) => (
                  <Ionicons name="information-circle-sharp" size={22} color={color} />
                ),
              }} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;