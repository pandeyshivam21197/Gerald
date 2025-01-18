import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStackNavigator} from './HomeStackNavigator';
import {ContactStackNavigator} from './ContactStackNavigator';
import {NavigationScreenNames} from '../contants';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={NavigationScreenNames.HomeStack}
        component={HomeStackNavigator}
      />
      <Tab.Screen
        name={NavigationScreenNames.ContactStack}
        component={ContactStackNavigator}
      />
    </Tab.Navigator>
  );
};
