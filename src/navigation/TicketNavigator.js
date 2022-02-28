import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ExplorerScreen from "../screens/Tab/ExplorerScreen";
import BuyTicketScreen from "../screens/BuyTicketScreen";
import BusScreen from '../screens/Tab/BusScreen';
import MapsScreen from "../screens/Tab/MapsScreen";

const Stack = createNativeStackNavigator();

const TicketNavigator = () => (
  <Stack.Navigator 
    screenOptions={{ headerShown: false }} 
  >
    <Stack.Screen name="Route" component={ExplorerScreen} />
    <Stack.Screen name="BuyTicket" component={BuyTicketScreen} />
    <Stack.Screen name="Bus" component={BusScreen} />
    <Stack.Screen name="Maps" component={MapsScreen} />
  </Stack.Navigator>
);

export default TicketNavigator;
