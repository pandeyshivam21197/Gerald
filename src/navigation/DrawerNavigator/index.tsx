import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {BottomTabNavigator} from '../BottomTabNavigator';
import {NavigationScreenNames} from '../contants';
import {CustomDrawerContent} from './CustomDrawerContent';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerContent}
      screenOptions={{
        drawerType: 'back', // 'permanent'
        swipeEnabled: false,

        // drawerStyle: {
        //   width: '70%',
        //   position: 'absolute',
        //   left: 0,
        //   zIndex: -100,
        //   backgroundColor: 'red',
        // },
        // overlayColor: 'transparent',

        // sceneStyle: {
        //   zIndex: 1000,
        //   transform: [
        //     {rotateZ: '-15deg'},
        //     {translateX: 250},
        //     {translateY: 100},
        //   ],
        // },
      }}

      // screenOptions={{header: DrawerIcon}}
    >
      <Drawer.Screen
        name={NavigationScreenNames.BottomTab}
        component={BottomTabNavigator}
        options={{headerTitle: ''}}
      />
    </Drawer.Navigator>
  );
};
