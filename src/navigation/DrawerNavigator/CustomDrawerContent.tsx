import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {NavigationScreenNames} from '../contants';

export const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const {navigation} = props;

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        flex: 1,
        flexDirection: 'column',
        gap: 20,
      }}>
      <DrawerItem
        focused
        label={NavigationScreenNames.Screen1}
        onPress={() =>
          navigation.navigate(NavigationScreenNames.BottomTab, {
            screen: NavigationScreenNames.HomeStack,
            params: {screen: NavigationScreenNames.Screen1},
          })
        }
      />
      <DrawerItem
        focused
        label={NavigationScreenNames.Screen2}
        onPress={() =>
          navigation.navigate(NavigationScreenNames.BottomTab, {
            screen: NavigationScreenNames.HomeStack,
            params: {screen: NavigationScreenNames.Screen2},
          })
        }
      />
      <DrawerItem
        focused
        label={NavigationScreenNames.ContactScreen}
        onPress={() =>
          navigation.navigate(NavigationScreenNames.BottomTab, {
            screen: NavigationScreenNames.ContactStack,
          })
        }
      />
    </DrawerContentScrollView>
  );
};
