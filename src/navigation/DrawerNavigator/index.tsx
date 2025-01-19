import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationScreenNames} from '../contants';
import {DrawerNavigator} from './index2';
import {DrawerSideBar} from './DrawerSideBar';

const Stack = createStackNavigator();

export const DrawerStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={NavigationScreenNames.Drawer}
        component={DrawerNavigator}
      />
      <Stack.Screen
        name={NavigationScreenNames.DrawerSideBar}
        component={DrawerSideBar}
      />
    </Stack.Navigator>
  );
};
