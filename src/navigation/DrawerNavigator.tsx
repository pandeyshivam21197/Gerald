import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {BottomTabNavigator} from './BottomTabNavigator';
import {NavigationScreenNames} from './contants';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name={NavigationScreenNames.BottomTab}
        component={BottomTabNavigator}
      />
    </Drawer.Navigator>
  );
};
