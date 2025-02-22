import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Contact} from '../../../screens/contact';

const Stack = createStackNavigator();

export const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
};
