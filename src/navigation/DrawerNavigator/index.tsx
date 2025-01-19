import React, {useCallback} from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {BottomTabNavigator} from '../BottomTabNavigator';
import {NavigationScreenNames} from '../contants';
import {CustomDrawerContent} from './CustomDrawerContent';
import {StyleSheet} from 'react-native';
import userNavigationAnimation from './userNavigationAnimation';
import Animated from 'react-native-reanimated';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const {
    drawerSceneAnimatedStyle,
    drawerHeaderAnimatedStyle,
    drawerNavigatorStyle,
    drawerCustomContentAnimatedStyle,
    onShowDrawer,
    onHideDrawer,
  } = userNavigationAnimation();

  const renderBottomTabNavigator = useCallback(
    (props: any) => (
      <BottomTabNavigator
        {...props}
        drawerSceneAnimatedStyle={drawerSceneAnimatedStyle}
        drawerHeaderAnimatedStyle={drawerHeaderAnimatedStyle}
        onShowDrawer={onShowDrawer}
        onHideDrawer={onHideDrawer}
      />
    ),
    [],
  );

  const renderDrawerContent = useCallback(
    (props: DrawerContentComponentProps) => (
      <CustomDrawerContent
        {...props}
        drawerCustomContentAnimatedStyle={drawerCustomContentAnimatedStyle}
      />
    ),
    [],
  );

  return (
    <Animated.View style={[drawerNavigatorStyle, styles.container]}>
      <Drawer.Navigator
        drawerContent={renderDrawerContent}
        screenOptions={{
          drawerType: 'back',
          swipeEnabled: false,
          overlayColor: 'transparent',
          drawerStyle: styles.drawerContainer,
          sceneStyle: styles.drawerScene,
          headerShown: false,
        }}>
        <Drawer.Screen
          name={NavigationScreenNames.BottomTab}
          component={renderBottomTabNavigator}
        />
      </Drawer.Navigator>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerContainer: {
    width: '40%',
  },
  drawerScene: {
    backgroundColor: '#220E2F',
  },
});
