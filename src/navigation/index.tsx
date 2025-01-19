import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {DrawerNavigator} from './DrawerNavigator';

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};
