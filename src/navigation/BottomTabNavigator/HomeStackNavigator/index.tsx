import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Screen1} from '../../../screens/home/screen1';
import {Screen2} from '../../../screens/home/screen2';
import {NavigationScreenNames} from '../../contants';

const Stack = createStackNavigator();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NavigationScreenNames.Screen1} component={Screen1} />
      <Stack.Screen name={NavigationScreenNames.Screen2} component={Screen2} />
    </Stack.Navigator>
  );
};
