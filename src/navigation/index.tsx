import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {DrawerNavigator} from './DrawerNavigator/index2';

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};
