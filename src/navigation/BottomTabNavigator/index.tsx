import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStackNavigator} from './HomeStackNavigator';
import {ContactStackNavigator} from './ContactStackNavigator';
import {NavigationScreenNames} from '../contants';
import Icon from '../../components/Icon';
import {IconName} from '../../components/Icon/constants';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  const renderHomeIcon = () => <Icon name={IconName.home} size={20} />;
  const renderContactIcon = () => <Icon name={IconName.phone} size={20} />;

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={NavigationScreenNames.HomeStack}
        component={HomeStackNavigator}
        options={{tabBarIcon: renderHomeIcon, tabBarLabel: 'Home'}}
      />
      <Tab.Screen
        name={NavigationScreenNames.ContactStack}
        component={ContactStackNavigator}
        options={{tabBarIcon: renderContactIcon, tabBarLabel: 'Contact'}}
      />
    </Tab.Navigator>
  );
};
