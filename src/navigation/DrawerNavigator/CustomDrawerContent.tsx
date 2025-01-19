import React, {FC, useState} from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {NavigationScreenNames} from '../contants';
import {StyleSheet, Text, ViewStyle} from 'react-native';
import {StyleProp} from 'react-native';
import Animated from 'react-native-reanimated';

interface IProps extends DrawerContentComponentProps {
  drawerCustomContentAnimatedStyle: StyleProp<ViewStyle>;
}

export const CustomDrawerContent: FC<IProps> = props => {
  const {navigation, drawerCustomContentAnimatedStyle} = props;
  const [focusedNavName, setFocusedNavName] =
    useState<NavigationScreenNames | null>(NavigationScreenNames.Screen1);

  return (
    <Animated.View style={[drawerCustomContentAnimatedStyle, styles.container]}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.drawerContainer}>
        <Text style={styles.heading}>Beka</Text>
        <DrawerItem
          focused={focusedNavName === NavigationScreenNames.Screen1}
          label={NavigationScreenNames.Screen1}
          labelStyle={styles.lableStyle}
          onPress={() => {
            navigation.navigate(NavigationScreenNames.BottomTab, {
              screen: NavigationScreenNames.HomeStack,
              params: {screen: NavigationScreenNames.Screen1},
            });
            setFocusedNavName(NavigationScreenNames.Screen1);
          }}
          activeTintColor="#F9695C"
          inactiveTintColor="white"
          activeBackgroundColor="#412553"
          style={styles.drawerItem}
        />
        <DrawerItem
          focused={focusedNavName === NavigationScreenNames.Screen2}
          label={NavigationScreenNames.Screen2}
          labelStyle={styles.lableStyle}
          onPress={() => {
            navigation.navigate(NavigationScreenNames.BottomTab, {
              screen: NavigationScreenNames.HomeStack,
              params: {screen: NavigationScreenNames.Screen2},
            });

            setFocusedNavName(NavigationScreenNames.Screen2);
          }}
          activeTintColor="#F9695C"
          inactiveTintColor="white"
          activeBackgroundColor="#412553"
          style={styles.drawerItem}
        />
        <DrawerItem
          focused={focusedNavName === NavigationScreenNames.ContactStack}
          label={NavigationScreenNames.ContactScreen}
          labelStyle={styles.lableStyle}
          onPress={() => {
            navigation.navigate(NavigationScreenNames.BottomTab, {
              screen: NavigationScreenNames.ContactStack,
            });

            setFocusedNavName(NavigationScreenNames.ContactStack);
          }}
          activeTintColor="#F9695C"
          inactiveTintColor="white"
          activeBackgroundColor="#412553"
          style={styles.drawerItem}
        />
      </DrawerContentScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#220E2F',
  },
  drawerItem: {
    width: '100%',
    padding: 0,
    borderRadius: 20,
  },
  drawerContainer: {
    flex: 1,
    flexDirection: 'column',
    gap: 20,
    alignItems: 'center',
    paddingTop: 100,
  },
  heading: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  lableStyle: {
    fontSize: 20,
    fontWeight: '600',
  },
});
