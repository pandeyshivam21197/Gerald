import React, {FC, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStackNavigator} from './HomeStackNavigator';
import {ContactStackNavigator} from './ContactStackNavigator';
import {NavigationScreenNames} from '../contants';
import Icon from '../../components/Icon';
import {IconName} from '../../components/Icon/constants';
import Animated from 'react-native-reanimated';
import {DrawerHeaderProps, useDrawerStatus} from '@react-navigation/drawer';
import {DrawerHeader} from '../DrawerNavigator/DrawerHeader';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';

const Tab = createBottomTabNavigator();

interface IProps extends DrawerHeaderProps {
  drawerSceneAnimatedStyle: StyleProp<ViewStyle>;
  drawerHeaderAnimatedStyle: StyleProp<ViewStyle>;
  onShowDrawer: () => void;
  onHideDrawer: () => void;
}

export const BottomTabNavigator: FC<IProps> = props => {
  const {
    drawerHeaderAnimatedStyle,
    drawerSceneAnimatedStyle,
    onHideDrawer,
    onShowDrawer,
  } = props;

  const status = useDrawerStatus();

  useEffect(() => {
    if (status === 'open') {
      onShowDrawer();
    } else {
      onHideDrawer();
    }
  }, [status]);

  const renderHomeIcon = () => <Icon name={IconName.home} size={20} />;
  const renderContactIcon = () => <Icon name={IconName.phone} size={20} />;

  return (
    <Animated.View style={[styles.container, drawerSceneAnimatedStyle]}>
      <DrawerHeader {...props} animatedStyle={drawerHeaderAnimatedStyle} />
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
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
